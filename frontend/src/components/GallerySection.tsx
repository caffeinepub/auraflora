const galleryItems = [
  {
    src: '/assets/generated/auraflora-gallery-1.dim_600x600.png',
    alt: 'Sage and champagne abstract botanical',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    src: '/assets/generated/auraflora-gallery-2.dim_600x600.png',
    alt: 'Blush rose and lavender flowing forms',
    span: 'md:col-span-1',
  },
  {
    src: '/assets/generated/auraflora-gallery-3.dim_600x600.png',
    alt: 'Champagne gold and ivory geometric softness',
    span: 'md:col-span-1',
  },
  {
    src: '/assets/generated/auraflora-gallery-4.dim_600x600.png',
    alt: 'Sage green and blush watercolour wash',
    span: 'md:col-span-2',
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-32 lg:py-40 overflow-hidden bg-background">
      {/* Decorative blob bottom left */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] pointer-events-none opacity-40">
        <img
          src="/assets/generated/auraflora-blob-accent.dim_800x800.png"
          alt=""
          className="w-full h-full object-contain"
          style={{ transform: 'scaleX(-1) rotate(180deg)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] uppercase font-medium text-aura-champagne mb-4">
            Visual Poetry
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground leading-tight">
            The <span className="italic text-aura-rose">Atelier</span>
          </h2>
          <p className="mt-6 font-body text-base text-foreground/50 max-w-md mx-auto leading-relaxed">
            A glimpse into our world of colour, texture, and botanical artistry.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid md:grid-cols-3 gap-4 auto-rows-[280px]">
          {/* Item 1 — tall */}
          <div className="md:row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Item 2 */}
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={galleryItems[1].src}
              alt={galleryItems[1].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Item 3 */}
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={galleryItems[2].src}
              alt={galleryItems[2].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Item 4 — wide */}
          <div className="md:col-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={galleryItems[3].src}
              alt={galleryItems[3].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
