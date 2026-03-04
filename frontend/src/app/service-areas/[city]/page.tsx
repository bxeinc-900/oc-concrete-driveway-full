import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const cityMap: { [key: string]: string } = {
    // Orange County
    'costa-mesa': 'Costa Mesa',
    'anaheim': 'Anaheim',
    'huntington-beach': 'Huntington Beach',
    'laguna-niguel': 'Laguna Niguel',
    'villa-park': 'Villa Park',
    'tustin': 'Tustin',
    'yorba-linda': 'Yorba Linda',
    'irvine': 'Irvine',
    'newport-beach': 'Newport Beach',
    'mission-viejo': 'Mission Viejo',
    'fullerton': 'Fullerton',
    'garden-grove': 'Garden Grove',
    'orange': 'Orange',

    // Riverside County & IE
    'corona': 'Corona',
    'riverside': 'Riverside',
    'chino-hills': 'Chino Hills',
    'moreno-valley': 'Moreno Valley',
    'murrieta': 'Murrieta',
    'temecula': 'Temecula',
    'jurupa-valley': 'Jurupa Valley',
    'eastvale': 'Eastvale',
    'norco': 'Norco'
};

interface Props {
    params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city: citySlug } = await params;
    const cityName = cityMap[citySlug];

    if (!cityName) {
        return {
            title: "Page Not Found",
        };
    }

    return {
        title: `Concrete Driveway Contractor in ${cityName}, CA | New Installation & Replacement`,
        description: `Looking to hire the best concrete driveway contractor in ${cityName}? We specialize in affordable driveway replacement, stamped concrete, and patio installation in ${cityName} and surrounding areas.`,
        keywords: `concrete driveway ${cityName}, concrete replacement ${cityName}, stamped concrete ${cityName}, concrete contractor ${cityName}, driveway cost ${cityName}`,
    };
}

export async function generateStaticParams() {
    return Object.keys(cityMap).map((city) => ({
        city,
    }));
}

