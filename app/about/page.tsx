import { CheckCircle, Award, Users, Clock, MapPin, Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | Spark Info Tech Solutions',
  description: 'Learn about Spark Info Tech Solutions - Tamil Nadu\'s trusted CCTV and IT solutions provider since 2012.',
}

const team = [
  { name: 'Vijay Kumar', role: 'Founder & CEO', initial: 'V' },
  { name: 'Senthil Raj', role: 'Head of Operations', initial: 'S' },
  { name: 'Priya Lakshmi', role: 'Lead Engineer', initial: 'P' },
  { name: 'Arun Prakash', role: 'Web Development Head', initial: 'A' },
  { name: 'Kavitha Devi', role: 'Sales Manager', initial: 'K' },
  { name: 'Muthu Selvam', role: 'Senior CCTV Technician', initial: 'M' },
  { name: 'Divya Bharathi', role: 'Customer Support Lead', initial: 'D' },
  { name: 'Rajan Murugan', role: 'Security Specialist', initial: 'R' },
]

const values = [
  { icon: '🛡️', title: 'Reliability', desc: 'We deliver on every promise. 24/7 availability when you need us.' },
  { icon: '💡', title: 'Innovation', desc: 'Latest AI surveillance and smart IoT security solutions.' },
  { icon: '🤝', title: 'Integrity', desc: 'Transparent pricing, honest assessments, no hidden charges.' },
  { icon: '👥', title: 'Customer Focus', desc: 'Your satisfaction is our success metric. Personal attention always.' },
  { icon: '⚙️', title: 'Quality', desc: 'Certified products and industry best practices in every job.' },
  { icon: '📍', title: 'Local Expertise', desc: 'Deep roots in Tamil Nadu — we understand local needs.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-20">
        <div className="container">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span><span>About Us</span>
            </div>
            <h1 className="text-5xl font-display font-800 mb-4">
              About <span className="text-blue-400">Spark Info Tech</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tamil Nadu's most trusted security and IT solutions provider, 
              serving homes and businesses since 2012.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-primary-500 text-xs font-700 uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Who We Are
              </div>
              <h2 className="text-4xl font-display font-800 text-slate-900 mb-6">
                Protecting Tamil Nadu<br /><span className="gradient-text">For Over a Decade</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Spark Info Tech Solutions was founded in 2012 with a single mission: 
                to make professional-grade security accessible to every home and business in Tamil Nadu.
              </p>
              <p className="text-slate-500 leading-relaxed mb-4">
                2012 ஆம் ஆண்டில் நிறுவப்பட்ட எங்கள் நிறுவனம், Coimbatore, Chennai, Madurai, Salem உட்பட 
                10+ நகரங்களில் 5000+ வாடிக்கையாளர்களுக்கு சேவை வழங்கியுள்ளது.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Today, we are a full-spectrum security and IT solutions company with 50+ certified 
                technicians delivering everything from CCTV to custom mobile apps.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Certified Technicians', '24/7 Support', '1-Year Warranty', 'Free Site Survey', 'AMC Plans', 'EMI Available'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle size={15} className="text-primary-500 flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl h-96 flex items-center justify-center relative">
              <div className="text-center text-white">
                <div className="text-7xl mb-3">🏆</div>
                <p className="text-slate-300 text-sm">Established</p>
                <p className="text-6xl font-display font-900 text-blue-300">2012</p>
              </div>
              <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-700 px-3 py-1 rounded-full">50+ Team Members</div>
              <div className="absolute bottom-4 left-4 bg-green-500 text-white text-xs font-700 px-3 py-1 rounded-full">5000+ Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary-500 text-xs font-700 uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">Our Values</div>
            <h2 className="text-4xl font-display font-800 text-slate-900">What Drives <span className="gradient-text">Everything We Do</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-6 text-center card-hover border border-slate-100">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-700 text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-500 py-14">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[{ n: '5000+', l: 'Installations' }, { n: '10+', l: 'Cities' }, { n: '12 Yrs', l: 'Experience' }, { n: '50+', l: 'Team Members' }].map(s => (
              <div key={s.l}><div className="text-4xl font-display font-900 mb-1">{s.n}</div><div className="text-blue-100 text-sm">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary-500 text-xs font-700 uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">Our Team</div>
            <h2 className="text-4xl font-display font-800 text-slate-900">Meet the <span className="gradient-text">Experts</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map(m => (
              <div key={m.name} className="text-center p-6 border border-slate-100 rounded-2xl card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl font-700 mx-auto mb-4">
                  {m.initial}
                </div>
                <h4 className="font-700 text-slate-900 text-sm">{m.name}</h4>
                <p className="text-xs text-slate-400 mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-display font-800 text-white mb-4">
            Ready to Work With <span className="text-blue-400">Tamil Nadu's Best?</span>
          </h2>
          <p className="text-slate-300 mb-8">இன்றே தொடர்பு கொள்ளுங்கள் — இலவச ஆலோசனை!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-600 px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5">
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="flex items-center gap-2 border border-slate-600 hover:border-white text-white font-600 px-8 py-4 rounded-xl transition-all hover:bg-white/5">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
