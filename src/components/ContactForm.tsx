'use client';

import { useState, FormEvent } from 'react';
import { leadFormUrl } from '@/lib/runtime-config';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  function validate(): Record<string, string> {
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = 'Name is required';
    if (!email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Please enter a valid email address';
    if (!message.trim()) errors.message = 'Message is required';
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

    const idKey = `ui_${Date.now()}_contact_${name.trim().slice(0, 20).replace(/\s+/g, '_')}`;

    try {
      const res = await fetch(leadFormUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': idKey,
        },
        body: JSON.stringify({
          school: name.trim(),
          city: 'Unknown',
          role: 'other',
          students: '<200',
          board: 'other',
          phone: '0000000000',
          email: email.trim(),
          goal: message.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('success');
      } else {
        setServerError(data.message || data.errorCode || 'Could not send. Please try again.');
        setStatus('error');
      }
    } catch {
      setServerError('Could not reach server. Please check your connection.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
          <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="mt-3 text-lg font-bold text-gray-900">Message sent!</h3>
        <p className="mt-1 text-sm text-gray-600">We will get back to you soon.</p>
      </div>
    );
  }

  function inputClass(field: string): string {
    return `mt-1 block w-full rounded-md border ${fieldErrors[field] ? 'border-red-300' : 'border-gray-300'} px-3 py-2 text-gray-900 shadow-sm focus:border-skola-500 focus:outline-none focus:ring-1 focus:ring-skola-500`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {serverError && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">{serverError}</div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
        <input id="name" value={name} onChange={e => { setName(e.target.value); setFieldErrors(p => ({ ...p, name: '' })); }} type="text" className={inputClass('name')} />
        {fieldErrors.name && <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
        <input id="email" value={email} onChange={e => { setEmail(e.target.value); setFieldErrors(p => ({ ...p, email: '' })); }} type="email" className={inputClass('email')} />
        {fieldErrors.email && <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
        <textarea id="message" value={message} onChange={e => { setMessage(e.target.value); setFieldErrors(p => ({ ...p, message: '' })); }} rows={4} className={inputClass('message')} />
        {fieldErrors.message && <p className="mt-1 text-xs text-red-600">{fieldErrors.message}</p>}
      </div>
      <button type="submit" disabled={status === 'submitting'} className="w-full rounded-md bg-skola-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-skola-700 focus:outline-none focus:ring-2 focus:ring-skola-500 focus:ring-offset-2 disabled:opacity-50">
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
