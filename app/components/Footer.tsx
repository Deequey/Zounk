'use client';

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

export const Footer = () => {
    const [time, setTime] = useState("00:00");
    const [mounted, setMounted] = useState(false);

    // Timer - aktualizuj czas
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);

        const updateClock = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            setTime(`${hours}:${minutes}`);
        };

        updateClock(); // Ustaw raz natychmiast
        const timer = setInterval(updateClock, 1000);

        return () => clearInterval(timer);
    }, []);

    // Back to Top - scroll do góry
    const handleScrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <footer className="w-full py-20 px-6 md:px-20 overflow-hidden relative">

            {/* 1. KINETYCZNY PASEK */}
            <div className="-rotate-2 bg-[#1DB954] py-5 w-[140%] -ml-[20%] mb-32 shadow-[0_20px_50px_rgba(29,185,84,0.3)] z-20 relative">
                <div className="flex whitespace-nowrap animate-marquee-infinite font-black italic uppercase text-3xl md:text-5xl tracking-tighter text-black select-none">
                    {[...Array(8)].map((_, i) => (
                        <span key={i} className="mx-10 flex items-center gap-10">
                            Stop listening to mid music <span className="text-white">✦</span> Zounk your life <span className="text-white">✦</span>
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col xl:flex-row justify-between items-start gap-16 relative z-10">

                {/* LEWA STRONA - MANIFEST */}
                <div className="max-w-2xl flex-1">
                    <div className="inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full font-mono text-[10px] uppercase tracking-widest mb-6">
                        Status: v2.0 Beta
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.8] dark:text-white">
                        Music is <br /><span className="text-[#1DB954]">personal.</span>
                    </h2>
                    <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-md">
                        Zounk decodes your Spotify history so you can explore your identity, flex your taste, and settle arguments.
                    </p>
                </div>

                {/* ŚRODEK - CUSTOM ART */}
                <div className="hidden 2xl:flex flex-col items-center justify-center relative py-10 px-10">
                    <div className="rotate-12 group cursor-default">
                        <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#1DB954] mb-2 font-black">Stay Connected</p>
                        <h3 className="text-6xl font-black italic uppercase tracking-tighter dark:text-white leading-none">
                            CHECK<br />US OUT
                        </h3>
                        <div className="mt-4 translate-x-0 group-hover:translate-x-10 transition-transform duration-500 ease-out">
                            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 20H110M110 20L95 5M110 20L95 35" stroke="#1DB954" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* PRAWA STRONA - LINKI */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-20 flex-[1.5]">

                    <div className="space-y-10">
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#1DB954] font-bold italic border-b border-zinc-800 pb-2">Directory</h4>
                        <ul className="space-y-6">
                            {['Home', 'Stats', 'Battles', 'Blog', 'Contact', 'About'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-4xl font-black italic uppercase tracking-tighter dark:text-zinc-100 hover:text-[#1DB954] transition-all duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-6 overflow-hidden transition-all duration-300 text-[#1DB954]">—</span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-10">
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#1DB954] font-bold italic border-b border-zinc-800 pb-2">Social</h4>
                        <ul className="space-y-6">
                            {['Instagram', 'Twitter', 'Spotify', 'Discord'].map((social) => (
                                <li key={social}>
                                    <a
                                        href="#"
                                        className="text-4xl font-black italic uppercase tracking-tighter dark:text-zinc-100 hover:text-[#1DB954] transition-all duration-300 hover:line-through decoration-[#1DB954] decoration-8"
                                    >
                                        {social}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-10">
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#1DB954] font-bold italic border-b border-zinc-800 pb-2">Live Status</h4>
                        <div className="flex flex-col gap-6">
                            <div className="p-6 bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] border border-zinc-200 dark:border-zinc-800">
                                <div className="flex items-center gap-3 font-black italic text-4xl dark:text-white mb-2">
                                    <span className="w-4 h-4 bg-[#1DB954] rounded-full animate-pulse shadow-[0_0_20px_#1DB954]" />
                                    {mounted ? time : "--:--"}
                                </div>
                                <p className="font-mono text-[10px] opacity-40 uppercase tracking-widest">Global Server Time</p>
                            </div>
                            <button
                                type="button"
                                onClick={handleScrollToTop}
                                className="w-full py-6 bg-black dark:bg-white text-white dark:text-black rounded-[2rem] font-black uppercase text-xs tracking-[0.3em] hover:bg-[#1DB954] dark:hover:bg-[#1DB954] hover:text-black transition-all duration-500 shadow-xl cursor-pointer"
                            >
                                Back to top ↑
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. WIELKI NAPIS TŁA */}
            <div className="mt-32 relative">
                <h1 className="text-[25vw] font-black italic uppercase tracking-tighter leading-none select-none
                    text-transparent bg-clip-text bg-gradient-to-t from-zinc-100 to-transparent dark:from-zinc-900
                    hover:from-[#1DB954]/20 transition-all duration-1000 cursor-default">
                    zounk
                </h1>

                <div className="flex flex-col md:flex-row justify-between items-center py-10 border-t border-zinc-100 dark:border-zinc-900 font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 dark:text-white">
                    <p>©2025 ZOUNK LAB. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-12">
                        <Link href="/privacy" className="hover:text-[#1DB954] transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-[#1DB954] transition-colors">Terms</Link>
                        <p>v. 2.4.0</p>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#1DB954] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" />
        </footer>
    );
};