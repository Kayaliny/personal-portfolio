import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { FadeUp } from './animations';

type Errors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

async function tryJsonEndpoint(url: string, form: ContactForm) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) return false;

  const data = (await response.json()) as { ok?: boolean; error?: string };
  if (!response.ok || !data?.ok) {
    throw new Error(data?.error || 'Failed to send message. Please try again.');
  }
  return true;
}

async function sendContactForm(form: ContactForm) {
  const endpoints = import.meta.env.DEV
    ? ['/api/contact']
    : ['/api/contact.php', '/api/contact'];

  let lastError = 'Failed to send message. Please try again.';

  for (const endpoint of endpoints) {
    try {
      const sent = await tryJsonEndpoint(endpoint, form);
      if (sent) return;
    } catch (error) {
      if (error instanceof TypeError) {
        lastError = 'Could not reach the mail server. Please try again.';
        continue;
      }
      throw error;
    }
  }

  throw new Error(lastError);
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') !== '1') return;

    setSubmitted(true);
    window.history.replaceState({}, '', `${window.location.pathname}#contact`);
  }, []);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!emailRegex.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.subject.trim()) e.subject = 'Please enter a subject.';
    if (!form.message.trim()) e.message = 'Please enter a message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setSending(true);
    setSubmitError('');

    try {
      await sendContactForm(form);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      );
    } finally {
      setSending(false);
    }
  };

  const contactLinks = [
    { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
    { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin, external: true },
    { label: 'GitHub', href: profile.github, icon: Github, external: true },
  ];

  const inputClass = (field: keyof Errors) =>
    `w-full rounded-lg border bg-bg-deep/60 px-4 py-3 text-sm text-text-main placeholder:text-secondary/50 transition-colors focus:outline-none focus:ring-2 focus:ring-teal/40 ${
      errors[field] ? 'border-red-400/60' : 'border-border focus:border-teal/50'
    }`;

  return (
    <section id="contact" className="section-padding bg-bg-deep">
      <div className="container-max">
        <FadeUp>
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="heading-lg text-text-main">Let's Build Something Meaningful</h2>
          <p className="mt-5 max-w-2xl body-lg">
            Interested in digital transformation, workflow automation, or practical business
            technology solutions? Let's connect.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <FadeUp className="lg:col-span-5">
            <div className="space-y-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-bg-secondary/50 p-4 transition-all hover:border-teal/40"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-teal/5 text-teal-light transition-colors group-hover:border-teal/40">
                      <Icon size={18} />
                    </span>
                    <span className="text-sm font-medium text-text-main">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </FadeUp>

          <FadeUp className="lg:col-span-7" delay={0.1}>
            {submitted ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/15 text-teal-light">
                  <Send size={20} />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-text-main">
                  Message sent successfully
                </h3>
                <p className="mt-2 max-w-md text-sm text-secondary">
                  Thanks for reaching out. Your message has been sent to {profile.email}.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-teal-light hover:text-text-main"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-border bg-bg-secondary/50 p-6 md:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-main">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={inputClass('name')}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-main">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={inputClass('email')}
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-text-main">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className={inputClass('subject')}
                    placeholder="What's this about?"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1.5 text-xs text-red-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-main">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`${inputClass('message')} resize-none`}
                    placeholder="Tell me about your project or opportunity..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p className="mt-4 text-sm text-red-400" role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-bg-deep transition-all hover:bg-teal-light disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send size={15} />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
