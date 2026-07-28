import { ReactNode } from "react";

interface PixelCardProps {
  children: ReactNode;
  bg?: string;
  border?: string;
  dashed?: boolean;
  className?: string;
}

export default function PixelCard({
  children,
  bg = "bg-purple-900",
  border = "border-white",
  dashed = false,
  className = "",
}: PixelCardProps) {
  return (
    <div
      className={`${bg} border-4 ${dashed ? "border-dashed" : ""} ${border} p-4 ${className}`}
      style={{ boxShadow: "8px 8px 0 0 #000" }}
    >
      {children}
    </div>
  );
}
