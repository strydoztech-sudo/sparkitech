// API helper - connects Next.js to Laravel billing backend
// billing.sparkitech.space is where your Laravel app runs on cPanel

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://billing.sparkitech.space/api'

export interface SiteSettings {
  company_name: string
  company_phone: string
  company_email: string
  company_address: string
  company_logo: string | null
  tagline: string
  facebook: string
  instagram: string
  youtube: string
  whatsapp: string
}

export interface Product {
  id: number
  name: string
  description: string
  category: string
  unit: string
  price: number
  tax_rate: number
  hsn_code: string
  image: string | null
}

export interface Service {
  name: string
  description: string
  icon: string
  slug: string
}

// Fetch company settings from Laravel
export async function getSettings(): Promise<SiteSettings> {
  try {
    const res = await fetch(`${API_BASE}/settings`, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error('Failed')
    return res.json()
  } catch {
    return {
      company_name: 'Spark Info Tech Solutions',
      company_phone: '+91 12345 67880',
      company_email: 'info@sparkitech.space',
      company_address: 'Coimbatore, Tamil Nadu',
      company_logo: null,
      tagline: 'Your Security, Our Priority',
      facebook: '',
      instagram: '',
      youtube: '',
      whatsapp: '911234567880',
    }
  }
}

// Fetch products from Laravel
export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE}/products`, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error('Failed')
    const data = await res.json()
    return data.data || []
  } catch {
    return []
  }
}

// Submit contact inquiry to Laravel
export async function submitInquiry(data: {
  name: string
  phone: string
  email?: string
  service?: string
  message: string
}) {
  const res = await fetch(`${API_BASE}/inquiry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return res.json()
}

// Default settings for static generation
export const defaultSettings: SiteSettings = {
  company_name: 'Spark Info Tech Solutions',
  company_phone: '+91 12345 67880',
  company_email: 'info@sparkitech.space',
  company_address: 'No. 123, Anna Salai, Coimbatore - 641001, Tamil Nadu',
  company_logo: null,
  tagline: 'உங்கள் பாதுகாப்பு, எங்கள் முன்னுரிமை',
  facebook: 'https://facebook.com/sparkitech',
  instagram: 'https://instagram.com/sparkitech',
  youtube: '',
  whatsapp: '911234567880',
}
