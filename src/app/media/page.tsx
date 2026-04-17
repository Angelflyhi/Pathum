export const metadata = { title: 'Media — Pathum Youth Forum', description: 'A visual archive of Pathum Youth Forum conferences, events, and moments.' };

const testimonials = [
  { text: 'A welcoming experience for first-time delegates. Everything was structured and easy to follow.', author: 'United Kingdom, Pilot Conference' },
  { text: 'Structured enough to feel serious, but comfortable enough to learn. A great introduction to MUN.', author: 'Netherlands, Pilot Conference' },
  { text: 'Helpful guidance throughout the conference. I felt supported at every step.', author: 'Tuvalu, Pilot Conference' },
  { text: 'A positive introduction to Model United Nations. I left with more confidence than I came in with.', author: 'Portugal, Pilot Conference' },
  { text: 'A comfortable environment for first-time delegates. Well-organized and easy to navigate.', author: 'RPC- Republic Of China, Pilot Conference' },
  { text: 'A good balance of guidance and independence. Supportive enough to help beginners speak with confidence.', author: 'Japan, Pilot Conference' },
];

export default function Media() {
  return (
    <>
      <div className="page-hero">
        <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#D4AC0D', marginBottom: '.75rem' }}>Visual Archive</p>
        <h1>Media and Highlights</h1>
        <p>A visual archive of our conferences, events, and moments that reflect the growth of Pathum Youth Forum.</p>
      </div>

      {/* PHOTO GRID */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">Pilot Conference</p>
          <h2 className="section-title">Glimpses From Our Beginning</h2>
          <div className="section-divider" />
          <p className="section-sub" style={{ marginBottom: '2rem' }}>
            Our pilot conference marked the beginning of our journey and helped shape the conference standards we continue to build on.
          </p>
          <div className="media-grid">
            {[
              { label: 'Opening Ceremony', src: '/media-1.jpg' },
              { label: 'Committee Session', src: '/media-2.jpg' },
              { label: 'Guest Speaker', src: '/media-3.jpg' },
              { label: 'Delegate Moments', src: '/media-4.jpg' },
              { label: 'Team Photograph', src: '/media-5.jpg' },
              { label: 'Closing Ceremony', src: '/media-1.jpg' },
            ].map(m => (
              <div key={m.label} className="media-thumb">
                <img src={m.src} alt={m.label} />
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.25rem', color: 'var(--gray-500)', fontSize: '.85rem', fontStyle: 'italic' }}>Photos from the pilot conference will be uploaded here. Check back soon.</p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section section-alt">
        <div className="section-inner">
          <p className="section-label">Video Archive</p>
          <h2 className="section-title">Conference Moments in Motion</h2>
          <div className="section-divider" />
          <p className="section-sub" style={{ marginBottom: '2rem' }}>
            A visual glimpse into the energy, structure, and spirit of our early conferences.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {[
              { label: 'Pilot Conference Aftermovie', icon: '▶' },
              { label: 'Short Recap — Pilot Conference', icon: '▶' },
            ].map(v => (
              <div key={v.label} style={{ background: 'linear-gradient(135deg, #0F1B2D, #7B1D1D)', aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '.75rem', cursor: 'pointer', border: '1px solid rgba(255,255,255,.08)' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'white' }}>{v.icon}</div>
                <span style={{ color: 'rgba(255,255,255,.6)', fontSize: '.85rem', fontWeight: 500 }}>{v.label}</span>
                <span style={{ color: 'rgba(255,255,255,.35)', fontSize: '.75rem' }}>Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">Participant Voices</p>
          <h2 className="section-title">What Participants Say</h2>
          <div className="section-divider" />
          <div className="card-grid card-grid-3" style={{ marginTop: '1rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-text">{t.text}</p>
                <p className="testimonial-author" style={{ color: 'var(--crimson)' }}>— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="section section-dark">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <p className="section-label section-label-light">Growing Forward</p>
          <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>Active, Organized, and Continuously Growing</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
            This page will be updated with photos, aftermovies, and highlights from every PYF event. Follow us on Instagram for real-time updates.
          </p>
          <a href="https://instagram.com/pathumyouthforum" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ marginTop: '2rem', display: 'inline-flex' }}>@pathumyouthforum</a>
        </div>
      </section>
    </>
  );
}
