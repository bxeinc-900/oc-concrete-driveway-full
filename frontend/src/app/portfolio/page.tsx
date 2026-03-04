import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Project Portfolio | Real Concrete Transformations",
    description: "View our gallery of concrete driveways, stamped patios, and paver installations across Orange County and Riverside.",
};

export default function PortfolioPage() {
    const projects = [
        { name: "Diamond Pattern Driveway", location: "Yorba Linda", img: "/images/a_large diamond driveway.jpg", category: "Driveway" },
        { name: "Stamped Border Entry", location: "Costa Mesa", img: "/images/Concrete_driveway-Stamped_With_Borders Costa Mesa.jpg", category: "Stamped" },
        { name: "Modern Paver System", location: "Laguna Niguel", img: "/images/pavers-driveways-laguna-niguel.jpeg", category: "Pavers" },
        { name: "Backyard Stamped Oasis", location: "Riverside", img: "/images/backyard stamped concrete patio.jpg", category: "Patio" },
        { name: "Industrial Slab Install", location: "Chino Hills", img: "/images/concrete driveway in Chino HIlls and Orange County.jpg", category: "Basic Slabs" },
        { name: "Decorative Front Entry", location: "Tustin", img: "/images/concrete-driveway-Tustin-orange-county.jpg", category: "Stamped" },
        { name: "Luxury Paver Driveway", location: "Eastside Costa Mesa", img: "/images/Paver-Driveway-Installation-eastside costa mesa.jpg", category: "Pavers" },
        { name: "Sunburst Stamped Patio", location: "Orange County", img: "/images/stamped-concrete-sunburst-orange-county.jpg", category: "Stamped" },
        { name: "Clean Driveway Replace", location: "Anaheim", img: "/images/concrete-driveway-replacement-orange-county.jpg", category: "Driveway" },
    ];

    return (
        <div className="bg-slate-950 min-h-screen text-slate-300">
            {/* Hero Section */}
            <section className="relative py-32 md:py-48 overflow-hidden min-h-[50vh] flex flex-col justify-center">
                <Image src="/images/concrete-patio-fire-pit-stamped-concrete.jpg" alt="Our Work Portfolio" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-slate-950/70" />
                <div className="section-container relative z-10 px-4 w-full">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Proof of Excellence</span>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 text-white uppercase tracking-tighter italic">Our <span className="text-primary not-italic">Portfolio</span></h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light">
                        Explore the high-performance hardscapes we've built for SoCal families. Heritage-grade concrete, engineered for life.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="section-container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {projects.map((project, index) => (
                            <div key={index} className="group relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border border-white/5 bg-slate-900">
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="absolute inset-0 p-10 flex flex-col justify-end items-start text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="bg-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase mb-4 tracking-[0.2em] shadow-lg">{project.category}</span>
                                    <h3 className="text-3xl font-black uppercase mb-1 tracking-tighter leading-none italic">{project.name}</h3>
                                    <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">{project.location}, CA</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-slate-900/50 border-t border-white/5">
                <div className="section-container px-4 text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none italic">Inspired by our <br /><span className="text-primary not-italic">Recent Work?</span></h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed italic">
                        "Your home is our next masterpiece. Let's build something beautiful together."
                    </p>
                    <Link href="/contact" className="btn-primary px-12 py-5 text-xl">Get Your Free Estimate</Link>
                </div>
            </section>
        </div>
    );
}
