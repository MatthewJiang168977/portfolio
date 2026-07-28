import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Press_Start_2P } from "next/font/google"
import Nav from "@/components/Nav";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Matthew Jiang — Portfolio",
  description: "CS student at NYU Tandon building AI-native platforms, games, and mechanical keyboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixelFont.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
