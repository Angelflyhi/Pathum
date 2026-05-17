export const metadata = { title: 'Brochures — Pathum Youth Forum', description: 'Official conference and organization brochures available for download and viewing.' };

export default function Brochures() {
  return (
    <>
      <div className="page-hero">
        <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#D4AC0D', marginBottom: '.75rem' }}>Official Documents</p>
        <h1>Brochures</h1>
        <p>Official conference and organization brochures available for download and viewing.</p>
      </div>

      <section className="section">
        <div className="section-inner">
          <p className="section-sub" style={{ marginBottom: '3rem', maxWidth: '640px' }}>
            The brochures provide a detailed overview of our conferences, organization, structure, and participation opportunities. They are designed for delegates, applicants, and anyone looking to learn more about Pathum Youth Forum.
          </p>

          <div className="card-grid card-grid-2">
            {[
              {
                title: "PYFMUN 2026 Beginner's Guide",
                sub: 'Official Conference Guide',
                desc: 'Committee information, conference details, rules of procedure, and application guidance for PYF MUN 2026.',
                badge: '23 – 24 May 2026',
                color: 'linear-gradient(135deg, #0F1B2D, #7B1D1D)',
                pdfPath: "/_Beginner's Guide - PYFMUN'26.pdf",
              },
              {
                title: 'Pathum Youth Forum Brochure',
                sub: 'Organization Overview',
                desc: 'An overview of Pathum Youth Forum — our mission, vision, values, events, and initiatives.',
                badge: '2026 Edition',
                color: 'linear-gradient(135deg, #7B1D1D, #5E1515)',
              },
            ].map(b => (
              <div key={b.title} className="brochure-card">
                <div className="brochure-preview" style={{ background: b.color }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', opacity: .35, marginBottom: '1rem' }}>📄</div>
                    <div style={{ color: 'rgba(255,255,255,.5)', fontSize: '.75rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>{b.sub}</div>
                  </div>
                </div>
                <div className="brochure-body">
                  <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: '.5rem' }}>{b.badge}</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', marginBottom: '.5rem' }}>{b.title}</h3>
                  <p style={{ fontSize: '.875rem', color: 'var(--gray-700)', marginBottom: '1.25rem', lineHeight: 1.7 }}>{b.desc}</p>
                  <div className="brochure-actions">
                    {b.pdfPath ? (
                      <>
                        <a href={b.pdfPath} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">View PDF</a>
                        <a href={b.pdfPath} download className="btn btn-outline-dark btn-sm">Download PDF</a>
                      </>
                    ) : (
                      <>
                        <span className="btn btn-primary btn-sm" style={{ cursor: 'not-allowed', opacity: .7 }}>View PDF</span>
                        <span className="btn btn-outline-dark btn-sm" style={{ cursor: 'not-allowed', opacity: .7 }}>Download PDF</span>
                      </>
                    )}
                  </div>
                  <p style={{ marginTop: '.75rem', fontSize: '.75rem', color: 'var(--gray-500)', fontStyle: 'italic' }}>
                    {b.pdfPath ? 'Available for viewing and download.' : 'Brochure will be available for download soon.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <p className="section-label">Stay Updated</p>
          <h2 className="section-title">Follow for the Latest Documents</h2>
          <div className="section-divider" style={{ margin: '1rem auto 1.5rem' }} />
          <p style={{ color: 'var(--gray-700)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Official brochures and documents are shared through our social channels and email. Follow us for updates.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://instagram.com/pathumyouthforum" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Instagram</a>
            <a href="mailto:pathumyouthforum@gmail.com" className="btn btn-outline-dark">Email Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
