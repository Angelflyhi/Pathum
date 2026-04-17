import Link from 'next/link';

export const metadata = { title: 'Contact — Pathum Youth Forum', description: 'Get in touch with Pathum Youth Forum for queries, collaborations, and official communication.' };

export default function Contact() {
  return (
    <>
      <div className="page-hero">
        <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#D4AC0D', marginBottom: '.75rem' }}>Reach Out</p>
        <h1>Contact Us</h1>
        <p>For queries, collaborations, and official communication.</p>
      </div>

      <section className="section">
        <div className="section-inner split">
          <div>
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title">We&apos;re Here to Help</h2>
            <div className="section-divider" />
            <p className="section-sub" style={{ marginBottom: '2rem' }}>
              Pathum Youth Forum welcomes communication from students, participants, and collaborators. For conference updates, registration queries, and general information, use the channels below.
            </p>

            <div className="contact-item">
              <div className="contact-icon">✉</div>
              <div className="contact-info">
                <h4>Email</h4>
                <a href="mailto:pathumyouthforum@gmail.com">pathumyouthforum@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon" style={{ fontSize: '.85rem', fontWeight: 800 }}>IG</div>
              <div className="contact-info">
                <h4>Instagram</h4>
                <a href="https://instagram.com/pathumyouthforum" target="_blank" rel="noopener noreferrer">@pathumyouthforum</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon" style={{ fontSize: '.85rem', fontWeight: 800 }}>in</div>
              <div className="contact-info">
                <h4>LinkedIn</h4>
                 <a href="https://www.linkedin.com/company/pathum-youth-forum" target="_blank" rel="noopener noreferrer">Pathum Youth Forum Linkedin Page</a>
              </div>
            </div>

            <p style={{ marginTop: '2rem', fontSize: '.875rem', color: 'var(--gray-500)', fontStyle: 'italic' }}>
              We aim to respond as clearly and promptly as possible through our official channels.
            </p>
          </div>

          <div>
            <div style={{ background: 'var(--off-white)', padding: '2.5rem' }}>
              <p className="section-label">Quick Links</p>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', marginBottom: '.5rem', marginTop: '.25rem' }}>Frequently Asked Questions</h3>
              <div style={{ width: '40px', height: '3px', background: 'var(--crimson)', marginBottom: '1.5rem' }} />
              {[
                { q: 'How do I register for PYF MUN 2026?', a: 'Click "Apply as Delegate" on the PYF MUN 2026 page to access the registration form.' },
                { q: 'Is the Free MUN really free?', a: 'Yes — the Pathum Youth Forum International MUN 2026 is completely free of charge for all participants.' },
                { q: 'How will I receive updates after registration?', a: 'Official updates are shared via WhatsApp and our Instagram page after registration and allocation.' },
                { q: 'Can beginners participate?', a: 'Absolutely. All our events are beginner-friendly and include guided support throughout.' },
              ].map((faq, i) => (
                <div key={i} style={{ padding: '1rem 0', borderBottom: '1px solid var(--gray-200)' }}>
                  <p style={{ fontWeight: 600, fontSize: '.9rem', marginBottom: '.4rem' }}>{faq.q}</p>
                  <p style={{ fontSize: '.875rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', background: 'var(--crimson)', padding: '2rem', color: 'white' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', marginBottom: '.75rem' }}>Apply to PYF MUN 2026</h3>
              <p style={{ fontSize: '.875rem', color: 'rgba(255,255,255,.75)', marginBottom: '1.5rem' }}>
                Ready to participate? Choose your application path below.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                <a href="https://forms.gle/mA9PM83qLguDkuYK8" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm">Apply as Delegate</a>
                <a href="https://forms.gle/iiVvN9kzk3LqiVEbA" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Apply as Executive Board</a>
                <a href="https://forms.gle/i5mFY6TjP9PqTjFM6" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Apply as Secretariat</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find us section */}
      <section className="section section-dark">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>Stay Connected</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', marginBottom: '2rem' }}>All official updates are shared through our official communication channels.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://instagram.com/pathumyouthforum" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Instagram</a>
            <a href="mailto:pathumyouthforum@gmail.com" className="btn btn-outline">Email</a>
            <Link href="/pyf-mun-2026" className="btn btn-gold">View PYF MUN 2026</Link>
          </div>
        </div>
      </section>
    </>
  );
}
