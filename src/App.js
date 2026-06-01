import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

const EMAILJS_SERVICE  = 'service_dhh4yei';
const EMAILJS_TEMPLATE = 'template_4p9i9qo';
const EMAILJS_KEY      = 'GdgmgBzu1b3UpYQzx';

export default function App() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="page">
      <div className="bg-grid" />

      <div className="container">

        <header className="top">
          <span className="badge">Coming Soon</span>
        </header>

        <main className="hero">
          <p className="eyebrow">Portfolio &amp; CV</p>
          <h1 className="name">
            Amer<br /><em>Hadžidedić</em>
          </h1>

          <div className="tags">
            <span className="tag">SME</span>
            <span className="tag-dot">·</span>
            <span className="tag">Shift Lead in BPO</span>
            <span className="tag-dot">·</span>
            <span className="tag">Hospitality Project</span>
            <span className="tag-dot">·</span>
            <span className="tag">Bosnia &amp; Herzegovina</span>
          </div>

          <a
            className="linkedin"
            href="https://www.linkedin.com/in/amer-hadzidedic/"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </main>

        <section className="form-section">
          <h2 className="form-title">Get in touch</h2>
          <form className="form" onSubmit={submit}>
            <div className="fields">
              <div className="field">
                <label>Name</label>
                <input name="name" value={form.name} onChange={handle} placeholder="Your name" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handle} placeholder="your@email.com" required />
              </div>
            </div>
            <div className="field">
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handle} placeholder="What's on your mind?" rows={5} required />
            </div>
            <button type="submit" className={`btn ${status === 'sending' ? 'sending' : ''}`} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && <p className="feedback success">Message sent! I'll get back to you soon.</p>}
            {status === 'error'   && <p className="feedback error">Something went wrong. Please try again.</p>}
          </form>
        </section>

        <footer className="footer">
          <span className="footer-copy">© 2026 Amer Hadžidedić</span>
          <span className="footer-mid">Designed &amp; Developed by Amer Hadžidedić</span>
          <span className="footer-email">amerhadzidedic@hotmail.de</span>
        </footer>

      </div>
    </div>
  );
}
