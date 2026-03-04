import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <Image
          src="/images/Concrete-Driveway-orange-county-concrete-huntington beach.jpg"
          alt="Modern Concrete Driveway Orange County"
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />

        <div className="section-container relative z-10 w-full px-4 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-slate-900/50 backdrop-blur-md border border-slate-700/50 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-primary animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Serving Orange County & Riverside Since 2002</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-white tracking-tighter uppercase drop-shadow-2xl">
              Concrete <span className="text-primary italic block md:inline font-outline-2">Driveways,</span> <br />
              Patios, & Foundations
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-xl leading-relaxed font-light">
              Transform your property with Southern California's finest concrete artistry. From architectural driveways to custom stamped patios, we build heritage-grade hardscapes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link href="/contact" className="btn-primary flex items-center justify-center space-x-3 text-lg group">
                <span>Free Project Estimate</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/portfolio" className="btn-outline flex items-center justify-center bg-white/5 backdrop-blur-sm">
                View Gallery
              </Link>
            </div>
          </div>

          {/* Featured Project Floating Card */}
          <div className="hidden lg:block flex-1 relative h-[500px] animate-float">
            <div className="absolute inset-0 rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl">
              <Image
                src="/images/a_large diamond driveway.jpg"
                alt="Diamond Pattern Concrete Driveway"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl">
                <p className="text-primary font-bold text-sm uppercase tracking-widest mb-1">Recent Project</p>
                <p className="text-white text-xl font-bold">Diamond Pattern Driveway</p>
                <p className="text-slate-400 text-sm">Yorba Linda, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 animate-bounce">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-primary" />
        </div>
      </section>

      {/* Services Grid - Dynamic & Dark */}
      <section className="py-32 relative overflow-hidden bg-slate-950">
        <div className="absolute -top-64 -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="section-container px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Our Specialties</h2>
              <p className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">High-Performance <br />Hardscape Services</p>
            </div>
            <Link href="/services" className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2 text-lg font-medium group">
              <span>Explore All Services</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              image="/images/Concrete-driveways-orange-county-Concrete-Contractor-Repair-Services.jpg"
              title="Architectural Driveways"
              desc="Standard, diamond-cut, and industrial-grade driveway replacements engineered for durability."
              href="/services"
            />
            <ServiceCard
              image="/images/stamped-concrete-decorative-concrete.jpeg"
              title="Stamped Finishes"
              desc="Artisan patterns mimicking natural stone, slate, and brick with custom antiqued colors."
              href="/services"
            />
            <ServiceCard
              image="/images/DRIVEWAY_PAVERS-decorative concrete driveway.jpg"
              title="Modern Pavers"
              desc="Interlocking paver systems for a luxury, permeable, and high-style outdoor aesthetic."
              href="/services"
            />
          </div>
        </div>
      </section>

      {/* Proof of Craftsmanship Section */}
      <section className="py-32 bg-slate-900/50 relative">
        <div className="section-container px-4 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-[2rem] overflow-hidden border border-white/5">
                <Image src="/images/backyard stamped concrete patio.jpg" alt="Patio Project" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="relative h-48 rounded-[2rem] overflow-hidden border border-white/5">
                <Image src="/images/concrete-driveway-Tustin-orange-county.jpg" alt="Tustin Project" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            <div className="pt-12 space-y-4">
              <div className="relative h-48 rounded-[2rem] overflow-hidden border border-white/5">
                <Image src="/images/bobcat breaking concrete orange county ca.jpg" alt="Demolition" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="relative h-64 rounded-[2rem] overflow-hidden border border-white/5">
                <Image src="/images/Concrete_driveway-Stamped_With_Borders Costa Mesa.jpg" alt="Costa Mesa Project" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-10">
            <div className="inline-block bg-primary/10 border border-primary/20 px-4 py-1 rounded-full text-xs font-bold uppercase text-primary">Years of Excellence</div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">20+ Years <br />Building trust In <br /><span className="text-primary italic">Southern California</span></h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Stat icon="🏆" title="Licensed & Bonded" desc="California Lic# 918040" />
              <Stat icon="🛡️" title="Full Warranty" desc="Guaranteed project finishes" />
              <Stat icon="📍" title="Local Experts" desc="Serving OC & Riverside" />
              <Stat icon="⭐" title="Top Rated" desc="4.9/5 Average Rating" />
            </div>

            <Link href="/about" className="btn-outline inline-flex mt-4">
              Meet Anthony & Brian
            </Link>
          </div>
        </div>
      </section>

      {/* City Link Cloud - SEO Friendly */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="section-container px-4 text-center">
          <p className="text-slate-500 font-bold uppercase tracking-widest mb-10">Serving Cities Across SoCal</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-tighter">
            {['Anaheim', 'Huntington Beach', 'Corona', 'Riverside', 'Yorba Linda', 'Villa Park', 'Costa Mesa', 'Laguna Niguel', 'Tustin', 'Chino Hills'].map(city => (
              <Link key={city} href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`} className="px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-full text-slate-400 hover:text-primary hover:border-primary transition-all duration-300">
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: Fast Quote */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/Paver-Driveway-Installation-eastside costa mesa.jpg" alt="Background" fill className="object-cover" />
        </div>
        <div className="section-container relative z-10 px-4 text-center space-y-12">
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none">
            Transform Your <br />Home Today
          </h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to increase your curb appeal? Join hundreds of satisfied SoCal homeowners. Get your free on-site estimate now.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <a href="tel:9097872400" className="px-12 py-6 bg-slate-950 text-white font-black text-2xl rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-transform block w-full sm:w-auto">
              (909) 787-2400
            </a>
            <Link href="/contact" className="px-12 py-6 bg-white text-primary font-black text-2xl rounded-full shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:-translate-y-2 transition-transform block w-full sm:w-auto">
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ image, title, desc, href }: { image: string; title: string; desc: string; href: string }) {
  return (
    <div className="group card-gradient overflow-hidden flex flex-col h-full transform transition-all duration-500 hover:-translate-y-4">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
        <div className="absolute bottom-6 left-6">
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">{title}</h3>
        </div>
      </div>
      <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
        <p className="text-slate-400 leading-relaxed font-light">{desc}</p>
        <Link href={href} className="flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-sm group-hover:translate-x-3 transition-transform">
          <span>Explore Service</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="2" strokeLinecap="round" /></svg>
        </Link>
      </div>
    </div>
  );
}

function Stat({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-center space-x-6 p-6 rounded-3xl bg-slate-900/30 border border-white/5 hover:border-primary/20 transition-colors group">
      <div className="text-4xl group-hover:scale-125 transition-transform">{icon}</div>
      <div>
        <h4 className="font-bold text-white text-xl">{title}</h4>
        <p className="text-slate-500 font-medium">{desc}</p>
      </div>
    </div>
  );
}
