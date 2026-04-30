import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/services'

export const metadata = {
  title: 'Our Services | Spark Info Tech Solutions',
  description: 'CCTV installation, security cameras, web development, billing software and more in Tamil Nadu.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-20">
        <div className="container">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span><span>Services</span>
            </div>
            <h1 className="text-5xl font-display font-800 mb-4">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-slate-300 text-lg">
              எங்கள் சேவைகள் — CCTV நிறுவல் முதல் மொபைல் App வரை, அனைத்தும் ஒரே இடத்தில்.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="group bg-white border border-slate-100 rounded-2xl p-8 card-hover hover:border-primary-500/30">
                <div className="text-5xl mb-5">{s.icon}</div>
                <h2 className="text-xl font-700 text-slate-900 mb-1 group-hover:text-primary-500 transition-colors">{s.name}</h2>
                <p className="text-sm text-slate-400 mb-3">{s.nameTa}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{s.shortDesc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs font-700 text-primary-500 bg-blue-50 px-3 py-1 rounded-full">Starting {s.startingPrice}</span>
                  <span className="flex items-center gap-1 text-sm font-600 text-primary-500 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-800 text-white mb-4">
            எந்த சேவை வேண்டும் என்று தெரியவில்லையா?
          </h2>
          <p className="text-slate-300 mb-6">Not sure which service you need? Our experts will guide you.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-600 px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5">
            Get Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
