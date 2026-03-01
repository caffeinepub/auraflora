export default function HeroSection() {
  const handleScrollToAbout = () => {
    const target = document.querySelector('#about');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToGallery = () => {
    const target = document.querySelector('#gallery');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/auraflora-hero-bg.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-aura-lavender/20 blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-aura-rose/20 blur-3xl animate-float-medium pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-aura-champagne/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        {/* Brand Name — top, huge */}
        <h1 className="font-display text-8xl md:text-[10rem] lg:text-[13rem] font-light text-white leading-none tracking-tight mb-4">
          Aura<span className="italic text-aura-champagne">Flora</span>
        </h1>

        {/* Luxury Botanical Atelier — decreased by 2 font-size steps (was xl/2xl/3xl → base/lg/xl) */}
        <p className="text-base md:text-lg lg:text-xl tracking-[0.3em] uppercase font-semibold italic text-aura-champagne mb-10">
          Luxury Botanical Atelier
        </p>

        {/* Tagline / Quote — grey, bold */}
        <p className="font-body text-lg md:text-xl font-bold tracking-wide max-w-xl mx-auto mb-14 leading-loose text-gray-300">
          Where nature's essence meets artisanal refinement — curated botanical experiences for the discerning soul.
        </p>

        {/* CTA Buttons — bigger */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={handleScrollToGallery}
            className="px-12 py-5 rounded-full bg-aura-rose/80 hover:bg-aura-rose text-white text-base tracking-widest uppercase font-semibold transition-all duration-300 hover:shadow-glow hover:scale-105 backdrop-blur-sm"
          >
            Explore Our World
          </button>
          <button
            onClick={handleScrollToAbout}
            className="px-12 py-5 rounded-full border border-white/30 hover:border-white/60 text-white text-base tracking-widest uppercase font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          >
            Our Story
          </button>
        </div>

        {/* Scroll indicator — line only, no text */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
