import Link from 'next/link';

export const metadata = { title: 'About — Pathum Youth Forum', description: 'Learn about Pathum Youth Forum — our mission, vision, and values.' };

export default function About() {
  return (
    <>
      <div className="page-hero">
        <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#D4AC0D', marginBottom: '.75rem' }}>Who We Are</p>
        <h1>About Pathum Youth Forum</h1>
        <p>An organization built to create accessible spaces for youth dialogue and growth.</p>
      </div>

      {/* Main copy */}
      <section className="section">
        <div className="section-inner split">
          <div>
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Why Pathum Youth Forum Exists</h2>
            <div className="section-divider" />
            <p className="section-sub" style={{ marginBottom: '1rem' }}>
              Pathum Youth Forum is a youth-led organization focused on building confidence, communication, and participation among students.
            </p>
            <p className="section-sub" style={{ marginBottom: '1rem' }}>
              Many students want to speak, lead, and engage in global conversations, but hesitate because they feel inexperienced or unsure of where to start. Pathum Youth Forum was created to reduce that barrier.
            </p>
            <p className="section-sub">
              We want students to see participation as a process, not a test. The goal is not to be perfect from day one — it is to keep showing up, learning from mistakes, and growing through experience.
            </p>
          </div>
          <div style={{ background: 'var(--off-white)', padding: '3rem 2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: '.5rem' }}>Mission</p>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
                To make Model United Nations, youth forums, and student-led events more accessible, more welcoming, and more meaningful for young people.
              </p>
            </div>
            <div style={{ borderTop: '1px solid var(--gray-200)', paddingTop: '2rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: '.5rem' }}>Vision</p>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
                To build a generation of students who are confident in their voice, thoughtful in their ideas, and capable of participating in global discussions with clarity and purpose.
              </p>
            </div>
            <div style={{ borderTop: '1px solid var(--gray-200)', paddingTop: '2rem' }}>
              <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: '.75rem' }}>Values</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                {['Accessibility', 'Growth', 'Confidence', 'Responsibility', 'Dialogue', 'Learning'].map(v => (
                  <span key={v} style={{ background: 'white', border: '1px solid var(--gray-200)', padding: '.35rem .9rem', fontSize: '.8rem', fontWeight: 600, letterSpacing: '.05em' }}>{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="section section-alt">
        <div className="section-inner">
          <p className="section-label">Our Approach</p>
          <h2 className="section-title">What Makes Us Different</h2>
          <div className="section-divider" />
          <p style={{ fontSize: '1.05rem', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '640px' }}>
            Pathum Youth Forum is not built around exclusivity. It is built around inclusion.
          </p>
          <div className="card-grid card-grid-3">
            {[
              { title: 'Beginner-Friendly', desc: 'Every event is designed with first-time participants in mind. No prior experience is required to join.' },
              { title: 'Structured Guidance', desc: 'Clear formats, trained executive boards, and step-by-step support throughout every conference.' },
              { title: 'Affordable Access', desc: 'Keeping fees low and hosting free events ensures participation is not limited by cost.' },
              { title: 'Youth-Centered', desc: 'Every decision is made with the student experience at the center — not prestige or performance.' },
              { title: 'Growth-Oriented', desc: 'Mistakes are part of the process. We create a space where experimentation and improvement are encouraged.' },
              { title: 'Inclusive Environment', desc: 'Students from all backgrounds are welcomed, valued, and given space to contribute meaningfully.' },
            ].map(item => (
              <div key={item.title} className="card">
                <div className="card-divider" />
                <h3 className="card-title">{item.title}</h3>
                <p className="card-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section section-dark">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <p className="section-label section-label-light">Join Us</p>
          <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
            Confidence is not something you wait for.
          </h2>
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
            It is something you build by participating, trying, and continuing forward.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/pyf-mun-2026" className="btn btn-gold">Explore PYF MUN 2026</Link>
            <Link href="/events" className="btn btn-outline">View All Events</Link>
          </div>
        </div>
      </section>
    </>
  );
}
