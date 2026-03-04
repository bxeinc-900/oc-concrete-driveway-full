import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-24 items-center justify-between">
                    {/* Logo on the left */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/OC-Concrete-driveway_official-300x86.png"
                                alt="OC Concrete Driveway Logo"
                                width={300}
                                height={86}
                                className="h-14 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-zinc-800 hover:text-blue-600 font-semibold transition-colors">
                            Home
                        </Link>
                        <Link href="/contact-us" className="text-zinc-800 hover:text-blue-600 font-semibold transition-colors">
                            Contact Us
                        </Link>
                    </nav>

                    {/* Call to action & Social (Desktop) */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-4">
                            <Link href="https://www.instagram.com/oc_concretedriveway" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-pink-600 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </Link>
                            <Link href="https://www.facebook.com/occoncretedriveways" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-600 transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </Link>
                        </div>
                        <Link
                            href="tel:9097872400"
                            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-500 transition-colors"
                        >
                            CALL NOW: (909) 787-2400
                        </Link>
                    </div>

                    {/* Mobile CTA & Social */}
                    <div className="flex md:hidden items-center gap-4">
                        <div className="flex items-center gap-3">
                            <Link href="https://www.instagram.com/oc_concretedriveway" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-pink-600 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </Link>
                            <Link href="https://www.facebook.com/occoncretedriveways" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-600 transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </Link>
                        </div>
                        <Link
                            href="tel:9097872400"
                            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-500 transition-colors"
                        >
                            Call Now
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
