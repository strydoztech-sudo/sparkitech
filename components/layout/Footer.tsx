import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { services } from '@/lib/services'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-32">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
              <div>
                <div className="font-bold text-white text-base leading-tight">Spark Info Tech</div>
                <div className="text-[11px] text-slate-400 tracking-widest">SOLUTIONS</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-2">உங்கள் பாதுகாப்பு, எங்கள் முன்னுரிமை</p>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">Your Security, Our Priority. Serving Tamil Nadu since 2012.</p>
            <div className="flex gap-3">
              <a href="https://facebook.com/sparkitech" target="_blank" className="w-9 h-9 bg-slate-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={15} />
              </a>
              <a href="https://instagram.com/sparkitech" target="_blank" className="w-9 h-9 bg-slate-800 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={15} />
              </a>
              <a href="https://wa.me/911234567880" target="_blank" className="w-9 h-9 bg-slate-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors text-sm font-bold">
                W
              </a>
            </div>
          </div>

          {/* Security Services */}
          <div>
            <h4 className="text-white font-700 mb-5 text-sm uppercase tracking-wider">Security Services</h4>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-primary-500">›</span> {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-white font-700 mb-5 text-sm uppercase tracking-wider">IT Services</h4>
            <ul className="space-y-2.5">
              {services.slice(5).map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-primary-500">›</span> {s.name}
                  </Link>
                </li>
              ))}
              <li><Link href="/estimate" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"><span className="text-primary-500">›</span> Get Estimate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-700 mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone size={15} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+9194445 30951" className="text-sm text-slate-300 hover:text-white transition-colors block">
                    94445 30951</a>
                  <span className="text-xs text-slate-500">24/7 Support</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@sparkitech.space" className="text-sm text-slate-300 hover:text-white transition-colors">info@sparkitech.space</a>
              </li>
              <li className="flex gap-3">
                <MapPin size={15} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400"> Poonamallee, Chennai<br />We serve all major cities</span>
              </li>
            </ul>
            {/* Newsletter */}
            <div className="mt-5">
              <p className="text-xs text-slate-400 mb-2">Subscribe for updates</p>
              <div className="flex gap-2">
                <input type="email" placeholder="your@email.com" className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500" />
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-2 rounded-lg text-sm font-600 transition-colors">Go</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-5">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Spark Info Tech Solutions. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
