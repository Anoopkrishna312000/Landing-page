import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const data = await payload.find({
    collection: 'landing',
  })

  const page = data.docs[0]

  if (!page) {
    return <h1>No content found. Add data in admin panel.</h1>
  }

  return (
   
  <main style={{ fontFamily: 'Arial, sans-serif' }}>
    
    {/* HERO */}
    <section style={{
      padding: '80px 20px',
      textAlign: 'center',
      background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '42px', marginBottom: '20px' }}>
        {page.hero?.heading}
      </h1>
      <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 20px' }}>
        {page.hero?.subheading}
      </p>
      <button style={{
        padding: '12px 24px',
        background: 'white',
        color: '#4f46e5',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        {page.hero?.buttonText}
      </button>
    </section>

    {/* FEATURES */}
    <section style={{
      padding: '60px 20px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>
        Features
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {page.features?.map((f: any, i: number) => (
          <div key={i} style={{
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            background: '#fff'
          }}>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section style={{
      padding: '60px 20px',
      textAlign: 'center',
      background: '#111827',
      color: 'white'
    }}>
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>
        {page.cta?.text}
      </h2>
      <button style={{
        padding: '12px 24px',
        background: '#6366f1',
        border: 'none',
        borderRadius: '8px',
        color: 'white',
        cursor: 'pointer'
      }}>
        {page.cta?.buttonText}
      </button>
    </section>

  </main>
)
  
}