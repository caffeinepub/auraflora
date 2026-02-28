export default function AboutSection() {
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

        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-start">
          {/* Left column — large heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
              Born from
              <br />
              <span className="italic text-aura-lavender-deep">nature's</span>
              <br />
              whisper
            </h2>

            {/* Decorative line */}
            <div className="mt-10 flex items-center gap-4">
              <div className="w-16 h-px bg-aura-rose/60" />
              <div className="w-3 h-3 rounded-full bg-aura-champagne/80" />
              <div className="w-8 h-px bg-aura-sage/60" />
            </div>
          </div>

          {/* Right column — offset content */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-20">
            <p className="font-body text-lg text-foreground/60 leading-relaxed mb-8">
              AuraFlora was born from a singular vision: to transform the ephemeral beauty of botanicals into enduring luxury experiences. Each creation is a meditation on form, fragrance, and feeling.
            </p>
            <p className="font-body text-lg text-foreground/60 leading-relaxed mb-12">
              We source the rarest blooms from artisan growers across the globe, weaving them into bespoke arrangements, curated collections, and immersive sensory journeys that transcend the ordinary.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: '12+', label: 'Years of Craft' },
                { value: '40+', label: 'Global Sources' },
                { value: '∞', label: 'Possibilities' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-4xl font-light text-aura-rose mb-2">{stat.value}</div>
                  <div className="text-xs tracking-widest uppercase text-foreground/40 font-medium">{stat.label}</div>
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
