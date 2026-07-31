import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-soft",
  secondary: "border border-white/20 text-foreground hover:border-accent hover:text-accent",
};

export default function Button({
  children,
  variant = "primary",
  href,
  external,
  type = "button",
  disabled,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}