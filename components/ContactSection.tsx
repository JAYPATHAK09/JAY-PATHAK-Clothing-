import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle, AlertCircle, History, Trash2 } from 'lucide-react';

const WEBHOOK_URL = 'https://hook.relay.app/api/v1/playbook/cmj3yhez10apd0pkq0ypg8a0l/trigger/iq8IB1plDWLpl89OGLtESw';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SavedInquiry {
  id: string;
  name: string;
  date: string;
  preview: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [inquiries, setInquiries] = useState<SavedInquiry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('noir_inquiries');
    if (saved) setInquiries(JSON.parse(saved));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const clearHistory = () => {
    localStorage.removeItem('noir_inquiries');
    setInquiries([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate real interaction by persisting locally too
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        
        // Save inquiry locally for persistence requirement
        const newInquiry: SavedInquiry = {
          id: Date.now().toString(),
          name: formData.name,
          date: new Date().toLocaleDateString(),
          preview: formData.message.substring(0, 30) + '...'
        };
        const updatedInquiries = [newInquiry, ...inquiries].slice(0, 3);
        setInquiries(updatedInquiries);
        localStorage.setItem('noir_inquiries', JSON.stringify(updatedInquiries));

        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-black border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-20">
        
        {/* Contact Info Side */}
        <div className="lg:w-1/3 space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">Get In<br/>Touch</h2>
            <div className="h-1 w-12 bg-white"></div>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              Wholesale inquiries, bespoke projects, or just a quick hello. We operate at the intersection of quality and community.
            </p>
          </div>

          <div className="space-y-4">
             <div className="flex items-center space-x-3 text-xs uppercase tracking-widest font-bold text-zinc-400">
                <span className="w-8 h-[1px] bg-zinc-800"></span>
                <span>Inquiry History</span>
             </div>
             {inquiries.length > 0 ? (
               <div className="space-y-4">
                 {inquiries.map(item => (
                   <div key={item.id} className="p-4 bg-zinc-900/50 border border-zinc-800 animate-fade-in group">
                     <div className="flex justify-between items-start mb-1">
                       <span className="text-[10px] font-bold uppercase text-white tracking-widest">{item.name}</span>
                       <span className="text-[8px] text-zinc-600 font-bold">{item.date}</span>
                     </div>
                     <p className="text-[10px] text-zinc-500 italic">"{item.preview}"</p>
                   </div>
                 ))}
                 <button 
                  onClick={clearHistory}
                  className="text-[8px] uppercase tracking-[0.3em] font-bold text-zinc-600 hover:text-red-500 transition-colors flex items-center gap-2"
                >
                   <Trash2 className="w-3 h-3" />
                   Clear Cache
                 </button>
               </div>
             ) : (
               <p className="text-[10px] text-zinc-700 font-medium italic">No recent inquiries found on this device.</p>
             )}
          </div>
        </div>

        {/* Form Side */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="bg-zinc-950 p-10 md:p-16 border border-zinc-900 relative overflow-hidden">
            {/* Design accents */}
            <div className="absolute top-0 right-0 p-8">
              <span className="text-[4rem] font-black text-zinc-900/40 select-none">01</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Hedi Slimane"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-white placeholder-zinc-800 focus:outline-none focus:border-white transition-all text-sm font-light"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hedi@noir.com"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-white placeholder-zinc-800 focus:outline-none focus:border-white transition-all text-sm font-light"
                />
              </div>
            </div>

            <div className="mt-12 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Brief Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project or query..."
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-white placeholder-zinc-800 focus:outline-none focus:border-white transition-all text-sm font-light resize-none"
              />
            </div>

            <div className="mt-16">
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`group relative w-full py-6 text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-700 overflow-hidden
                  ${status === 'success' 
                    ? 'bg-green-600 text-white' 
                    : status === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-black hover:invert'
                  }`}
              >
                <div className="flex items-center justify-center space-x-3">
                  {status === 'loading' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : status === 'success' ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : status === 'error' ? (
                    <AlertCircle className="w-4 h-4" />
                  ) : null}
                  
                  <span>
                    {status === 'loading' ? 'Transmitting' : 
                     status === 'success' ? 'Confirmed' : 
                     status === 'error' ? 'Transmission Failed' : 
                     'Submit Inquiry'}
                  </span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;