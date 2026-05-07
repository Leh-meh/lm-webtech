import logo from "@/assets/logo.png";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-0.1 ${className ?? ""}`}>
      <img
        src={logo}
        alt="LM WebTech Logo"
        className="w-17 h-17 object-contain brightness-0 invert"
      />

      <span className="font-display text-xl font-semibold tracking-tight">
        <span className="text-gradient">WebTech</span>
      </span>
    </div>
  );
}