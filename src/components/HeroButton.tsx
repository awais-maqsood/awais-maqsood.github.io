import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "tertiary";

const shadows: Record<Variant, string> = {
  primary:
    "shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)]",
  secondary: "shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]",
  tertiary:
    "shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]",
};

const base: Record<Variant, string> = {
  primary: "bg-dark text-primary-foreground",
  secondary: "bg-background text-dark",
  tertiary: "bg-background text-dark",
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

export default function HeroButton({ variant = "primary", className, children, href, ...props }: Props) {
  const cls = cn(
    "rounded-full px-7 py-3 text-sm font-medium transition-opacity hover:opacity-90 cursor-pointer",
    base[variant],
    shadows[variant],
    className
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return <button className={cls} {...props}>{children}</button>;
}
