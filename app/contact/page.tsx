'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { submitInquiry } from '@/lib/api'
import { services } from '@/lib/services'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await submitInquiry(form)
      if (res.success) {
        setSuccess(true)
        setForm({ name: '', phone: '', email: '', service: '', message: '' })
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please call us directly.')
    }
    setLoading(false)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-20">
        <div className="container">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span><span>Contact</span>
            </div>
            <h1 className="text-5xl font-display font-800 mb-4">
              Get In <span className="text-blue-400">Touch</span>
            </h1>
            <p className="text-slate-300 text-lg">
              தொடர்பு கொள்ளுங்கள் — 24/7 உதவிக்கு தயாராக இருக்கிறோம்.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-10">

            {/* Left Info */}
            <div className="md:col-span-2">
              <div className="bg-slate-900 text-white rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-display font-700 mb-2">Contact Information</h3>
                <p className="text-slate-400 text-sm mb-8">எங்களை எப்போதும் தொடர்பு கொள்ளலாம்</p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-600 uppercase tracking-wider mb-1">Phone</p>
                      <a href="tel:+919444530951" className="text-white font-600 hover:text-blue-400 transition-colors">
                        +919444530951</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-600 uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:info@sparkitech.space" className="text-white font-600 hover:text-blue-400 transition-colors">info@sparkitech.space</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-600 uppercase tracking-wider mb-1">Location</p>
                      <p className="text-white"> Poonamallee, Chennai</p>
                      <p className="text-slate-400 text-sm">We serve all major cities</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-600 uppercase tracking-wider mb-1">Working Hours</p>
                      <p className="text-white font-600">24/7 — We never close!</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-10 pt-8 border-t border-slate-700">
                  <p className="text-xs text-slate-400 mb-3">Follow us</p>
                  <div className="flex gap-3">
                    {['f', 'in', 'yt', 'W'].map(s => (
                      <a key={s} href="#" className="w-9 h-9 bg-slate-800 hover:bg-primary-500 rounded-lg flex items-center justify-center text-xs font-700 transition-colors">
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="md:col-span-3">
              <div className="border border-slate-100 rounded-2xl p-8">
                <h3 className="text-2xl font-display font-700 text-slate-900 mb-2">Send Us a Message</h3>
                <p className="text-slate-500 text-sm mb-8">நாங்கள் 2 மணி நேரத்தில் பதிலளிப்போம்.</p>

                {success ? (
                  <div className="text-center py-12">
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-700 text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500">Thank you! We'll contact you within 2 hours.</p>
                    <p className="text-slate-400 text-sm mt-2">நன்றி! விரைவில் தொடர்பு கொள்கிறோம்.</p>
                    <button onClick={() => setSuccess(false)} className="mt-6 text-primary-500 font-600 text-sm hover:underline">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl p-3 mb-5">
                        {error}
                      </div>
                    )}
                    <div className="grid md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-600 text-slate-700 mb-2">Your Name *</label>
                        <input type="text" required placeholder="John Doe"
                          value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-600 text-slate-700 mb-2">Phone Number *</label>
                        <input type="tel" required placeholder="+91 98765 43210"
                          value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 transition-all" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label className="block text-sm font-600 text-slate-700 mb-2">Email Address</label>
                      <input type="email" placeholder="john@example.com"
                        value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 transition-all" />
                    </div>
                    <div className="mb-5">
                      <label className="block text-sm font-600 text-slate-700 mb-2">Service Required</label>
                      <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 transition-all bg-white">
                        <option value="">Select a service...</option>
                        {services.map(s => (
                          <option key={s.slug} value={s.slug}>{s.icon} {s.name}</option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-600 text-slate-700 mb-2">Message *</label>
                      <textarea required rows={4} placeholder="Tell us about your requirements..."
                        value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/10 transition-all resize-none" />
                    </div>
                    <button type="submit" disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-white font-600 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200">
                      {loading ? (
                        <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</span>
                      ) : (
                        <><Send size={16} /> Send Message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-slate-100 py-10">
        <div className="container">
          <div className="bg-slate-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <MapPin size={40} className="mx-auto mb-3 text-primary-500" />
              <p className="font-600 text-slate-700">Coimbatore, Tamil Nadu</p>
              <p className="text-sm">Serving all major cities across Tamil Nadu</p>
              <a href="https://maps.google.com/?q=Coimbatore+Tamil+Nadu" target="_blank"
                className="mt-3 inline-block text-primary-500 text-sm font-600 hover:underline">
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
