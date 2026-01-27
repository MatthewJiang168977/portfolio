"use client";
import { Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

const typingMessages = [
  "working on Disco...",
  "building cool stuff...",
  "learning new tech...",
  "drawing pixel art...",
  "leetcoding...",
];

export default function Hero() {
const [messageIndex, setMessageIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);
    const [showWave, setShowWave] = useState(false);

    // Typing animation effect
    useEffect(() => {
    const currentMessage = typingMessages[messageIndex];

    const handleTyping = () => {
        if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentMessage.length) {
            setDisplayText(currentMessage.slice(0, displayText.length + 1));
            setTypingSpeed(100);
        } else {
            // Pause at end before deleting
            setTimeout(() => setIsDeleting(true), 2000);
        }
        } else {
        // Deleting
        if (displayText.length > 0) {
            setDisplayText(currentMessage.slice(0, displayText.length - 1));
            setTypingSpeed(50);
        } else {
            // Move to next message
            setIsDeleting(false);
            setMessageIndex((prev) => (prev + 1) % typingMessages.length);
        }
        }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
    }, [displayText, isDeleting, messageIndex, typingSpeed]);

    // Face/Wave transition effect
    useEffect(() => {
    const interval = setInterval(() => {
        setShowWave((prev) => !prev);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20">

            {/* Pixelated Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div
                className="absolute inset-0"
                style={{
                backgroundImage: `
                    linear-gradient(0deg, transparent 24%, rgba(255,0,255,0.3) 25%, rgba(255,0,255,0.3) 26%, transparent 27%, transparent 74%, rgba(255,0,255,0.3) 75%, rgba(255,0,255,0.3) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(0,255,255,0.3) 25%, rgba(0,255,255,0.3) 26%, transparent 27%, transparent 74%, rgba(0,255,255,0.3) 75%, rgba(0,255,255,0.3) 76%, transparent 77%, transparent)
                `,
                backgroundSize: "50px 50px",
                imageRendering: "pixelated",
                }}
            />
            </div>

            {/* FOREGROUND CONTENT */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">

            {/* Avatar */}
                {/* Pixel Avatar - transitions between face and wave */}
            <div className="mb-8 inline-block">
                <div 
                    className="w-32 h-32 bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500 border-4 border-white transition-all duration-500"
                    style={{
                    boxShadow: '8px 8px 0 0 #000, 0 0 0 8px #fff',
                    imageRendering: 'pixelated'
                    }}
                >
                    {showWave ? (
                    // Waving Hand
                    <div className="w-full h-full bg-yellow-300 relative animate-wave">
                        {/* Thumb */}
                        <div className="absolute top-12 left-8 w-8 h-12 bg-yellow-400"></div>
                        {/* Palm */}
                        <div className="absolute top-8 left-12 w-12 h-16 bg-yellow-400"></div>
                        {/* Fingers */}
                        <div className="absolute top-4 left-12 w-3 h-8 bg-yellow-400"></div>
                        <div className="absolute top-2 left-16 w-3 h-10 bg-yellow-400"></div>
                        <div className="absolute top-4 left-20 w-3 h-8 bg-yellow-400"></div>
                        {/* Details/shading */}
                        <div className="absolute top-16 left-14 w-2 h-2 bg-yellow-600"></div>
                        <div className="absolute top-18 left-18 w-2 h-2 bg-yellow-600"></div>
                    </div>
                    ) : (
                    // Smiling Face
                    <div className="w-full h-full bg-yellow-400 relative transition-all duration-500">
                        {/* Eyes */}
                        <div className="absolute top-8 left-6 w-4 h-4 bg-black"></div>
                        <div className="absolute top-8 right-6 w-4 h-4 bg-black"></div>
                        {/* Smile */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black"></div>
                        {/* Smile curve */}
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-black"></div>
                    </div>
                    )}
                </div>
            </div>

            <h1 className="text-4xl text-cyan-400 mb-6 pixel-text">
                HELLO, I'M MATTHEW!
            </h1>

            {/* Typing Terminal */}
            <div
                className="mb-8 p-4 bg-purple-900 border-4 border-pink-500 min-h-[70px]"
                style={{ boxShadow: "8px 8px 0 0 #000" }}
            >
                <p className="text-xs text-white">
                <span className="text-green-400">&gt;_</span> {displayText}
                <span className="animate-pulse text-green-400">|</span>
                </p>
            </div>

            <button
                onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-green-500 text-black border-4 border-white hover:bg-green-400 transition-all text-xs"
                style={{ boxShadow: "6px 6px 0 0 #000" }}
            >
                VIEW MY WORK ▼
            </button>

            </div>
        </section>
        );
}
