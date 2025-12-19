import React, { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const WEBHOOK_URL = 'https://hook.relay.app/api/v1/playbook/cmj3yhez10apd0pkq0ypg8a0l/trigger/iq8IB1plDWLpl89OGLtESw';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-black border-t border-zinc-900 relative">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white">Contact Us</h2>
          <p className="text-zinc-400 text-lg font-light">
            Have a question or inquiry? <br className="hidden md:block"/>
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-zinc-900/30 p-8 md:p-12 rounded-sm border border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2
                ${status === 'success' 
                  ? 'bg-green-600 text-white cursor-default' 
                  : status === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-black hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed'
                }`}
            >
              {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
              {status === 'success' && <CheckCircle className="w-4 h-4" />}
              {status === 'error' && <AlertCircle className="w-4 h-4" />}
              
              <span>
                {status === 'loading' ? 'Sending...' : 
                 status === 'success' ? 'Message Sent' : 
                 status === 'error' ? 'Error - Try Again' : 
                 'Submit'}
              </span>
            </button>
            {status === 'success' && (
              <p className="text-green-500 text-xs text-center mt-3 animate-fade-in">
                Thank you! We've received your message and will be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-xs text-center mt-3 animate-fade-in">
                Something went wrong. Please try again later.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;