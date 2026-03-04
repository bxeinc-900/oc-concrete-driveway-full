import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact OC Concrete Driveway | Get a Free Estimate",
    description: "Ready to transform your driveway? Contact OC Concrete Driveway today for a free on-site estimate in Orange County and Riverside. Call (909) 787-2400.",
};

export default function ContactPage() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-300">
            {/* Header */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl" />
                <div className="section-container relative z-10 px-4">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get Started Today</span>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 text-white uppercase tracking-tighter italic">Get A <span className="text-primary not-italic">Quote</span></h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light">
                        Ready to transform your driveway? Schedule your free on-site estimate below or call us directly.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="section-container px-4 grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Information Column */}
                    <div className="space-y-16">
                        <div>
                            <h2 className="text-3xl font-black text-white uppercase mb-12 tracking-widest border-b border-white/10 pb-4">Direct Lines</h2>
                            <div className="space-y-10">
                                <a href="tel:9097872400" className="flex items-center space-x-8 group">
                                    <div className="w-20 h-20 bg-primary text-white flex items-center justify-center rounded-3xl group-hover:rotate-12 transition-transform shadow-[0_0_30px_rgba(251,146,60,0.3)]">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em] mb-1">Call or Text Anytime</p>
                                        <p className="text-4xl font-black text-white tracking-widest">(909) 787-2400</p>
                                    </div>
                                </a>

                                <div className="flex items-center space-x-8">
                                    <div className="w-20 h-20 bg-slate-900 border border-white/5 text-primary flex items-center justify-center rounded-3xl">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em] mb-1">Main Office</p>
                                        <p className="text-3xl font-black text-white tracking-tighter uppercase">Huntington Beach, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 p-12 rounded-[3rem] border border-white/5 space-y-8">
                            <h3 className="text-xl font-black uppercase text-white tracking-widest">Business Hours</h3>
                            <ul className="space-y-6">
                                <li className="flex justify-between font-bold border-b border-white/5 pb-4">
                                    <span className="text-slate-500 uppercase text-sm">Mon - Fri</span>
                                    <span className="text-white">7:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between font-bold border-b border-white/5 pb-4">
                                    <span className="text-slate-500 uppercase text-sm">Saturday</span>
                                    <span className="text-white">8:00 AM - 4:00 PM</span>
                                </li>
                                <li className="flex justify-between font-bold">
                                    <span className="text-slate-500 uppercase text-sm">Sunday</span>
                                    <span className="text-primary italic">Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Booking Widget Column */}
                    <div>
                        <div className="bg-slate-900/40 p-1.5 md:p-4 rounded-[4rem] shadow-2xl border border-white/5 min-h-[700px]">
                            <div className="bg-white/5 backdrop-blur-3xl rounded-[3.5rem] p-8 md:p-12 h-full">
                                <h2 className="text-3xl font-black text-white uppercase mb-12 leading-tight tracking-tight italic">Schedule Your <span className="text-primary not-italic">On-Site Estimate</span></h2>
                                <iframe
                                    src="https://link.betterautomate.com/widget/booking/CGU2aayv2pnJ0CWUfL4O"
                                    style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                                    scrolling="no"
                                    id="CGU2aayv2pnJ0CWUfL4O_1772577084477"
                                ></iframe>
                                <Script src="https://link.betterautomate.com/js/form_embed.js" type="text/javascript" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full h-[600px] relative mt-12 grayscale hover:grayscale-0 transition-all duration-1000 opacity-50 hover:opacity-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106197.64969248235!2d-117.96203530867727!3d33.717315181721085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd950337c7707%3A0x6bba4e571e2e49c8!2sOrange%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1715800000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </div>
    );
}

