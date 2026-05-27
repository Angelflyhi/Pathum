import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Pathum Youth Forum — Home',
  description: 'Building confident voices through accessible diplomacy, dialogue, and meaningful participation.',
};

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Youth · Diplomacy · Growth</p>
          <h1>Pathum Youth Forum</h1>
          <p className="hero-sub">
            A youth-led organization building confident voices through accessible diplomacy, dialogue, and meaningful participation.
          </p>
          <div className="hero-buttons">
            <Link href="/events" className="btn btn-outline">View Events</Link>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHT CARDS ── */}
      <section className="section section-alt">
        <div className="section-inner">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Home to Three Pillars of Youth Growth</h2>
          <div className="section-divider" />
          <div className="card-grid card-grid-3">
            <div className="card">
              <div className="card-tag">Flagship Conference</div>
              <div className="card-divider" />
              <h3 className="card-title">PYF MUN 2026</h3>
              <p className="card-body">Our flagship online conference, designed to deliver a structured and high-quality MUN experience for delegates at all levels.</p>
              <Link href="/pyf-mun-2026" className="btn btn-outline-dark btn-sm" style={{ marginTop: '1.25rem' }}>Learn More</Link>
            </div>
            <div className="card">
              <div className="card-tag">Accessible MUN</div>
              <div className="card-divider" />
              <h3 className="card-title">Free MUN Initiatives</h3>
              <p className="card-body">Accessible conferences hosted through MyMUN to help beginners enter Model United Nations with confidence — at no cost.</p>
              <Link href="/free-mun" className="btn btn-outline-dark btn-sm" style={{ marginTop: '1.25rem' }}>Explore</Link>
            </div>
            <div className="card">
              <div className="card-tag">Youth Engagement</div>
              <div className="card-divider" />
              <h3 className="card-title">Events & Forums</h3>
              <p className="card-body">Panels, discussions, and special initiatives such as Samvidhan and Wellness Buddy — building community beyond conferences.</p>
              <Link href="/events" className="btn btn-outline-dark btn-sm" style={{ marginTop: '1.25rem' }}>View Events</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNAPSHOT ── */}
      <section className="section">
        <div className="section-inner split">
          <div>
            <p className="section-label">About Us</p>
            <h2 className="section-title">Built for Students Who Want to Speak and Lead</h2>
            <div className="section-divider" />
            <p className="section-sub" style={{ marginBottom: '1rem' }}>
              Pathum Youth Forum is a student-led organization created to make diplomacy, discussion, and leadership more accessible to young people.
            </p>
            <p className="section-sub" style={{ marginBottom: '2rem' }}>
              We believe that confidence is built through participation, and that learning should feel possible even for beginners. Our space is welcoming, structured, and growth-oriented.
            </p>
            <Link href="/about" className="btn btn-primary">Read More About Us</Link>
          </div>
          <div>
            <div style={{ background: 'linear-gradient(135deg, #0F1B2D, #7B1D1D)', borderRadius: '2px', padding: '3rem 2rem', color: 'white', textAlign: 'center' }}>
              <div className="stats-row" style={{ justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div className="stat-item">
                  <div className="stat-num" style={{ color: '#D4AC0D' }}>5</div>
                  <div className="stat-label" style={{ color: 'rgba(255,255,255,.6)' }}>Committees</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num" style={{ color: '#D4AC0D' }}>2</div>
                  <div className="stat-label" style={{ color: 'rgba(255,255,255,.6)' }}>Conference Days</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num" style={{ color: '#D4AC0D' }}>₹399</div>
                  <div className="stat-label" style={{ color: 'rgba(255,255,255,.6)' }}>Per Delegate</div>
                </div>
              </div>
              <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,.1)' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.05rem', opacity: .85, lineHeight: 1.7 }}>
                  "Young people become stronger when they are given a chance to participate, reflect, and improve."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PYF MUN SPOTLIGHT ── */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="split">
            <div>
              <p className="section-label section-label-light">Flagship Conference</p>
              <h2 className="section-title" style={{ color: 'white' }}>PYF MUN 2026</h2>
              <div className="section-divider section-divider-gold" />
              <p className="section-sub section-sub-light" style={{ marginBottom: '1rem' }}>
                Pathum Youth Forum Model United Nations 2026 is our flagship conference — an online MUN scheduled for 23rd and 24th May 2026, with a registration fee of ₹399 per delegate.
              </p>
              <p className="section-sub section-sub-light" style={{ marginBottom: '2rem' }}>
                Professional but not inaccessible. It brings together delegates interested in diplomacy, policy-making, and public speaking in a clear and supportive environment.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/pyf-mun-2026" className="btn btn-gold">View Conference Details</Link>
                <a href="https://forms.gle/mA9PM83qLguDkuYK8" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Apply as Delegate</a>
              </div>
            </div>
            <div>
              <div style={{ display: 'grid', gap: '.75rem' }}>
                {[
                  { name: 'UNGA', short: 'Securing our future through urgent collective action for global commons.' },
                  { name: 'WHO', short: 'Combating counterfeit and substandard medicines globally.' },
                  { name: 'UNHRC', short: 'Human trafficking in conflict and post-conflict humanitarian contexts.' },
                  { name: 'UNCSW', short: "Women's economic empowerment and equal workforce participation." },
                  { name: 'IP', short: 'International Press Committee — agenda to be announced.' },
                ].map(c => (
                  <div key={c.name} style={{ background: 'rgba(255,255,255,.06)', borderLeft: '3px solid #B8960C', padding: '.9rem 1.25rem', display: 'flex', gap: '.75rem', alignItems: 'center' }}>
                    <span style={{ fontWeight: 800, fontSize: '.8rem', letterSpacing: '.1em', color: '#D4AC0D', minWidth: '52px' }}>{c.name}</span>
                    <span style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.7)' }}>{c.short}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE MUN SPOTLIGHT ── */}
      <section className="section section-alt">
        <div className="section-inner split">
          <div style={{ background: 'linear-gradient(135deg, #7B1D1D, #9B2626)', borderRadius: '2px', padding: '3rem 2rem', color: 'white' }}>
            <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#D4AC0D', marginBottom: '.75rem' }}>Free Virtual Conference</p>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', marginBottom: '1rem' }}>PYF International MUN 2026</h3>
            <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.8)', lineHeight: 1.7, marginBottom: '1rem' }}>A free, one-day virtual conference hosted on MyMUN — 3rd May 2026.</p>
            <div style={{ marginTop: '1.25rem' }}>
              {['UNGA — AI Regulation in Military Domains', 'UNHRC — Climate-Induced Displacement'].map(item => (
                <div key={item} style={{ padding: '.6rem 0', borderBottom: '1px solid rgba(255,255,255,.1)', fontSize: '.85rem', color: 'rgba(255,255,255,.75)', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#D4AC0D' }}>›</span> {item}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(255,255,255,.12)', padding: '.35rem .9rem', fontSize: '.75rem', letterSpacing: '.05em', fontWeight: 600 }}>FREE EVENT</span>
              <span style={{ background: 'rgba(255,255,255,.12)', padding: '.35rem .9rem', fontSize: '.75rem', letterSpacing: '.05em', fontWeight: 600 }}>3 MAY 2026</span>
              <span style={{ background: 'rgba(255,255,255,.12)', padding: '.35rem .9rem', fontSize: '.75rem', letterSpacing: '.05em', fontWeight: 600 }}>VIRTUAL</span>
            </div>
          </div>
          <div>
            <p className="section-label">Free MUN Initiative</p>
            <h2 className="section-title">Making MUN Accessible to Everyone</h2>
            <div className="section-divider" />
            <p className="section-sub" style={{ marginBottom: '1rem' }}>
              This special edition conference is designed to introduce participants to diplomacy, negotiation, and international policymaking in a structured yet welcoming environment.
            </p>
            <p className="section-sub" style={{ marginBottom: '2rem' }}>
              Before committee proceedings begin, participants receive an expert training session covering rules of procedure, research methods, and effective participation.
            </p>
            <Link href="/free-mun" className="btn btn-primary">Explore the Free MUN</Link>
          </div>
        </div>
      </section>

      {/* ── EVENTS PREVIEW ── */}
      <section className="section">
        <div className="section-inner">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p className="section-label">Student Initiatives</p>
              <h2 className="section-title">Upcoming Events</h2>
              <div className="section-divider" />
            </div>
            <Link href="/events" className="btn btn-outline-dark">View All Events</Link>
          </div>
          <div className="card-grid card-grid-3">
            {[
              { cat: 'Panel', title: 'Samvidhan Panel', desc: 'A dialogue-focused panel initiative designed to encourage reflective conversation on current topics and pressing issues.', status: 'upcoming' },
              { cat: 'Wellness', title: 'Wellness Buddy', desc: 'A student wellbeing initiative created to support balance, calm, and community among young participants.', status: 'upcoming' },
              { cat: 'Workshop', title: 'MUN Skills Workshop', desc: 'Skill-building sessions on MUN procedures, public speaking, research, and resolution writing for beginners.', status: 'upcoming' },
            ].map(e => (
              <div key={e.title} className="event-card">
                <div className="event-card-top"><h3>{e.title}</h3></div>
                <div className="event-card-body">
                  <span className={`event-status ${e.status}`}>{e.status.toUpperCase()}</span>
                  <p style={{ fontSize: '.875rem', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '1rem' }}>{e.desc}</p>
                  <Link href="/events" className="btn btn-outline-dark btn-sm">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILOT CONFERENCE GLIMPSE ── */}
      <section className="section section-alt">
        <div className="section-inner">
          <p className="section-label">Our Journey</p>
          <h2 className="section-title">From Our Pilot Conference</h2>
          <div className="section-divider" />
          <p className="section-sub" style={{ marginBottom: '2.5rem' }}>
            Our pilot conference marked the beginning of Pathum Youth Forum&apos;s journey. It helped shape the tone, structure, and standards we carry forward.
          </p>
          <div className="media-grid" style={{ marginBottom: '2rem' }}>
            {[
              '/media-1.jpg',
              '/media-2.jpg',
              '/media-3.jpg',
              '/media-4.jpg',
              '/media-5.jpg',
              '/media-6.jpg',
            ].map((src, i) => (
              <div key={i} className="media-thumb">
                <img src={src} alt={`Conference Glimpse ${i + 1}`} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/media" className="btn btn-primary">See All Glimpses</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">Participant Voices</p>
          <h2 className="section-title">What Participants Say</h2>
          <div className="section-divider" />
          <div className="card-grid card-grid-3" style={{ marginTop: '1rem' }}>
            {[
              { text: 'A comfortable environment for first-time delegates. Everything was clearly explained and easy to follow.', author: 'United Kingdom, Pilot Conference' },
              { text: 'Well-organized and easy to navigate. I felt supported throughout the entire conference experience.', author: 'Netherlands, Pilot Conference' },
              { text: 'A good balance of guidance and independence. I left feeling more confident than when I came in.', author: 'Tuvalu, Pilot Conference' },
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-text">{t.text}</p>
                <p className="testimonial-author" style={{ color: 'var(--crimson)' }}>— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY CTA ── */}
      <section className="section section-crimson">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <p className="section-label section-label-light">PYF MUN 2026</p>
          <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>Ready to Participate?</h2>
          <p style={{ color: 'rgba(255,255,255,.8)', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: '500px' }}>
            PYF MUN 2026 — Online · 23 & 24 May 2026 · ₹399 per delegate
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/mA9PM83qLguDkuYK8" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Apply as Delegate</a>
            <a href="https://forms.gle/iiVvN9kzk3LqiVEbA" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Apply as Executive Board</a>
            <a href="https://forms.gle/i5mFY6TjP9PqTjFM6" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Apply as Secretariat</a>
          </div>
        </div>
      </section>
    </>
  );
}
