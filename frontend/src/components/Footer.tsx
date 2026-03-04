import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="section-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="bg-primary p-2 rounded-lg text-white font-black text-xl">OC</div>
                        <span className="font-black text-2xl tracking-tighter italic">CONCRETE</span>
                    </Link>
                    <p className="text-slate-400 leading-relaxed">
                        Premium concrete driveway and patio solutions in Orange County and Riverside. Over 20 years of excellence.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/occoncretedriveways" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/oc_concretedriveway" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" /></svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                        <li><Link href="/portfolio" className="hover:text-primary transition-colors">View Portfolio</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">About the Company</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white leading-none">Specialties</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li>Concrete Driveways</li>
                        <li>Stamped Concrete</li>
                        <li>Block Walls & Masonry</li>
                        <li>Concrete Pavers</li>
                        <li>Patio Slabs</li>
                    </ul>
                </div>

                {/* Service Areas */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white leading-none">Service Areas</h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-slate-400 text-sm">
                        {['Anaheim', 'Irvine', 'Costa Mesa', 'Huntington Beach', 'Fullerton', 'Mission Viejo', 'Corona', 'Riverside', 'Temecula', 'Chino Hills'].map((city) => (
                            <li key={city}>
                                <Link href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors">
                                    {city}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white leading-none">Contact Us</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            <span>(909) 787-2400</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span>Serving Orange County & Riverside</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section-container mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} OC Concrete Driveway. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
