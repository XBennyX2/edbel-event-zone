import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  Send, 
  Copy, 
  Check, 
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';
import FacebookIcon from './icons/FacebookIcon';

const EVENT_TYPES = [
  'Grand Wedding & Ballroom Production',
  'Traditional Engagement (ሽምግልና & ቀለበት)',
  'Romantic Proposal ("Will You Marry Me?")',
  'Christening & Baptism Celebration (ክርስትና)',
  'Milestone Birthday & Themed Party',
  'Luxury Marquee Tent & Outdoor Pavilion',
  'Academic Graduation & Celebration',
  'Corporate Gala Dinner & VIP Banquet'
];

export default function BookingSection({ initialStyle, onCloseStyle }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Grand Wedding & Ballroom Production',
    eventDate: '',
    location: '',
    estimatedBudget: 'Consultation & Custom Scope',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (initialStyle) {
      setFormData(prev => ({
        ...prev,
        notes: prev.notes ? `${prev.notes}\nSelected Style: ${initialStyle}` : `Selected Style: ${initialStyle}`,
      }));
    }
  }, [initialStyle]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your telephone number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid telephone number.';
    }
    if (!formData.eventDate) errs.eventDate = 'Please select your target celebration date.';
    if (!formData.location.trim()) errs.location = 'Please state your intended venue or area in Addis Ababa.';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `EDB-${Date.now().toString().slice(-6)}`;
    setReferenceId(ref);

    const savedInquiries = JSON.parse(localStorage.getItem('edbel_inquiries') || '[]');
    savedInquiries.push({ ...formData, referenceId: ref, timestamp: new Date().toISOString() });
    localStorage.setItem('edbel_inquiries', JSON.stringify(savedInquiries));

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C29B38', '#E4CA7E', '#FAF9F5', '#836316']
      });
    } catch (e) {}

    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Edbel Event Zone,\n\nI would like to schedule an event consultation (Ref: ${referenceId || 'New'}):\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Email: ${formData.email || 'N/A'}\n` +
      `• Event Type: ${formData.eventType}\n` +
      `• Preferred Date: ${formData.eventDate}\n` +
      `• Venue/Location: ${formData.location}\n` +
      `• Budget Tier: ${formData.estimatedBudget}\n` +
      `• Notes: ${formData.notes || 'None'}\n\n` +
      `Thank you!`
    );
  };

  const copyToClipboard = () => {
    const rawText = 
      `Edbel Event Zone Consultation Request (Ref: ${referenceId}):\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || 'N/A'}\n` +
      `Event Type: ${formData.eventType}\n` +
      `Date: ${formData.eventDate}\n` +
      `Venue: ${formData.location}\n` +
      `Budget: ${formData.estimatedBudget}\n` +
      `Notes: ${formData.notes || 'None'}`;
    
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 bg-[#090A0C] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-brass-500" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-brass-400">
            Consultation & Reservations
          </span>
          <span className="text-stone-500">•</span>
          <span className="text-xs font-amharic text-stone-300">
            ቀንዎን ያስይዙ እና ይወያዩ
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.12] mb-4">
            Initiate Your Celebration Brief
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Reach out directly or submit your event parameters below. Our senior design team will evaluate your date, inventory requirements, and venue possibilities.
          </p>
        </div>

        {/* Style Tag Alert if selected from gallery */}
        {initialStyle && (
          <div className="mb-10 p-4 rounded-xl bg-[#12151B] brass-border flex items-center justify-between">
            <span className="text-xs text-stone-300">
              Inquiring regarding style: <strong className="text-white">"{initialStyle}"</strong>
            </span>
            {onCloseStyle && (
              <button 
                onClick={onCloseStyle}
                className="text-xs text-stone-400 hover:text-white underline"
              >
                Clear
              </button>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Verified Atelier Contact Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="editorial-panel p-8 rounded-2xl hairline-border">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-12 h-12 rounded-full bg-[#161922] p-1.5 flex items-center justify-center shrink-0">
                  <img 
                    src="/assets/images/branding/edbel-logo-mark.png" 
                    alt="Edbel Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-white">Edbel Event Zone</h3>
                  <p className="font-amharic text-xs text-brass-400">ኤድቤል ኢቨንት ዞን • ቦሌ፣ አዲስ አበባ</p>
                </div>
              </div>

              <div className="space-y-6 text-xs sm:text-sm">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-semibold mb-1">
                    Telephone & Direct Line
                  </span>
                  <a href="tel:+251913904484" className="text-white hover:text-brass-300 font-semibold block text-base transition-colors">
                    +251 91 390 4484
                  </a>
                  <span className="text-xs text-stone-400">Alternate: +251 98 034 8026</span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-semibold mb-1">
                    WhatsApp Direct Inquiry
                  </span>
                  <a 
                    href="https://wa.me/251913904484" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>+251 91 390 4484 (Instant Chat)</span>
                  </a>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-semibold mb-1">
                    Atelier Location
                  </span>
                  <span className="text-white font-medium block">Bole, Addis Ababa, Ethiopia</span>
                  <span className="text-xs text-stone-400">Full venue staging across Addis Ababa & surrounding regions</span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-semibold mb-1">
                    Consultation Hours
                  </span>
                  <span className="text-white block">Monday – Sunday</span>
                  <span className="text-xs text-stone-400">8:30 AM – 8:00 PM (EAT)</span>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-semibold mb-1">
                    Official Facebook
                  </span>
                  <a 
                    href="https://web.facebook.com/EdbelEventZone/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-stone-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4 text-blue-400" />
                    <span>facebook.com/EdbelEventZone</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#0D0F13] border border-white/5 text-xs text-stone-400 leading-relaxed">
              <strong className="text-stone-300 block mb-1">Seasonal Notice:</strong>
              Wedding seasons and holiday weekends require advance reservation. We recommend reaching out 4–8 weeks ahead.
            </div>

          </div>

          {/* Right Column: Clean Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="editorial-panel p-8 sm:p-10 rounded-2xl hairline-border">
              
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-brass-400 block mb-1">
                    Inquiry Registered
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-2">
                    Thank You, {formData.name}
                  </h3>

                  <p className="text-xs font-mono text-stone-400 mb-6">
                    Reference ID: <strong className="text-white">{referenceId}</strong>
                  </p>

                  <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed mb-8">
                    Your event parameters are ready. To receive an immediate review from our director, click below to open your structured brief directly on WhatsApp.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                    <a
                      href={`https://wa.me/251913904484?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to WhatsApp (+251913904484)</span>
                    </a>

                    <button
                      onClick={copyToClipboard}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-full text-xs font-semibold text-stone-300 hover:text-white bg-[#12151B] border border-white/10 transition-colors flex items-center justify-center gap-1.5"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied' : 'Copy Brief'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        eventType: 'Grand Wedding & Ballroom Production',
                        eventDate: '',
                        location: '',
                        estimatedBudget: 'Consultation & Custom Scope',
                        notes: ''
                      });
                    }}
                    className="text-xs text-stone-400 hover:text-white underline transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                        Full Name <span className="text-brass-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500' : 'border-white/10 focus:border-brass-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                        Telephone <span className="text-brass-400">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+251 9... or 09..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-white/10 focus:border-brass-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                        Email Address <span className="text-stone-500">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 focus:border-brass-500 text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                        Event Discipline <span className="text-brass-400">*</span>
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 focus:border-brass-500 text-sm text-white focus:outline-none transition-colors"
                      >
                        {EVENT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-[#0C0E12] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                        Celebration Date <span className="text-brass-400">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border text-sm text-white focus:outline-none transition-colors ${
                          errors.eventDate ? 'border-rose-500' : 'border-white/10 focus:border-brass-500'
                        }`}
                      />
                      {errors.eventDate && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.eventDate}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                        Venue / Target Area <span className="text-brass-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Skylight Hotel, Bole Residence"
                        className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors ${
                          errors.location ? 'border-rose-500' : 'border-white/10 focus:border-brass-500'
                        }`}
                      />
                      {errors.location && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.location}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                      Estimated Production Scale <span className="text-stone-500">(Optional)</span>
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 focus:border-brass-500 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Consultation & Custom Scope">Consultation & Custom Scope</option>
                      <option value="Intimate Setting (Proposals, Small Dinners)">Intimate Setting (Proposals, Small Dinners)</option>
                      <option value="Mid-Scale Production (Shimgilna, Christenings, Birthdays)">Mid-Scale Production (Shimgilna, Christenings, Birthdays)</option>
                      <option value="Grand Ballroom & Marquee Pavilion Scale">Grand Ballroom & Marquee Pavilion Scale</option>
                      <option value="Multi-Day Royal Wedding Production">Multi-Day Royal Wedding Production</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                      Specific Notes or Theme Inquiries
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify requested floral tones, neon sign lettering, guest count, or venue layout preferences..."
                      className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 focus:border-brass-500 text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#C29B38] hover:bg-[#D4B35E] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Register Consultation Brief</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
