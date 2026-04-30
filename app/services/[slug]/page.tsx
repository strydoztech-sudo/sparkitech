import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { services } from '@/lib/services'

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug)
  if (!service) return {}
  return {
    title: `${service.name} | Spark Info Tech Solutions`,
    description: service.heroDesc,
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug)
  if (!service) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-20">
        <div className="container">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>›</span>
            <span>{service.name}</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-5">{service.icon}</div>
              <h1 className="text-5xl font-display font-800 mb-3">
                <span className="text-blue-400">{service.name}</span>
              </h1>
              <p className="text-lg text-slate-300 mb-2">{service.nameTa}</p>
              <p className="text-slate-400 leading-relaxed mb-8">{service.heroDesc}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-600 px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30">
                  Get Free Quote <ArrowRight size={16} />
                </Link>
                <a href="tel:+911234567880" className="flex items-center gap-2 border border-slate-600 hover:border-white text-white font-600 px-7 py-3.5 rounded-xl transition-all hover:bg-white/5">
                  <Phone size={16} /> Call Now
                </a>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur">
              <p className="text-xs font-700 uppercase tracking-wider text-slate-400 mb-4">Starting Price</p>
              <p className="text-5xl font-display font-900 text-blue-300 mb-2">{service.startingPrice}</p>
              <p className="text-slate-400 text-sm mb-6">+ GST | Free site survey included</p>
              <div className="space-y-2.5">
                {service.features.map(f => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle size={15} className="text-green-400 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10">

            {/* Left - Details */}
            <div className="md:col-span-2">
              {/* Features */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-primary-500 text-xs font-700 uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                  What's Included
                </div>
                <h2 className="text-3xl font-display font-800 text-slate-900 mb-6">
                  Everything You Get with Our <span className="gradient-text">{service.name}</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map(f => (
                    <div key={f} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                      <CheckCircle size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-500 text-slate-700">{f}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-primary-500 text-xs font-700 uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                  Our Process
                </div>
                <h2 className="text-3xl font-display font-800 text-slate-900 mb-6">
                  How It <span className="gradient-text">Works</span>
                </h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={step} className="flex items-center gap-4 p-5 border border-slate-100 rounded-xl hover:border-primary-500/30 hover:bg-blue-50/30 transition-all">
                      <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-700 text-sm flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <p className="font-600 text-slate-800">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Banner */}
              <div className="bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-display font-800 mb-2">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6">இன்றே அழைக்கவும் — இலவச தள பரிசோதனை!</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="flex items-center gap-2 bg-white text-primary-500 font-700 px-6 py-3 rounded-xl hover:bg-blue-50 transition-all">
                    Request Quote <ArrowRight size={15} />
                  </Link>
                  <a href="https://wa.me/911234567880" target="_blank" className="flex items-center gap-2 bg-green-500 text-white font-600 px-6 py-3 rounded-xl hover:bg-green-600 transition-all">
                    <MessageCircle size={15} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Contact Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 sticky top-20">
                <h3 className="font-700 text-lg mb-2">Need Help?</h3>
                <p className="text-slate-400 text-sm mb-5">Our team is available 24/7</p>
                <div className="space-y-3 mb-5">
                  <a href="tel:+911234567880" className="flex items-center gap-3 text-sm">
                    <Phone size={15} className="text-blue-400" />
                    <span>+91 12345 67880</span>
                  </a>
                  <a href="mailto:info@sparkitech.space" className="flex items-center gap-3 text-sm">
                    <MessageCircle size={15} className="text-blue-400" />
                    <span>info@sparkitech.space</span>
                  </a>
                </div>
                <Link href="/contact" className="block w-full bg-primary-500 hover:bg-primary-600 text-white font-600 py-3 rounded-xl text-center text-sm transition-all">
                  Get Free Quote
                </Link>
              </div>

              {/* All Services */}
              <div className="border border-slate-100 rounded-2xl p-5">
                <h4 className="font-700 text-slate-900 mb-4 text-sm">All Services</h4>
                <div className="space-y-1">
                  {services.map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}`}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-all ${
                        s.slug === service.slug
                          ? 'bg-primary-500 text-white font-600'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-primary-500'
                      }`}>
                      <span>{s.icon}</span> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-pad bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-display font-800 text-slate-900 mb-8 text-center">
            Other <span className="gradient-text">Services</span> You May Need
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {services.filter(s => s.slug !== service.slug).slice(0, 3).map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="bg-white border border-slate-100 rounded-xl p-5 card-hover group">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-700 text-slate-900 mb-1 group-hover:text-primary-500 transition-colors">{s.name}</h3>
                <p className="text-xs text-slate-400 mb-2">{s.nameTa}</p>
                <p className="text-sm text-slate-500">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
