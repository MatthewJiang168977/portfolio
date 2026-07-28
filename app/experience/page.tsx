import PixelCard from "@/components/ui/PixelCard";

const experience = [
  {
    role: "Software Engineering Intern",
    org: "Civic (Revere)",
    dates: "April 6 – July 6, 2026",
    description:
      "Worked on an AI-native constituent management platform, building features across the stack and contributing to agent orchestration workflows.",
  },
  {
    role: "Teaching Assistant, CS 1113",
    org: "NYU Tandon",
    dates: "Fall 2026 –",
    description: "Supporting students in an intro CS course as a TA starting Fall 2026.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <h1 className="text-2xl sm:text-3xl text-cyan-400 mb-2 pixel-text text-center">
          EXPERIENCE
        </h1>

        {experience.map((item) => (
          <PixelCard key={item.role} className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <h2 className="text-sm sm:text-base text-pink-400">{item.role}</h2>
              <span className="text-[10px] sm:text-xs text-cyan-300">{item.dates}</span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-400">{item.org}</p>
            <p className="text-[10px] sm:text-xs text-gray-200 leading-relaxed">
              {item.description}
            </p>
          </PixelCard>
        ))}
      </div>
    </main>
  );
}
