interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  accent?: boolean;
}

export default function ServiceCard({
  icon,
  title,
  description,
  accent = false,
}: ServiceCardProps) {
  return (
    <div
      className={`service-card rounded-2xl p-7 border ${
        accent
          ? "bg-honey-50 border-honey-200"
          : "bg-white border-warmGray-100"
      } shadow-card`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
          accent ? "bg-honey-100" : "bg-cream-dark"
        }`}
      >
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="font-display font-semibold text-charcoal text-lg mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-warmGray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
