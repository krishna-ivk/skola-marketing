'use client';

import { useState, FormEvent } from 'react';

const LEAD_FORM_URL = 'https://skola-lead-form.skola.workers.dev';

interface FormData {
  school: string;
  city: string;
  role: string;
  students: string;
  board: string;
  phone: string;
  email: string;
  goal: string;
}

const initialForm: FormData = {
  school: '', city: '', role: '', students: '',
  board: '', phone: '', email: '', goal: '',
};

interface FieldErrors {
  school?: string; city?: string; role?: string;
  students?: string; board?: string; phone?: string; email?: string;
}

export default function BookDemoForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  function validate(): FieldErrors {
    const errors: FieldErrors = {};
    if (!form.school.trim()) errors.school = 'School name is required';
    if (!form.city.trim()) errors.city = 'City is required';
    if (!form.role) errors.role = 'Please select your role';
    if (!form.students) errors.students = 'Please select student range';
    if (!form.board) errors.board = 'Please select your board';
    if (!form.phone.trim()) errors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) errors.phone = 'Please enter a valid 10-digit Indian mobile number';
    if (!form.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Please enter a valid email address';
    return errors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'submitting') return;

    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus('submitting');
    setServerError('');

    try {
      const res = await fetch(LEAD_FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          school: form.school.trim(),
          city: form.city.trim(),
          role: form.role,
          students: form.students,
          board: form.board,
          phone: form.phone.trim(),
          email: form.email.trim(),
          goal: form.goal.trim() || undefined,
        }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        const data = await res.json().catch(() => ({}));
        setServerError(data.message || data.error || 'Could not submit. Please try again.');
        setStatus('error');
      }
    } catch {
      setServerError('Could not reach server. Please check your connection and try again.');
      setStatus('error');
    }
  }

  function updateField(field: keyof FormData, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
    setFieldErrors(prev => ({ ...prev, [field]: undefined }));
  }

  if (status === 'success') {
    return (
      <div className="mx-auto mt-12 max-w-xl">
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <svg className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="mt-4 text-xl font-bold text-gray-900">Request Received!</h2>
          <p className="mt-2 text-gray-600">Demo request received. We will contact you soon.</p>
          <p className="mt-1 text-sm text-gray-500">A member of our team will reach out within 24 hours.</p>
        </div>
      </div>
    );
  }

  function inputClass(field: keyof FieldErrors): string {
    return `mt-1 block w-full rounded-md border ${fieldErrors[field as keyof FieldErrors] ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-skola-500 focus:ring-skola-500'} px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-1`;
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl space-y-6" noValidate>
      {serverError && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">{serverError}</div>
      )}

      <div>
        <label htmlFor="school" className="block text-sm font-medium text-gray-900">School name</label>
        <input id="school" value={form.school} onChange={e => updateField('school', e.target.value)} className={inputClass('school')} placeholder="e.g. Delhi Public School" />
        {fieldErrors.school && <p className="mt-1 text-xs text-red-600">{fieldErrors.school}</p>}
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-900">City</label>
        <input id="city" value={form.city} onChange={e => updateField('city', e.target.value)} className={inputClass('city')} placeholder="e.g. Mumbai" />
        {fieldErrors.city && <p className="mt-1 text-xs text-red-600">{fieldErrors.city}</p>}
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-900">Your role</label>
        <select id="role" value={form.role} onChange={e => updateField('role', e.target.value)} className={inputClass('role')}>
          <option value="">Select your role</option>
          <option value="principal">Principal</option>
          <option value="owner">School Owner</option>
          <option value="academic-head">Academic Head</option>
          <option value="teacher">Teacher</option>
          <option value="other">Other</option>
        </select>
        {fieldErrors.role && <p className="mt-1 text-xs text-red-600">{fieldErrors.role}</p>}
      </div>

      <div>
        <label htmlFor="students" className="block text-sm font-medium text-gray-900">Number of students</label>
        <select id="students" value={form.students} onChange={e => updateField('students', e.target.value)} className={inputClass('students')}>
          <option value="">Select range</option>
          <option value="<200">Less than 200</option>
          <option value="200-500">200 – 500</option>
          <option value="501-1000">501 – 1,000</option>
          <option value="1001-2000">1,001 – 2,000</option>
          <option value=">2000">More than 2,000</option>
        </select>
        {fieldErrors.students && <p className="mt-1 text-xs text-red-600">{fieldErrors.students}</p>}
      </div>

      <div>
        <label htmlFor="board" className="block text-sm font-medium text-gray-900">Board</label>
        <select id="board" value={form.board} onChange={e => updateField('board', e.target.value)} className={inputClass('board')}>
          <option value="">Select board</option>
          <option value="cbse">CBSE</option>
          <option value="state">State Board</option>
          <option value="icse">ICSE</option>
          <option value="other">Other</option>
        </select>
        {fieldErrors.board && <p className="mt-1 text-xs text-red-600">{fieldErrors.board}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Phone number</label>
        <input id="phone" value={form.phone} onChange={e => updateField('phone', e.target.value)} type="tel" className={inputClass('phone')} placeholder="e.g. 98765 43210" />
        {fieldErrors.phone && <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
        <input id="email" value={form.email} onChange={e => updateField('email', e.target.value)} type="email" className={inputClass('email')} placeholder="principal@school.edu" />
        {fieldErrors.email && <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>}
      </div>

      <div>
        <label htmlFor="goal" className="block text-sm font-medium text-gray-900">What are you trying to improve?</label>
        <textarea id="goal" value={form.goal} onChange={e => updateField('goal', e.target.value)} rows={3} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-skola-500 focus:outline-none focus:ring-1 focus:ring-skola-500" placeholder="e.g. Better skill tracking, CBE alignment, parent engagement..." />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-md bg-skola-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-skola-700 focus:outline-none focus:ring-2 focus:ring-skola-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Book a School Demo'}
      </button>
    </form>
  );
}
