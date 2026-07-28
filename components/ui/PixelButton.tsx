"use client";

import Link from "next/link";
import { ReactNode } from "react";

type PixelButtonColor = "purple" | "cyan" | "pink" | "green" | "white";

const COLOR_CLASSES: Record<PixelButtonColor, string> = {
  purple: "bg-purple-600 hover:bg-purple-500 text-white",
  cyan: "bg-cyan-500 hover:bg-cyan-400 text-black",
  pink: "bg-pink-500 hover:bg-pink-400 text-black",
  green: "bg-green-500 hover:bg-green-400 text-black",
  white: "bg-white hover:bg-gray-100 text-black",
};

interface PixelButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  color?: PixelButtonColor;
  /** Filled + hard-shadow when true (default), flat/ghost when false (e.g. inactive nav link). */
  active?: boolean;
  className?: string;
}

export default function PixelButton({
  children,
  href,
  external = false,
  onClick,
  color = "purple",
  active = true,
  className = "",
}: PixelButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 border-4 px-4 py-2 text-[10px] sm:text-xs transition-colors";

  const style = active
    ? `${COLOR_CLASSES[color]} border-white`
    : "bg-transparent border-gray-600 text-gray-400 hover:text-white hover:border-white";

  const classes = `${base} ${style} ${className}`;
  const shadow = active ? { boxShadow: "6px 6px 0 0 #000" } : undefined;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={shadow}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} style={shadow}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} style={shadow}>
      {children}
    </button>
  );
}
