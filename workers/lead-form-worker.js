function generateId() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 12; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

function actionAck(success, message, requestId, actionId) {
  return {
    success,
    message,
    requestId,
    actionId,
    status: success ? 'completed' : 'failed',
    recordedAt: new Date().toISOString(),
  };
}

function actionError(message, errorCode, requestId, fieldErrors, retryable) {
  return {
    success: false,
    message,
    errorCode,
    requestId,
    fieldErrors: fieldErrors || {},
    retryable: retryable !== undefined ? retryable : true,
  };
}

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Idempotency-Key',
      'Access-Control-Expose-Headers': 'Idempotency-Key',
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    if (request.method === 'GET') {
      return new Response(JSON.stringify({ status: 'ok' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify(actionError(
        'Method not allowed', 'METHOD_NOT_ALLOWED', generateId(), null, false
      )), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const requestId = generateId()
    const idempotencyKey = request.headers.get('Idempotency-Key')

    try {
      // Idempotency check
      if (idempotencyKey && env.DB) {
        const existing = await env.DB.prepare(
          `SELECT response_body FROM lead_idempotency_cache
           WHERE idempotency_key = ? AND expires_at > datetime('now')`
        ).bind(idempotencyKey).first()
        if (existing) {
          const cached = JSON.parse(existing.response_body)
          return new Response(JSON.stringify(cached), {
            status: cached.statusCode || 201,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          })
        }
      }

      const body = await request.json()
      const { school, city, role, students, board, phone, email, goal } = body

      if (!school || !city || !role || !students || !board || !phone || !email) {
        return new Response(JSON.stringify(actionError(
          'Missing required fields', 'VALIDATION_FAILED', requestId,
          {
            school: school ? undefined : 'School name is required',
            city: city ? undefined : 'City is required',
            role: role ? undefined : 'Role is required',
            students: students ? undefined : 'Student count is required',
            board: board ? undefined : 'Board is required',
            phone: phone ? undefined : 'Phone is required',
            email: email ? undefined : 'Email is required',
          },
          false
        )), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      const actionId = `lead_${generateId()}`
      const recordedAt = new Date().toISOString()

      if (env.DB) {
        await env.DB.prepare(
          `INSERT INTO leads (school, city, role, students, board, phone, email, goal, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`
        ).bind(school, city, role, students, board, phone, email, goal || null).run()

        // Cache idempotency response
        if (idempotencyKey) {
          const responseBody = JSON.stringify(actionAck(true, 'Lead recorded successfully', requestId, actionId))
          await env.DB.prepare(
            `INSERT OR REPLACE INTO lead_idempotency_cache (idempotency_key, response_body, status_code, expires_at)
             VALUES (?, ?, 201, datetime('now', '+1 hour'))`
          ).bind(idempotencyKey, responseBody).run()
        }
      }

      return new Response(JSON.stringify(actionAck(true, 'Lead recorded successfully', requestId, actionId)), {
        status: 201,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    } catch (err) {
      return new Response(JSON.stringify(actionError(
        'Could not process form. Please try again.', 'INTERNAL_ERROR', requestId, null, true
      )), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
  },
}
