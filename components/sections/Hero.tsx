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
                className="absolute inset-0 grid-animate"
                style={{
                backgroundImage: `
                    linear-gradient(0deg, transparent 24%, rgba(255, 0, 255, 0.58) 25%, rgba(255,0,255,0.58) 26%, transparent 27%, transparent 74%, rgba(255,0,255,0.3) 75%, rgba(255,0,255,0.3) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.58) 25%, rgba(0,255,255,0.58) 26%, transparent 27%, transparent 74%, rgba(0,255,255,0.3) 75%, rgba(0,255,255,0.3) 76%, transparent 77%, transparent)
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

            <div className="mb-8 p-4 bg-purple-900 border-4 border-pink-500 inline-block min-h-[80px] flex items-center justify-center" style={{ boxShadow: '8px 8px 0 0 #000' }}>
            <p className="text-[10px] sm:text-xs text-white leading-relaxed max-w-lg">
                <span className="text-green-400">&gt;_</span> {displayText}
                <span className="animate-pulse text-green-400">|</span>
            </p>
            </div>

            <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <a
                href="https://github.com/MatthewJiang168977"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-600 border-4 border-white hover:bg-purple-500 transition-colors"
                style={{ boxShadow: '6px 6px 0 0 #000' }}
            >
                <Github size={24} />
            </a>
            <a
                href="https://www.linkedin.com/in/matthew-m-jiang/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-500 border-4 border-white hover:bg-cyan-400 transition-colors"
                style={{ boxShadow: '6px 6px 0 0 #000' }}
            >
                <Linkedin size={24} />
            </a>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mmj9715@nyu.edu&su=Let%27s%20Connect&body=Hi%20Matthew,"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border-4 border-red-500 hover:bg-gray-100 transition-colors relative"
                style={{ boxShadow: '6px 6px 0 0 #000' }}
            >
                {/* Gmail-style icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="#EA4335"/>
                <path d="M22 6l-10 7L2 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 6l10 7 10-7v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6z" fill="#34A853" fillOpacity="0.3"/>
                <path d="M2 18V6l10 7" fill="#FBBC04" fillOpacity="0.5"/>
                <path d="M22 18V6l-10 7" fill="#EA4335" fillOpacity="0.5"/>
                </svg>
            </a>
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
