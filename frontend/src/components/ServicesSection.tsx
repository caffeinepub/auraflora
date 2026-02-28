import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Bespoke Arrangements',
    description: 'Hand-crafted floral compositions tailored to your vision. Each piece is a unique work of art, designed with intention and assembled with the finest seasonal blooms.',
    icon: '🌸',
    bgClass: 'bg-aura-rose-card',
    accentClass: 'bg-aura-rose',
  },
  {
    title: 'Botanical Perfumery',
    description: 'Rare botanical extracts transformed into signature scents. Our master perfumers blend ancient techniques with modern artistry to create olfactory masterpieces.',
    icon: '🌿',
    bgClass: 'bg-aura-sage-card',
    accentClass: 'bg-aura-sage',
  },
  {
    title: 'Luxury Gifting',
    description: 'Curated gift experiences that speak without words. From intimate tokens to grand gestures, each package is wrapped in our signature aesthetic and delivered with care.',
    icon: '✨',
    bgClass: 'bg-aura-lavender-card',
    accentClass: 'bg-aura-lavender',
  },
  {
    title: 'Event Curation',
    description: 'Transform your most cherished moments into immersive botanical experiences. We design floral environments for weddings, galas, and private celebrations.',
    icon: '🕊️',
    bgClass: 'bg-aura-champagne-card',
    accentClass: 'bg-aura-champagne',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-aura-lavender/5 to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase font-medium text-aura-sage mb-4">
              What We Offer
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground leading-tight">
              Curated
              <br />
              <span className="italic text-aura-lavender-deep">Experiences</span>
            </h2>
          </div>
          <p className="font-body text-base text-foreground/50 max-w-xs leading-relaxed md:text-right">
            Each service is a testament to our commitment to beauty, craft, and the extraordinary.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
