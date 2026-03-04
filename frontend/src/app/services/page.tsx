import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Expert Concrete Services | Driveways, Patios, and Stamped Concrete",
    description: "Discover our range of concrete services in Orange County and Riverside, including driveway replacement, decorative stamped concrete, and architectural pavers.",
};

const services = [
    {
        title: "Concrete Driveways",
        description: "Our signature service. We provide full-service driveway replacement, including demolition, excavation, grading, and pouring of high-strength concrete tailored for heavy vehicles.",
        features: ["Steel-Reinforced Foundations", "Multiple Finish Options", "Rapid Completion Time"],
        image: "/images/Concrete-Driveway-orange-county-concrete-huntington beach.jpg"
    },
    {
        title: "Stamped Concrete",
        description: "Transform plain concrete into a work of art. We offer dozens of patterns and colors that mimic natural stone, European slate, cobblestone, or brick at a fraction of the cost.",
        features: ["UV-Resistant Coloring", "Slate & Stone Textures", "Custom Border Designs"],
        image: "/images/stamped-concrete-decorative-concrete.jpeg"
    },
    {
        title: "Modern Pavers",
        description: "Interlocking concrete pavers offer unparalleled durability and aesthetic flexibility. Perfect for patios, pathways, and designer driveways that need to withstand movement.",
        features: ["Permeable Solutions", "Lifetime Structural Integrity", "Designer Pattern Layouts"],
        image: "/images/DRIVEWAY_PAVERS-decorative concrete driveway.jpg"
    },
    {
        title: "Block Walls & Masonry",
        description: "High-quality concrete block walls and retaining walls that will last a lifetime for both residential and commercial clients. Expertly engineered for SoCal soil.",
        features: ["Retaining Wall Experts", "Custom Masonry Work", "Structural Foundations"],
        image: "/images/bobcat breaking concrete orange county ca.jpg"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-slate-950 text-slate-300 min-h-screen">
            {/* Header */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl" />
                <div className="section-container relative z-10 px-4">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block text-center md:text-left">Precision Engineering</span>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 text-white uppercase tracking-tighter italic text-center md:text-left">Our <span className="text-primary not-italic">Services</span></h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light text-center md:text-left mx-auto md:mx-0">
                        From heavy-duty industrial foundations to decorative residential patios, we deliver precision in every pour.
                    </p>
                </div>
            </section>

            {/* Service List */}
            <section className="py-24">
                <div className="section-container px-4 space-y-32">
                    {services.map((service, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                            <div className="flex-1 relative aspect-video w-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 group">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                            </div>
                            <div className="flex-1 space-y-8">
                                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight italic">{service.title}</h2>
                                <p className="text-xl text-slate-400 leading-relaxed font-light">
                                    {service.description}
                                </p>
                                <ul className="grid grid-cols-1 gap-4">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center space-x-4 text-white font-bold uppercase tracking-tighter">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-6">
                                    <Link href="/contact" className="btn-primary inline-flex items-center space-x-3">
                                        <span>Request Quote</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-slate-900/50">
                <div className="section-container px-4 text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none italic">Need a custom <br /><span className="text-primary not-italic">Concrete Solution?</span></h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        We handle everything from garage slabs to pool decks.
                        Give us a call to discuss your specific project needs.
                    </p>
                    <Link href="/contact" className="btn-primary">Schedule Your Free Estimate</Link>
                </div>
            </section>
        </div>
    );
}
