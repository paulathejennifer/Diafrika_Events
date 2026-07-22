import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  // instead of a boolean like showArrow, this accepts any renderable
  // icon element directly — more flexible, since now ANY icon can be
  // passed in, not just one hardcoded ArrowRight.
};

const baseStyles =
  "inline-flex items-center justify-center gap-x-2 h-12 px-6 rounded-xl font-sans font-semibold text-sm uppercase tracking-wide transition-colors duration-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)]";

const variantStyles = {
  primary: "bg-olive hover:bg-olive-hover text-white",
  secondary: "bg-white border border-olive text-olive hover:bg-olive/5",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  icon,
}: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon}
      {children}
    </>
  );
  // icon rendered BEFORE children, matching your screenshot's "icon
  // then text" order — different from W Exclusive's arrow, which came
  // AFTER the text. Order matters here, worth noticing the difference.

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {content}
    </button>
  );
}