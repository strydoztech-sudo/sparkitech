import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Spark Info Tech Solutions | CCTV & IT Services Coimbatore',
  description: 'Spark Info Tech Solutions - Professional CCTV installation, security systems, web development, billing software and IT services in Coimbatore, Tamil Nadu. உங்கள் பாதுகாப்பு, எங்கள் முன்னுரிமை.',
  keywords: 'CCTV installation Coimbatore, security camera Tamil Nadu, web development, billing software, intercom, security gate, Spark Info Tech',
  openGraph: {
    title: 'Spark Info Tech Solutions',
    description: 'CCTV & IT Solutions - Coimbatore, Tamil Nadu',
    url: 'https://sparkitech.space',
    siteName: 'Spark Info Tech Solutions',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat phone="+919444530951" />
      </body>
    </html>
  )
}
