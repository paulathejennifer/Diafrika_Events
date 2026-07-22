import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
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

  // External links (WhatsApp, Instagram, etc.)
  if (href?.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {content}
      </a>
    );
  }

  // Anchor links (#gallery)
  if (href?.startsWith("#")) {
    return (
      <a
        href={href}
        className={styles}
        onClick={(e) => {
          e.preventDefault();

          const element = document.querySelector(href);

          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }}
      >
        {content}
      </a>
    );
  }

  // Internal Next.js routes
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