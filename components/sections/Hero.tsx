"use client";
import { Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center">
      
      <h1 className="text-4xl text-cyan-400 mb-6">HELLO, I'M MATTHEW!</h1>

    <button
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        className="px-6 py-3 bg-green-500 text-black border-4 border-white hover:bg-green-400 transition-all text-xs"
        style={{ boxShadow: '6px 6px 0 0 #000' }}
    >
        VIEW MY WORK ▼
    </button>
    </section>
    );
}
