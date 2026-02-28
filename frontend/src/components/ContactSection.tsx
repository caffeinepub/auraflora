import { useState } from 'react';
import { SiInstagram } from 'react-icons/si';

const RECIPIENT_EMAIL = 'aurafloraaf@gmail.com';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent(`Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-aura-rose/5 via-aura-lavender/5 to-aura-sage/5 pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-aura-lavender/20 pointer-events-none" />
      <div className="absolute top-32 right-32 w-40 h-40 rounded-full border border-aura-rose/15 pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full border border-aura-sage/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — copy */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase font-medium text-aura-lavender-deep mb-6">
              Get in Touch
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground leading-tight mb-8">
              Let's create
              <br />
              <span className="italic text-aura-rose">something</span>
              <br />
              beautiful
            </h2>
            <p className="font-body text-base text-foreground/55 leading-relaxed mb-12 max-w-sm">
              Whether you're envisioning a bespoke arrangement, a fragrance commission, or an event transformation — we'd love to hear from you.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="text-xs tracking-widest uppercase text-foreground/30 font-medium w-16 pt-0.5">Email</span>
                <a
                  href={`mailto:${RECIPIENT_EMAIL}`}
                  className="font-body text-sm text-foreground/60 hover:text-aura-rose transition-colors duration-300 underline underline-offset-2"
                >
                  {RECIPIENT_EMAIL}
                </a>
              </div>

              {/* Studio */}
              <div className="flex items-start gap-4">
                <span className="text-xs tracking-widest uppercase text-foreground/30 font-medium w-16 pt-0.5">Studio</span>
                <span className="font-body text-sm text-foreground/60">Mumbai</span>
              </div>

              {/* Response time */}
              <div className="flex items-start gap-4">
                <span className="text-xs tracking-widest uppercase text-foreground/30 font-medium w-16 pt-0.5">Reverts</span>
                <span className="font-body text-sm text-foreground/60">We respond within 24–48 hours</span>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <span className="text-xs tracking-widest uppercase text-foreground/30 font-medium w-16 pt-0.5 flex items-center gap-1">
                  <SiInstagram size={12} />
                </span>
                <a
                  href="https://www.instagram.com/aura._.flora_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-foreground/60 hover:text-aura-rose transition-colors duration-300 underline underline-offset-2"
                >
                  @aura._.flora_
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="relative">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="text-5xl mb-6">🌸</div>
                <h3 className="font-display text-3xl font-light text-foreground mb-4">
                  Thank you
                </h3>
                <p className="font-body text-base text-foreground/55 max-w-xs leading-relaxed">
                  Your enquiry has been sent. We'll be in touch within 24–48 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                  className="mt-8 text-xs tracking-widest uppercase text-aura-rose hover:text-aura-rose/70 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase font-medium text-foreground/40">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="contact-input"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase font-medium text-foreground/40">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="contact-input"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase font-medium text-foreground/40">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your vision..."
                    className="contact-input resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-aura-rose/80 hover:bg-aura-rose text-white text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Enquiry'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
