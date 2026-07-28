export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Shown instead of a "links coming soon" badge when there's deliberately no link (e.g. proprietary code). */
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Civic / Revere",
    tagline: "AI-native constituent management platform",
    description:
      "Built during my internship at Civic — an AI-native platform for managing constituent casework, with agent orchestration handling parts of the workflow end to end.",
    stack: ["TypeScript", "NestJS", "Prisma", "Python", "Agent Orchestration"],
    note: "PRIVATE CODEBASE",
  },
  {
    title: "Quorum",
    tagline: "AI-native casework platform",
    description:
      "Built at a Google Cloud x NYC Open Data Week hackathon — an AI-native casework platform for constituent services powered by Gemini.",
    stack: ["Node.js", "Express", "MongoDB", "Gemini"],
    repoUrl: "https://github.com/MatthewJiang168977/Quorum",
  },
  {
    title: "VYRAL",
    tagline: "Serverless AI analytics pipeline",
    description:
      "A serverless pipeline for AI-driven analytics, built on event-driven AWS infrastructure with Supabase for storage.",
    stack: ["AWS Lambda", "EventBridge", "Supabase"],
    repoUrl: "https://github.com/MatthewJiang168977/Vyral",
  },
  {
    title: "STACKOVERFLOW",
    tagline: "A satirical roguelike about the call stack",
    description:
      "Built for a game programming course — a roguelike where battles play out as call-stack operations. Satirical, a little unhinged, genuinely fun to build.",
    stack: ["Raylib", "C++"],
    repoUrl: "https://github.com/MatthewJiang168977/intro-to-game-prog-/tree/main/project5",
  },
  {
    title: "Ranktify",
    tagline: "Discord matchmaking bot",
    description:
      "A Discord bot that auto-balances teams for competitive games — tracks player skill by rank or games played, then splits players into the most evenly matched teams it can find, with win probability included.",
    stack: ["Python", "discord.py"],
    repoUrl: "https://github.com/MatthewJiang168977/ranktify",
  },
];
