import Link from 'next/link'
import { ArrowRight, Calculator, Download, Phone } from 'lucide-react'

export const metadata = {
  title: 'Get Estimate | Spark Info Tech Solutions',
  description: 'Get an instant estimate for CCTV installation and IT services. Select products and download your quotation.',
}

export default function EstimatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-6">
            <Calculator size={14} /> Instant Estimate Tool
          </div>
          <h1 className="text-5xl font-display font-800 mb-4">
            Get Your <span className="text-blue-400">Free Estimate</span>
          </h1>
          <p className="text-slate-300 text-lg mb-4">
            தேவையான பொருட்களை தேர்ந்தெடுத்து உடனே மேற்கோளை பதிவிறக்கவும்!
          </p>
          <p className="text-slate-400">Select products → Fill your details → Download PDF quotation instantly</p>
        </div>
      </section>

      {/* Options */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

            {/* Option 1 - Online Estimator */}
            <div className="border-2 border-primary-500 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-700 px-3 py-1 rounded-full">
                INSTANT
              </div>
              <div className="text-5xl mb-5">🧮</div>
              <h2 className="text-xl font-700 text-slate-900 mb-3">Online Estimate Tool</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Select products from our catalog, enter your details and download a professional 
                PDF quotation instantly — no waiting!
              </p>
              <ul className="text-left text-sm text-slate-600 space-y-2 mb-8">
                <li className="flex items-center gap-2">✅ Choose from 20+ products</li>
                <li className="flex items-center gap-2">✅ Instant PDF download</li>
                <li className="flex items-center gap-2">✅ GST included automatically</li>
                <li className="flex items-center gap-2">✅ No registration needed</li>
              </ul>
              <a href="https://billing.sparkitech.space/estimate" target="_blank"
                className="flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-700 px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200">
                <Download size={18} /> Launch Estimate Tool
              </a>
            </div>

            {/* Option 2 - Call */}
            <div className="border border-slate-200 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-5">📞</div>
              <h2 className="text-xl font-700 text-slate-900 mb-3">Talk to Our Expert</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Prefer a personalised quote? Call or WhatsApp us with your requirements 
                and we'll prepare a detailed estimate within 2 hours.
              </p>
              <ul className="text-left text-sm text-slate-600 space-y-2 mb-8">
                <li className="flex items-center gap-2">✅ Free site survey included</li>
                <li className="flex items-center gap-2">✅ Custom package design</li>
                <li className="flex items-center gap-2">✅ Best price guaranteed</li>
                <li className="flex items-center gap-2">✅ Response within 2 hours</li>
              </ul>
              <div className="space-y-3">
                <a href="tel:+911234567880"
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-600 px-8 py-4 rounded-xl transition-all">
                  <Phone size={16} /> +91 12345 67880
                </a>
                <a href="https://wa.me/911234567880?text=Hi, I need a quote for security services"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-600 px-8 py-4 rounded-xl transition-all">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-display font-800 text-slate-900 mb-10">
              How the Estimate Tool <span className="gradient-text">Works</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { step: '01', icon: '📦', title: 'Select Products', desc: 'Browse our catalog and choose what you need with quantity.' },
                { step: '02', icon: '👤', title: 'Enter Your Details', desc: 'Fill your name and phone number for the quotation.' },
                { step: '03', icon: '📥', title: 'Download PDF', desc: 'Get a professional GST quotation instantly as PDF.' },
              ].map(s => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-700 mx-auto mb-4 text-sm">
                    {s.step}
                  </div>
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-700 text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
