import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "About OC Concrete Driveway | 30+ Years of Excellence",
    description: "Learn about OC Concrete Driveway, the premier concrete contractor serving Orange County and Riverside for over three decades. Licensed, bonded, and local.",
};

export default function AboutPage() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-300">
            {/* Hero Section */}
            <section className="relative py-32 md:py-48 overflow-hidden min-h-[50vh] flex flex-col justify-center">
                <Image src="/images/a_large diamond driveway.jpg" alt="About OC Concrete Driveway" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-slate-950/70" />
                <div className="section-container relative z-10 px-4 w-full">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Mastering the Pour</span>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 text-white uppercase tracking-tighter italic">About <span className="text-primary not-italic">Us</span></h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
                        For over three decades, OC Concrete Driveway has been the gold standard for hardscaping in Southern California.
                        We don't just build driveways; we build foundations for homes.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-32">
                <div className="section-container px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Our <span className="text-primary italic">Story</span></h2>
                            <p className="text-lg leading-relaxed font-light">
                                OC Concrete Driveway started over 30 years ago with a simple mission: to provide the homeowners of Orange County and Riverside with durable hardscaping that enhances property value.
                                Our licensed professionals are fully insured and provide the utmost quality in every project.
                            </p>
                            <p className="text-lg leading-relaxed font-light">
                                We take pride in our efficient service delivery and delighted customers. Whether it's a small repair or a massive industrial foundation, our team brings the same level of mastery and dedication.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            <div className="p-8 rounded-[2rem] bg-slate-900/50 border border-slate-800">
                                <p className="text-5xl font-black text-primary tracking-tighter italic mb-2">30+</p>
                                <p className="text-white font-bold uppercase text-sm tracking-widest">Years Experience</p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-slate-900/50 border border-slate-800">
                                <p className="text-5xl font-black text-primary tracking-tighter italic mb-2">LIC#</p>
                                <p className="text-white font-bold uppercase text-sm tracking-widest">918040</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <Link href="/contact" className="btn-primary">Get A Free Quote</Link>
                        </div>
                    </div>

                    <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border border-white/5 group">
                        <Image
                            src="/images/Concrete-Driveway-orange-county-concrete-huntington beach.jpg"
                            alt="Concrete Project Work"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <div className="absolute bottom-12 left-12">
                            <p className="text-white font-black text-3xl uppercase italic leading-none">Built To Last <br /><span className="text-primary not-italic">A Lifetime</span></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List from Export */}
            <section className="py-32 bg-slate-900/30 border-y border-slate-900">
                <div className="section-container px-4">
                    <h2 className="text-3xl font-black text-white mb-16 uppercase text-center tracking-widest">Specialized Core Services</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {['Patios', 'Sidewalks', 'Driveways', 'Foundations', 'Retaining Walls', 'Basic Slabs', 'Garage Slabs', 'Concrete Pouring', 'Resurfacing', 'Polishing'].map((service) => (
                            <div key={service} className="flex items-center space-x-3 text-slate-400 group hover:text-primary transition-colors">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                                <span className="font-bold uppercase text-sm tracking-tighter">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-32">
                <div className="section-container px-4">
                    <div className="max-w-4xl mx-auto space-y-16 text-center">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic">Why southern california <br /><span className="text-primary not-italic">Chooses Us</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold uppercase text-white tracking-widest border-l-4 border-primary pl-4">High Quality</h3>
                                <p className="text-slate-500 font-light">We use extremely durable and long-lasting concrete mixes tailored for the California climate.</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold uppercase text-white tracking-widest border-l-4 border-primary pl-4">Masters of Trade</h3>
                                <p className="text-slate-500 font-light">Three decades of experience means we've seen and solved every possible concrete challenge.</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold uppercase text-white tracking-widest border-l-4 border-primary pl-4">Honest & Direct</h3>
                                <p className="text-slate-500 font-light">Straight shooters who only charge for what you need. No hidden fees, ever.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
