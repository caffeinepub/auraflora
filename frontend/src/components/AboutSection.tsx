export default function AboutSection() {
  const highlights = [
    {
      symbol: '✦',
      title: 'Hand-Sculpted Florals',
      description: 'Shaped with care.',
    },
    {
      symbol: '❋',
      title: 'Artisanal Craftsmanship',
      description: 'Patience. Precision. Intention.',
    },
    {
      symbol: '✿',
      title: 'Bespoke Creations',
      description: 'Your vision, realized.',
    },
  ];

  return (
    <section id="about" className="relative py-32 lg:py-40 overflow-hidden bg-background">
      {/* Decorative blob */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] pointer-events-none opacity-60">
        <img
          src="/assets/generated/auraflora-blob-accent.dim_800x800.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-aura-lavender/5 via-transparent to-aura-sage/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <p className="text-xs tracking-[0.4em] uppercase font-medium text-aura-rose mb-16">
          Our Essence
        </p>

        {/* Asymmetric layout — title and paragraphs top-aligned */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-0 items-start">
          {/* Left column — large heading, top-aligned */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
              Born from
              <br />
              <span className="italic text-aura-lavender-deep">heartfelt</span>
              <br />
              ideas
            </h2>

            {/* Decorative line */}
            <div className="mt-10 flex items-center gap-4">
              <div className="w-16 h-px bg-aura-rose/60" />
              <div className="w-3 h-3 rounded-full bg-aura-champagne/80" />
              <div className="w-8 h-px bg-aura-sage/60" />
            </div>
          </div>

          {/* Right column — no top offset so it aligns with the title */}
          <div className="lg:col-span-6 lg:col-start-7">
            {/* Tighter spacing: mb-1 instead of mb-4 on first paragraph */}
            <p className="font-body text-lg text-foreground/60 leading-relaxed mb-1">
              Our journey began with a quiet passion — to transform soft, textured fibers into enduring floral art. Each bloom is thoughtfully sculpted by hand, shaped petal by petal into creations that radiate warmth, charm, and individuality.
            </p>
            <p className="font-body text-lg text-foreground/60 leading-relaxed mb-10">
              As an emerging studio, we are devoted to craftsmanship, detail, and the beauty of slow creation. Every piece is formed with intention — a gentle balance of texture, color, and imagination — designed to bring lasting joy to any space.
            </p>

            {/* Feature highlights — enlarged titles with symbols */}
            <div className="grid grid-cols-3 gap-6">
              {highlights.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-2xl text-aura-rose mb-2 leading-none">{item.symbol}</div>
                  <div className="font-display text-xl md:text-2xl font-semibold text-aura-rose mb-2 leading-snug">
                    {item.title}
                  </div>
                  <div className="text-xs text-foreground/40 font-body leading-relaxed italic">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Abstract decorative element */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-aura-rose/20 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-8 font-display text-2xl italic text-foreground/20">
              ✦
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
