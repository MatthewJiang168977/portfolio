"use client";

import { usePathname } from "next/navigation";
import PixelButton from "./ui/PixelButton";

const LINKS = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/about", label: "ABOUT" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/contact", label: "CONTACT" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-black border-b-4 border-white">
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-3">
        {LINKS.map((link) => (
          <PixelButton key={link.href} href={link.href} color="cyan" active={pathname === link.href}>
            {link.label}
          </PixelButton>
        ))}
      </div>
    </nav>
  );
}
