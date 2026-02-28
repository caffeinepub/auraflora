interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  bgClass: string;
  accentClass: string;
  index: number;
}

export default function ServiceCard({ title, description, icon, bgClass, accentClass, index }: ServiceCardProps) {
  return (
    <div
      className={`group relative rounded-3xl p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-card cursor-default ${bgClass}`}
    >
      {/* Background blob */}
      <div className={`absolute -bottom-12 -right-12 w-48 h-48 rounded-full opacity-30 blur-2xl transition-all duration-500 group-hover:opacity-50 group-hover:scale-110 ${accentClass}`} />

      {/* Index number */}
      <span className="absolute top-8 right-8 font-display text-6xl font-light text-foreground/5 select-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div className="text-4xl mb-6">{icon}</div>

      {/* Content */}
      <h3 className="font-display text-2xl font-light text-foreground mb-4 leading-snug">
        {title}
      </h3>
      <p className="font-body text-sm text-foreground/55 leading-relaxed">
        {description}
      </p>

      {/* Hover arrow */}
      <div className="mt-8 flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-foreground/40 group-hover:text-foreground/70 transition-colors duration-300">
        <span>Discover</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </div>
  );
}
