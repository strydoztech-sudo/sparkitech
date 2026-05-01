'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { services } from '@/lib/services'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+91 94445 30951" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={12} /> +91 94445 30951
            </a>
            <a href="mailto:info@sparkitech.space" className="hover:text-white transition-colors">
              info@sparkitech.space
            </a>
          </div>
          <div className="flex gap-4 text-xs">
            <span>Mon–Sun: 24/7 Support</span>
            <span>|</span>
            <span> Poonamallee, Chennai</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-lg' : 'border-b border-slate-100'}`}>
        <div className="container">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
              <div>
                <div className="font-display font-800 text-base text-slate-900 leading-tight">Spark Info Tech</div>
                <div className="text-[10px] text-slate-400 leading-tight tracking-wide">SOLUTIONS</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-500 hover:bg-slate-50 rounded-lg transition-all">Home</Link>
              <Link href="/about" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-500 hover:bg-slate-50 rounded-lg transition-all">About Us</Link>

              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <Link href="/services" className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-500 hover:bg-slate-50 rounded-lg transition-all">
                  Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 grid grid-cols-3 gap-1">
                    {services.map(s => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group">
                        <span className="text-xl">{s.icon}</span>
                        <div>
                          <p className="text-xs font-600 text-slate-800 group-hover:text-primary-500 transition-colors">{s.name}</p>
                          <p className="text-[10px] text-slate-400 leading-tight">{s.nameTa}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/estimate" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-500 hover:bg-slate-50 rounded-lg transition-all">Get Estimate</Link>
              <Link href="/contact" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-500 hover:bg-slate-50 rounded-lg transition-all">Contact</Link>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+91 9444530951" className="flex items-center gap-2 text-sm font-600 text-primary-500">
                <Phone size={15} /> +9194445 30951
              </a>
              <Link href="/contact" className="bg-primary-500 hover:bg-primary-600 text-white text-sm font-600 px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200">
                Get A Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-slate-700">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4">
            <Link href="/" className="block py-3 text-sm font-medium text-slate-700 border-b border-slate-50" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" className="block py-3 text-sm font-medium text-slate-700 border-b border-slate-50" onClick={() => setOpen(false)}>About Us</Link>
            <div className="py-2 border-b border-slate-50">
              <p className="text-xs font-700 text-slate-400 uppercase tracking-wider mb-2">Services</p>
              <div className="grid grid-cols-2 gap-1">
                {services.map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-xs font-medium text-slate-700" onClick={() => setOpen(false)}>
                    {s.icon} {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/estimate" className="block py-3 text-sm font-medium text-slate-700 border-b border-slate-50" onClick={() => setOpen(false)}>Get Estimate</Link>
            <Link href="/contact" className="block py-3 text-sm font-medium text-slate-700" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/contact" className="mt-3 block bg-primary-500 text-white text-sm font-600 px-4 py-3 rounded-lg text-center" onClick={() => setOpen(false)}>
              Get A Free Quote
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}
