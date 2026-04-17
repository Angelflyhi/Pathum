export const metadata = { title: 'Events — Pathum Youth Forum', description: 'Panels, workshops, wellness initiatives and youth-driven programs by Pathum Youth Forum.' };

const events = [
  { cat: 'Panel', title: 'Samvidhan', status: 'upcoming', desc: 'A dialogue-focused panel initiative designed to encourage reflective conversation on current topics and pressing issues. Open to all students.', date: 'Date TBA' },
  { cat: 'Wellness', title: 'Wellness Buddy', status: 'upcoming', desc: 'A student wellbeing initiative created to support balance, calm, and community. Focused on mental wellness and peer support.', date: 'Date TBA' },
  { cat: 'Workshop', title: 'MUN Skills Workshop', status: 'upcoming', desc: 'Skill-building sessions on MUN procedures, public speaking, research, writing, and diplomacy for beginners and intermediate delegates.', date: 'Date TBA' },
  { cat: 'Conference', title: 'PYF MUN 2026', status: 'upcoming', desc: 'Flagship Model United Nations conference. Five committees, two days, fully online. Open to school and college students.', date: '23 – 24 May 2026' },
  { cat: 'Free Conference', title: 'PYF International MUN 2026', status: 'upcoming', desc: 'One-day free virtual MUN conference hosted on MyMUN. Designed for beginners with expert training included.', date: '3 May 2026' },
  { cat: 'Special', title: 'Pilot Conference', status: 'completed', desc: 'The inaugural conference that launched Pathum Youth Forum. It set the tone and standards for everything that followed.', date: '2025' },
];

const cats = ['All', 'Panel', 'Wellness', 'Workshop', 'Conference', 'Free Conference', 'Special'];

export default function Events() {
  return (
    <>
      <div className="page-hero">
        <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#D4AC0D', marginBottom: '.75rem' }}>Student Initiatives</p>
        <h1>Events and Initiatives</h1>
        <p>A space for panels, wellbeing initiatives, workshops, and student-led programs.</p>
      </div>

      <section className="section">
        <div className="section-inner">
          <p className="section-sub" style={{ marginBottom: '2.5rem' }}>
            Pathum Youth Forum does not only exist for conferences. The organization supports other types of student engagement through discussions, forums, workshops, and wellness-focused initiatives.
          </p>

          {/* Category filter display */}
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {cats.map(c => (
              <span key={c} style={{ padding: '.35rem 1rem', fontSize: '.78rem', fontWeight: 600, letterSpacing: '.05em', border: '1px solid var(--gray-200)', background: c === 'All' ? 'var(--crimson)' : 'white', color: c === 'All' ? 'white' : 'var(--gray-700)', cursor: 'pointer' }}>{c}</span>
            ))}
          </div>

          <div className="card-grid card-grid-3">
            {events.map(e => (
              <div key={e.title} className="event-card">
                <div className="event-card-top">
                  <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginBottom: '.25rem' }}>{e.cat}</div>
                  <h3 style={{ color: 'white', fontFamily: 'Playfair Display, serif' }}>{e.title}</h3>
                </div>
                <div className="event-card-body">
                  <span className={`event-status ${e.status}`}>{e.status.toUpperCase()}</span>
                  <div style={{ fontSize: '.8rem', color: 'var(--gray-500)', marginBottom: '.75rem' }}> {e.date}</div>
                  <p style={{ fontSize: '.875rem', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{e.desc}</p>
                  <span className="btn btn-outline-dark btn-sm" style={{ cursor: 'default' }}>Details Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Descriptions */}
      <section className="section section-alt">
        <div className="section-inner">
          <p className="section-label">Event Categories</p>
          <h2 className="section-title">What We Organize</h2>
          <div className="section-divider" />
          <div className="card-grid card-grid-4">
            {[
              { icon: '🎙️', cat: 'Panels', desc: 'Discussion-based sessions focused on dialogue, reflection, and open exchange of ideas. Includes Samvadhal.' },
              { icon: '🌿', cat: 'Wellness Initiatives', desc: 'Student-centered initiatives focused on wellbeing, balance, and community support.' },
              { icon: '📝', cat: 'Workshops', desc: 'Skill-building sessions on MUN, speaking, research, writing, and leadership.' },
              { icon: '⭐', cat: 'Special Events', desc: 'One-time or seasonal initiatives that bring students together in unique ways.' },
            ].map(c => (
              <div key={c.cat} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>{c.icon}</div>
                <h3 className="card-title">{c.cat}</h3>
                <p className="card-body">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
