import { Github, Linkedin, Mail } from "lucide-react";
import PixelButton from "@/components/ui/PixelButton";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-16 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl text-cyan-400 mb-4 pixel-text text-center">
        CONTACT
      </h1>
      <p className="text-[10px] sm:text-xs text-gray-400 text-center mb-12 max-w-md leading-relaxed">
        &gt;_ reach out however&apos;s easiest for you.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <PixelButton
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mmj9715@nyu.edu&su=Let%27s%20Connect&body=Hi%20Matthew,"
          external
          color="white"
          className="justify-center"
        >
          <Mail size={16} /> EMAIL
        </PixelButton>
        <PixelButton
          href="https://www.linkedin.com/in/matthew-m-jiang/"
          external
          color="cyan"
          className="justify-center"
        >
          <Linkedin size={16} /> LINKEDIN
        </PixelButton>
        <PixelButton
          href="https://github.com/MatthewJiang168977"
          external
          color="purple"
          className="justify-center"
        >
          <Github size={16} /> GITHUB
        </PixelButton>
      </div>
    </main>
  );
}
