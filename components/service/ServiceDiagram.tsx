import type { ReactNode } from "react";

type ServiceDiagramProps = {
  slug: string;
  label: string;
};

const stroke = "#243F31";
const fill = "#F4F1EA";
const soft = "#7D9486";

function Frame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-6 px-6 py-10">
      <svg viewBox="0 0 280 180" className="h-40 w-full max-w-[280px]" aria-hidden="true">
        {children}
      </svg>
      <p className="max-w-xs text-center text-sm text-[#3E5348]">{label}</p>
    </div>
  );
}

export default function ServiceDiagram({ slug, label }: ServiceDiagramProps) {
  if (slug === "implantology") {
    return (
      <Frame label={label}>
        <rect x="108" y="18" width="64" height="36" rx="8" fill={fill} stroke={stroke} strokeWidth="2.5" />
        <path d="M124 54h32l8 18h-48z" fill={soft} stroke={stroke} strokeWidth="2.5" />
        <rect x="128" y="72" width="24" height="18" fill={fill} stroke={stroke} strokeWidth="2.5" />
        <path d="M132 90c0 28 4 48 8 62 4-14 8-34 8-62" fill={fill} stroke={stroke} strokeWidth="2.5" />
        <path d="M136 112h8M136 126h8M136 140h8" stroke={stroke} strokeWidth="2" />
      </Frame>
    );
  }

  if (slug === "orthodontics") {
    return (
      <Frame label={label}>
        <path d="M36 110c30-70 178-70 208 0" fill="none" stroke={soft} strokeWidth="8" strokeLinecap="round" />
        {Array.from({ length: 8 }).map((_, index) => {
          const x = 48 + index * 26;
          return <rect key={index} x={x} y={78} width="16" height="26" rx="4" fill={fill} stroke={stroke} strokeWidth="2" />;
        })}
        <path d="M52 91h176" stroke={stroke} strokeWidth="2.5" />
      </Frame>
    );
  }

  if (slug === "pedodontics") {
    return (
      <Frame label={label}>
        <path d="M140 28c28 0 48 18 48 46 0 40-20 78-48 78s-48-38-48-78c0-28 20-46 48-46z" fill={fill} stroke={stroke} strokeWidth="2.5" />
        <path d="M116 58c8-16 40-16 48 0" fill="none" stroke={soft} strokeWidth="3" />
        <path d="M140 150v-36" stroke={soft} strokeWidth="3" />
        <circle cx="196" cy="46" r="22" fill="none" stroke={stroke} strokeWidth="2.5" />
        <path d="M196 36v20M186 46h20" stroke={stroke} strokeWidth="2.5" />
      </Frame>
    );
  }

  if (slug === "prosthodontics") {
    return (
      <Frame label={label}>
        <path d="M92 96c8-28 88-28 96 0v28c-8 10-88 10-96 0z" fill={soft} stroke={stroke} strokeWidth="2.5" />
        <path d="M104 96c6 22 66 22 72 0v22c-6 8-66 8-72 0z" fill={fill} stroke={stroke} strokeWidth="2.5" />
        <path d="M118 118c4 28 8 40 14 40s10-12 14-40" fill="none" stroke={stroke} strokeWidth="2.5" />
      </Frame>
    );
  }

  if (slug === "periodontics") {
    return (
      <Frame label={label}>
        <path d="M70 78c20-8 120-8 140 0 8 28 4 46-8 52H78c-12-6-16-24-8-52z" fill={soft} opacity="0.85" />
        <path d="M118 40c10-16 34-16 44 0 8 22 6 40-4 52l-10 48h-16l-10-48c-10-12-12-30-4-52z" fill={fill} stroke={stroke} strokeWidth="2.5" />
        <path d="M70 86c24-6 116-6 140 0" fill="none" stroke={stroke} strokeWidth="2.5" />
      </Frame>
    );
  }

  return (
    <Frame label={label}>
      <path d="M112 28c12-16 44-16 56 0 10 24 8 42-2 56l-12 62h-28l-12-62c-10-14-12-32-2-56z" fill={fill} stroke={stroke} strokeWidth="2.5" />
      <path d="M140 78v58" stroke={soft} strokeWidth="4" strokeLinecap="round" />
      <path d="M128 108c6 8 18 8 24 0" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="140" cy="124" r="3" fill={stroke} />
    </Frame>
  );
}
