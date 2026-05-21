interface HoneycombAccentProps {
  className?: string;
  opacity?: number;
  color?: string;
  size?: number;
}

export default function HoneycombAccent({
  className = "",
  opacity = 0.15,
  color = "#D4A017",
  size = 120,
}: HoneycombAccentProps) {
  return (
    <svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 120 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M60 4L112 33V91L60 120L8 91V33L60 4Z"
        stroke={color}
        strokeWidth="2"
        strokeOpacity={opacity}
        fill={color}
        fillOpacity={opacity * 0.3}
      />
      <path
        d="M60 22L96 43V85L60 106L24 85V43L60 22Z"
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity={opacity * 0.6}
        fill="none"
      />
      <path
        d="M60 40L80 51V74L60 85L40 74V51L60 40Z"
        fill={color}
        fillOpacity={opacity * 0.4}
      />
    </svg>
  );
}
