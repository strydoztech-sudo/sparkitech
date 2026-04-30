import Link from 'next/link'
export default function NotFound() {
  return (
    <div style={{minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'40px'}}>
      <div>
        <div style={{fontSize:'80px',marginBottom:'20px'}}>🔒</div>
        <h1 style={{fontSize:'48px',fontWeight:900,color:'#0A0E1A',marginBottom:'12px'}}>404</h1>
        <p style={{fontSize:'18px',color:'#64748B',marginBottom:'32px'}}>Page not found</p>
        <Link href="/" style={{background:'#0057FF',color:'white',padding:'12px 32px',borderRadius:'12px',fontWeight:600,textDecoration:'none'}}>
          Go Home
        </Link>
      </div>
    </div>
  )
}
