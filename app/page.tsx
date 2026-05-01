import Link from 'next/link'
import { Phone, Shield, Star, CheckCircle, ArrowRight, Play, Award, Users, Clock, MapPin } from 'lucide-react'
import { services } from '@/lib/services'
import Image from "next/image";


export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative mt-10 mb-10 via-slate-800 to-blue-950 text-blue overflow-hidden min-h-[88vh] flex items-center">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10"
          style={{

  backgroundSize: "cover",
  backgroundPosition: "center",
}} />

          
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full opacity-5 blur-3xl pointer-events-none" />

        <div className="container relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-6">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                LIVE 24/7 PROTECTION
              </div>

              <h1 className="text-5xl md:text-6xl font-display font-900 leading-tight mb-6">
                Your Security<br />
                <span className="text-blue-400">Our Priority</span>
              </h1>
              
              <p className="text-lg text-slate-500 mb-4 leading-relaxed">
                <strong className="text-blue">Advanced Protection for Your Peace of Mind</strong>
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Advanced CCTV, security systems & IT solutions for homes and businesses across Tamil Nadu. 
                5000+ installations. 10+ cities. One trusted partner.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-600 px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30">
                  <Shield size={18} /> Get Free Quote
                </Link>
                <Link href="/estimate" className="flex items-center gap-2 border border-slate-600 hover:border-white text-blue font-600 px-7 py-3.5 rounded-xl transition-all hover:bg-white/5">
                  <Play size={16} /> Try Estimate Tool
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: '5000+', label: 'Installations' },
                  { num: '10+', label: 'Cities' },
                  { num: '24/7', label: 'Support' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-3xl font-display font-800 text-[#0057FF]">{s.num}</div>
                    <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
       
    
            <div className="hidden md:block mt-6">
              <div className="relative">
                
               
                <div className=" rounded-3xl p-8 backdrop-blur-sm">
            
            
            <Image
  src="/images/cctv_camera.png"
  alt="CCTV Camera"
  width={700}
  height={700}
/>

                </div>



                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-700 px-3 py-1.5 rounded-full shadow-lg">
                  ✓ 1 Year Warranty
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary-500 text-white text-xs font-700 px-3 py-1.5 rounded-full shadow-lg">
                  ⭐ 99% Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ───────────────────────────────── */}


      <section className="bg-primary-500 py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center md:justify-between gap-4 text-white text-sm font-500">
            {['📹 HD Recording', '🌙 Night Vision', '📱 Mobile Monitoring', '☁️ Cloud Storage', '🔔 Motion Alerts', '🔒 Secure Encryption'].map(f => (
              <span key={f} className="flex items-center gap-2">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary-500 text-xs font-700 uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              Our Services
            </div>
            <h2 className="text-4xl font-display font-800 text-slate-900 mb-4">
              Complete <span className="gradient-text">Security & IT</span> Solutions
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From CCTV installations to Mobile Apps — all your technology needs in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(service => (
              <Link key={service.slug} href={`/services/${service.slug}`}
                className="group bg-white border border-slate-100 rounded-2xl p-6 card-hover hover:border-primary-500/30">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-700 text-slate-900 mb-1 group-hover:text-primary-500 transition-colors">{service.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 mt-2">{service.shortDesc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-600 text-primary-500">Starting {service.startingPrice}</span>
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ─────────────────────────────────── */}
      <section className="section-pad bg-slate-50">
        <div className="container">
      
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
        
        
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl h-96 flex items-center justify-center relative overflow-hidden">
                <div className="text-9xl opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    
                    <Image
  src="/images/spark_cctv_aboutus.jpg"
  alt="CCTV Camera"
  width={700}
  height={700}
/>
                    
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-primary-500 text-white text-xs font-700 px-3 py-1 rounded-full">Since 2012</div>
                <div className="absolute bottom-4 right-4 bg-green-500 text-white text-xs font-700 px-3 py-1 rounded-full">10+ Cities</div>
              </div>


            </div>
            <div>
      
      
              <div className="inline-flex items-center gap-2 bg-blue-50 text-primary-500 text-xs font-700 uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                About Us
              </div>
              <h2 className="text-4xl font-display font-800 text-slate-900 mb-4">
                Tamil Nadu's <span className="gradient-text">Most Trusted</span> Security Partner
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Established in 2012, Spark Info Tech Solutions provides high-quality security and IT solutions to homes and commercial businesses across Tamil Nadu.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                We deliver end-to-end solutions with certified technicians, premium products, and comprehensive 24/7 support.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Certified Technicians', '24/7 Support', '1-Year Warranty', 'Free Site Survey', 'AMC Plans', '10+ Cities Covered'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle size={15} className="text-primary-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-600 px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section className="bg-primary-500 py-14">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { num: '5000+', label: 'Installations Completed' },
              { num: '10+', label: 'Cities Covered' },
              { num: '24/7', label: 'Support Available' },
              { num: '99%', label: 'Client Satisfaction' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-4xl font-display font-900 mb-1">{s.num}</div>
                <div className="text-blue-100 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 text-xs font-700 uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              Customer Reviews
            </div>
            <h2 className="text-4xl font-display font-800 text-slate-900">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Ramesh Kumar', city: 'Coimbatore', text: 'Spark CCTV provided excellent installation and the video quality is amazing. Very professional team!', rating: 5 },
              { name: 'Priya Natarajan', city: 'Chennai', text: 'Their billing software has transformed our shop management. Highly responsive support team. Highly recommended!', rating: 5 },
              { name: 'Arun Balaji', city: 'Madurai', text: 'The intercom system for our apartment complex works perfectly. Affordable and professional installation.', rating: 5 },
            ].map(t => (
              <div key={t.name} className="bg-slate-50 rounded-2xl p-6 relative">
                <div className="text-yellow-400 text-lg mb-3">{'★'.repeat(t.rating)}</div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-700 text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-700 text-sm text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.city}</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 text-6xl text-slate-100 font-serif leading-none">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-900 to-blue-950 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #0057FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container text-center relative z-10">
          <h2 className="text-4xl font-display font-800 text-white mb-4">
            Ready to Secure Your <span className="text-blue-400">Property?</span>
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Contact us today — for a free site survey and quote!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919444530951" className="flex items-center gap-2 bg-white text-primary-500 font-700 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all hover:-translate-y-0.5">
              <Phone size={18} /> Call: +91 91 94445 30951
            </a>
            <Link href="/contact" className="flex items-center gap-2 border border-slate-600 hover:border-white text-white font-600 px-8 py-4 rounded-xl transition-all hover:bg-white/5">
              Send Message <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}