import Image from "next/image";
import PixelCard from "@/components/ui/PixelCard";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <h1 className="text-2xl sm:text-3xl text-cyan-400 mb-2 pixel-text text-center">
          ABOUT ME
        </h1>

        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <div
            className="w-40 h-40 flex-shrink-0 border-4 border-white relative overflow-hidden"
            style={{ boxShadow: "8px 8px 0 0 #000" }}
          >
            <Image
              src="/matthew-about.jpg"
              alt="Selfie of Matthew outdoors, wearing glasses and a brown jacket"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 text-[10px] sm:text-xs leading-loose text-gray-200">
            <p>
              <span className="text-green-400">&gt;_</span> Hey, I&apos;m Matthew. I&apos;m a CS
              student at NYU Tandon, class of 2027.
            </p>
            <p>
              <span className="text-green-400">&gt;_</span> Outside of class and internships, I
              build and mod mechanical keyboards — soldering, lubing switches, tuning
              stabilizers, all of it. There&apos;s something satisfying about a project where
              you can actually feel the result.
            </p>
            <p>
              <span className="text-green-400">&gt;_</span> I also mess around with game
              development on the side, which is basically how a satirical roguelike about the
              call stack happened (see: Projects).
            </p>
            <p>
              <span className="text-green-400">&gt;_</span> And yes, I have a dog. More on him
              below.
            </p>
          </div>
        </div>

        <PixelCard>
          <p className="text-[10px] sm:text-xs text-gray-200 leading-relaxed">
            <span className="text-green-400">&gt;_</span> I build and mod mechanical keyboards —
            got into it after falling down a Hipyo Tech rabbit hole on YouTube, and never really
            climbed back out.
          </p>
        </PixelCard>

        <PixelCard className="flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-[10px] sm:text-xs text-gray-200 leading-relaxed flex-1">
            <span className="text-green-400">&gt;_</span> I have a one-year-old Maltese named Wang
            Cai. He is, in fact, the real boss of the household.
          </p>
          <div
            className="w-20 h-28 flex-shrink-0 border-4 border-white relative overflow-hidden"
            style={{ boxShadow: "6px 6px 0 0 #000" }}
          >
            <Image
              src="/wang-cai.jpg"
              alt="Wang Cai, a fluffy white Maltese puppy with a small purple topknot bow, standing on a tile floor next to his dog bed"
              width={80}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
        </PixelCard>
      </div>
    </main>
  );
}