export default async function CityPage({ params }: Props) {
    const { city: citySlug } = await params;
    const cityName = cityMap[citySlug];

    if (!cityName) {
        notFound();
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-slate-950 text-slate-300">
            {/* Hero Section */}
            <section className="w-full py-32 md:py-48 px-6 text-center relative overflow-hidden min-h-[50vh] flex flex-col justify-center">
                <Image src="/images/concrete-driveway-replacement-orange-county.jpg" alt={`${cityName} Concrete Services`} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-slate-950/70" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
                <div className="section-container relative z-10 w-full">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 block animate-fade-in">
                        Premier Concrete Contractor in {cityName}
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight text-white uppercase tracking-tighter italic">
                        Building Excellence <br /> In <span className="text-primary not-italic">{cityName}</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed font-light">
                        Elevate your property with {cityName}'s leading concrete specialists.
                        Engineering durable, beautiful hardscapes with 30+ years of local mastery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Link href="/contact" className="btn-primary shadow-[0_0_40px_rgba(251,146,60,0.2)] text-xl py-5 px-10">
                            Get Your Free {cityName} Quote
                        </Link>
                        <Link href="tel:9097872400" className="text-3xl font-black text-white hover:text-primary transition-colors tracking-widest italic">
                            (909) 787-2400
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-container py-32 px-6 md:px-0">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight italic">Why {cityName} <br /><span className="text-primary not-italic">Chooses Us</span></h2>
                        <p className="text-slate-400 text-xl leading-relaxed font-light">
                            When it comes to concrete work in {cityName}, experience and quality matter.
                            Our team understands the local soil conditions and environmental factors that affect
                            concrete longevity in Southern California. We don't just pour concrete;
                            we build foundations that last for generations.
                        </p>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                "Licensed, Bonded, and Insured",
                                "Free Accurate On-Site Estimates",
                                "High-Strength Concrete Mixes",
                                "Modern Stamped & Decorative Finishes",
                                "Locally Owned & Operated Near You"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-6 p-6 rounded-3xl bg-slate-900 border border-white/5 hover:border-primary/30 transition-all group">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-white font-bold uppercase tracking-tight text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card-gradient p-16 relative overflow-hidden group border-white/5 bg-slate-900/40">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10 transition-all group-hover:bg-primary/20" />
                        <h3 className="text-3xl font-black mb-8 uppercase text-white tracking-tight italic">Serving {cityName} Families</h3>
                        <p className="text-xl text-slate-400 leading-relaxed mb-12 font-light italic">
                            "We have been the go-to concrete contractor in {cityName} for decades,
                            helping homeowners increase their property value with high-quality driveway installations.
                            Whether you're near the city center or in the hills, our crew is ready for you."
                        </p>
                        <div className="space-y-6">
                            <p className="font-black text-primary text-sm uppercase tracking-[0.3em] border-b border-white/10 pb-4">Service Highlights</p>
                            <div className="grid grid-cols-2 gap-6 text-sm text-white font-bold uppercase tracking-tighter">
                                <div className="flex items-center space-x-3"><span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#fb923c]" /><span>Driveway Removal</span></div>
                                <div className="flex items-center space-x-3"><span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#fb923c]" /><span>Precise Grading</span></div>
                                <div className="flex items-center space-x-3"><span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#fb923c]" /><span>Reinforcement</span></div>
                                <div className="flex items-center space-x-3"><span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#fb923c]" /><span>Seal Coating</span></div>
                                <div className="flex items-center space-x-3"><span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#fb923c]" /><span>Stamped Patterns</span></div>
                                <div className="flex items-center space-x-3"><span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#fb923c]" /><span>Custom Colors</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="w-full bg-slate-900/30 py-32 border-y border-white/5">
                <div className="section-container px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-20 uppercase tracking-tighter italic">{cityName} Concrete <span className="text-primary not-italic">Services</span></h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <ServiceItem icon="🏗️" title="New Driveways" desc={`Full installation of industrial-grade concrete driveways designed for the specific needs of ${cityName} homes.`} />
                        <ServiceItem icon="✨" title="Stamped Concrete" desc="Premium decorative stamped solutions mimicking brick, stone, and slate with artisan textures." />
                        <ServiceItem icon="🧱" title="Patio & Pavers" desc="Extend your outdoor living space with architectural concrete patios and luxury paver walkways." />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-container py-32 px-6 text-center">
                <div className="bg-primary rounded-[4rem] p-16 md:p-24 text-white shadow-[0_40px_80px_-15px_rgba(251,146,60,0.4)] relative overflow-hidden group">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-[120px] group-hover:scale-110 transition-transform duration-1000" />
                    <h2 className="text-5xl md:text-8xl font-black mb-10 uppercase tracking-tighter leading-none italic">Ready to Upgrade <br />Your {cityName} Home?</h2>
                    <p className="text-xl md:text-2xl mb-16 opacity-90 font-light max-w-3xl mx-auto italic leading-relaxed">Join hundreds of satisfied {cityName} homeowners. Get your professional, free on-site estimate today.</p>
                    <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                        <Link href="/contact" className="bg-slate-950 text-white font-black py-6 px-14 rounded-[2rem] hover:scale-105 transition-all shadow-2xl text-2xl uppercase tracking-tighter">
                            Get My Free Estimate
                        </Link>
                        <a href="tel:9097872400" className="text-4xl md:text-5xl font-black hover:text-slate-950 transition-all tracking-tighter italic underline decoration-4 decoration-slate-950/20 underline-offset-8">
                            (909) 787-2400
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ServiceItem({ icon, title, desc }: { icon: string; title: string, desc: string }) {
    return (
        <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl border border-white/5 transition-all hover:border-primary/50 hover:-translate-y-4 group">
            <div className="text-7xl mb-10 group-hover:scale-125 transition-transform duration-500 inline-block drop-shadow-2xl">{icon}</div>
            <h3 className="text-2xl font-black mb-6 text-white uppercase tracking-tight italic">{title}</h3>
            <p className="text-slate-500 leading-relaxed font-light text-lg">{desc}</p>
        </div>
    );
}
