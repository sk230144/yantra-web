import Link from "next/link";
import type { ReactNode } from "react";

type SoftButtonProps = {
  href: string;
  children: ReactNode;
  /** Size and text offset come from each Figma instance, so callers pass them in. */
  className?: string;
};

/** The light rounded CTA (#f7f7f7, radius 15, soft drop shadow) used across the page. */
export function SoftButton({ href, children, className = "" }: SoftButtonProps) {
  return (
    <Link
      href={href}
      className={`block rounded-[15px] bg-soft text-[15px] leading-[normal] text-black shadow-soft ${className}`}
    >
      {children}
    </Link>
  );
}
