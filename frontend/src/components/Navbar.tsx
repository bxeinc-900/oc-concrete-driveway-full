"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`glass-nav sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "py-2 shadow-2xl" : "py-4"}`}>
            <div className="section-container flex justify-between items-center">
                {/* Desktop Menu - Now on the left */}
                <div className="hidden md:flex items-center space-x-8 order-1">
                    <Link href="/" className="font-semibold text-slate-300 hover:text-primary transition-colors">Home</Link>
                    <Link href="/services" className="font-semibold text-slate-300 hover:text-primary transition-colors">Services</Link>
                    <Link href="/portfolio" className="font-semibold text-slate-300 hover:text-primary transition-colors">Portfolio</Link>
                    <Link href="/about" className="font-semibold text-slate-300 hover:text-primary transition-colors">About</Link>
                </div>

                {/* Logo - Now on the right for desktop */}
                <Link href="/" className="flex items-center md:order-2">
                    <Image
                        src="/OC-Concrete-driveway_official-300x86.png"
                        alt="OC Concrete Driveway Logo"
                        width={240}
                        height={68}
                        className="h-12 md:h-14 w-auto object-contain brightness-110"
                        priority
                    />
                </Link>

                {/* Mobile Toggle & CTA */}
                <div className="flex items-center space-x-4 md:order-3">
                    <Link href="/contact" className="hidden md:block btn-primary px-6 py-2">Get a Quote</Link>

                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800 py-6 px-4 space-y-4 animate-in slide-in-from-top duration-300">
                    <Link href="/" onClick={() => setIsOpen(false)} className="block font-semibold text-slate-300">Home</Link>
                    <Link href="/services" onClick={() => setIsOpen(false)} className="block font-semibold text-slate-300">Services</Link>
                    <Link href="/portfolio" onClick={() => setIsOpen(false)} className="block font-semibold text-slate-300">Portfolio</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="block font-semibold text-slate-300">About</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="block btn-primary text-center">Get a Quote</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
