import Link from 'next/link';

export const metadata = { title: 'PYF MUN 2026 — Pathum Youth Forum', description: 'Pathum Youth Forum Model United Nations 2026 — Online, 23 & 24 May 2026. ₹399 per delegate.' };

const committees = [
  {
    name: 'UNGA',
    fullName: 'United Nations General Assembly',
    agenda: 'Securing our future by initiating urgent collective action for global commons and inclusive multilateralism',
    desc: 'The UNGA committee will focus on broad international cooperation and urgent policy action around global challenges that require collective thinking and shared responsibility.',
  },
  {
    name: 'WHO',
    fullName: 'World Health Organization',
    agenda: 'Formulating a global framework to combat the circulation of counterfeit and substandard medicines',
    desc: 'This committee will explore public health, regulatory action, and coordinated international responses to unsafe pharmaceutical circulation.',
  },
  {
    name: 'UNHRC',
    fullName: 'UN Human Rights Council',
    agenda: 'Addressing human trafficking in conflict and post-conflict humanitarian contexts',
    desc: 'This committee will examine how human trafficking operates in fragile regions and how international human rights systems can respond more effectively.',
  },
  {
    name: 'UNCSW',
    fullName: 'UN Commission on the Status of Women',
    agenda: "Promoting women's economic empowerment and equal participation in the workforce",
    desc: 'This committee will focus on gender equality, labor participation, and the structural barriers that continue to affect women\'s economic inclusion.',
  },
  {
    name: 'IP',
    fullName: 'International Press',
    agenda: 'Real-Time Media Coverage And Creative Journalism',
    desc: 'The International Press committee will be covering all committees throughout the conference, capturing debate and key moments.',
  },
];

const guestSpeakers = [
  {
    name: 'Mr. Paramjeet Jaglan',
    image: '/paramjeetjaglan.jpg',
    bio: 'Rooted in the belief that leadership begins with action, Paramjeet Jaglan brings together science, diplomacy, and youth advocacy to create impact beyond conversations. Through global engagement and evidence-driven perspectives, he champions a future where innovation, inclusion, and young voices shape decisions that matter.',
    roles: ['UN Youth Liaison', 'Global Governance Advocate', 'Food Systems & Sustainability'],
    linkedin: 'https://www.linkedin.com/in/paramjeet-jaglan306067284/',
    instagram: 'https://www.instagram.com/paramjeet.jaglan/'
  },
  {
    name: 'Ms. Harshjeet Kaur',
    image: '/harshjeetkaur.jpg',
    bio: 'A passionate English teacher and an exceptional orator, Ms. Harshjeet Kaur brings with her a remarkable command over the English language and an inspiring presence on stage. Her eloquence, depth of knowledge, and years of nurturing young minds have made her a guiding light for students passionate about communication, leadership, and global affairs. Driven by one belief: that meaningful change happens when knowledge inspires action and young voices are given space to lead.',
    roles: ['Educator', 'Orator', 'Youth Mentor'],
    linkedin: '#',
    instagram: '#'
  }
];

export default function PYFMUN2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Pathum Youth Forum Model United Nations 2026",
            "startDate": "2026-05-23",
            "endDate": "2026-05-24",
            "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "VirtualLocation",
              "url": "https://pathumyouthforum.com"
            },
            "performer": guestSpeakers.map(s => ({
              "@type": "Person",
              "name": s.name
            })),
            "offers": {
              "@type": "Offer",
              "price": "399",
              "priceCurrency": "INR"
            }
          })
        }}
      />
      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg, #0F1B2D 0%, #2d0808 60%, #7B1D1D 100%)', padding: '8rem 2rem 5rem', marginTop: 'var(--nav-h)', color: 'white', textAlign: 'center' }}>
        <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#D4AC0D', marginBottom: '1rem' }}>Flagship Conference</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.25rem' }}>Pathum Youth Forum<br />Model United Nations 2026</h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,.75)', marginBottom: '2rem' }}>23rd & 24th May 2026 &nbsp;·&nbsp; Online &nbsp;·&nbsp; ₹399 per delegate</p>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.65)', maxWidth: '580px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          A structured, high-quality MUN experience designed for students who want to learn, speak, and participate with confidence.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://forms.gle/mA9PM83qLguDkuYK8" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Apply as Delegate</a>
          <a href="https://forms.gle/iiVvN9kzk3LqiVEbA" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Apply as Executive Board</a>
          <a href="https://forms.gle/i5mFY6TjP9PqTjFM6" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Apply as Secretariat</a>
        </div>
      </div>

      {/* DETAILS STRIP */}
      <div style={{ background: 'var(--crimson)', padding: '1.5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Mode', val: 'Online' },
            { label: 'Dates', val: '23 – 24 May 2026' },
            { label: 'Registration Fee', val: '₹399 / Delegate' },
            { label: 'Format', val: 'Model United Nations' },
            { label: 'Audience', val: 'School & College Students' },
          ].map(d => (
            <div key={d.label} style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '.7rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginBottom: '.25rem' }}>{d.label}</div>
              <div style={{ fontWeight: 700, fontSize: '.95rem' }}>{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="section">
        <div className="section-inner split">
          <div>
            <p className="section-label">About the Conference</p>
            <h2 className="section-title">Why Attend PYF MUN 2026?</h2>
            <div className="section-divider" />
            <p className="section-sub" style={{ marginBottom: '1rem' }}>
              PYF MUN 2026 is the main conference hosted by Pathum Youth Forum — an online Model United Nations designed to offer delegates a professional and engaging diplomatic simulation.
            </p>
            <p className="section-sub">
              The conference will bring together students interested in public speaking, policy analysis, debate, and international affairs, while maintaining a serious and well-organized format accessible to all experience levels.
            </p>
          </div>
          <div>
            <p className="section-label">Delegates Will Gain</p>
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Skills & Recognition</h2>
            <div className="section-divider" />
            {[
              'Better public speaking confidence',
              'Stronger research and policy understanding',
              'Experience in formal debate procedures',
              'Exposure to diplomatic thinking',
              'Better understanding of global affairs',
              'Conference recognition and certificates',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '.75rem', alignItems: 'center', padding: '.6rem 0', borderBottom: '1px solid var(--gray-200)', fontSize: '.9rem', color: 'var(--gray-700)' }}>
                <span style={{ color: 'var(--crimson)', fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUEST SPEAKERS */}
      <section className="section" id="guest-speakers">
        <div className="section-inner">
          <p className="section-label">Voices of Inspiration</p>
          <h2 className="section-title">Guest Speakers</h2>
          <div className="section-divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2.5rem' }}>
            {guestSpeakers.map(speaker => (
              <div key={speaker.name} style={{ background: 'var(--gray-50)', padding: '2rem', borderRadius: '4px', textAlign: 'center' }}>
                <div style={{ width: '120px', height: '120px', margin: '0 auto 1.5rem', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--crimson)' }}>
                  <img src={speaker.image} alt={speaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontFamily: 'Playfair Display, serif', marginBottom: '.5rem', color: 'var(--navy)' }}>{speaker.name}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                  {speaker.roles.map(r => (
                    <span key={r} style={{ fontSize: '.75rem', background: 'var(--gray-200)', padding: '.2rem .6rem', borderRadius: '2px', color: 'var(--gray-800)' }}>{r}</span>
                  ))}
                </div>
                <p style={{ fontSize: '.9rem', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '1.5rem', textAlign: 'justify' }}>
                  {speaker.bio}
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  {speaker.linkedin !== '#' && <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--navy)', fontWeight: 600 }}>LinkedIn</a>}
                  {speaker.instagram !== '#' && <a href={speaker.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--crimson)', fontWeight: 600 }}>Instagram</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITTEES */}
      <section className="section section-alt" id="committees">
        <div className="section-inner">
          <p className="section-label">Committees</p>
          <h2 className="section-title">Five Committees. Five Agendas.</h2>
          <div className="section-divider" />
          <p className="section-sub" style={{ marginBottom: '2.5rem' }}>Each committee is designed to challenge delegates to think critically, collaborate effectively, and draft meaningful resolutions.</p>
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {committees.map(c => (
              <div key={c.name} className="committee-card" style={c.tba ? { opacity: .8, borderLeftColor: '#9CA3AF' } : {}}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div style={{ minWidth: '90px' }}>
                    <div className="committee-name">{c.name}</div>
                    <div style={{ fontSize: '.7rem', color: 'var(--gray-500)' }}>{c.fullName}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="committee-agenda">{c.agenda}</div>
                    <div className="committee-desc">{c.desc}</div>
                    {c.tba && <span style={{ display: 'inline-block', marginTop: '.5rem', fontSize: '.7rem', padding: '.25rem .75rem', background: 'var(--gray-100)', color: 'var(--gray-700)', fontWeight: 700, letterSpacing: '.08em' }}>AGENDA TBA</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFERENCE PROCESS */}
      <section className="section section-dark">
        <div className="section-inner">
          <p className="section-label section-label-light">How It Works</p>
          <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>Conference Structure</h2>
          <div className="section-divider section-divider-gold" />
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '720px', marginBottom: '2.5rem' }}>
            Delegates will be supported through a structured conference flow that includes opening procedures, moderated and unmoderated caucuses, working paper development, and resolution drafting. Our goal is to ensure that every participant understands how to engage meaningfully, regardless of previous experience.
          </p>
          <div className="card-grid card-grid-4">
            {['Opening Ceremony', 'Committee Sessions', 'Caucuses & Working Papers', 'Resolution & Closing'].map((step, i) => (
              <div key={step} style={{ background: 'rgba(255,255,255,.06)', borderTop: '2px solid #D4AC0D', padding: '1.5rem 1.25rem' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 800, color: 'rgba(212,172,13,.3)', marginBottom: '.5rem' }}>0{i + 1}</div>
                <div style={{ fontWeight: 600, color: 'white', fontSize: '.95rem' }}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section className="section" id="apply">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">Applications Open</p>
            <h2 className="section-title">Apply to Participate</h2>
            <div className="section-divider" style={{ margin: '1rem auto 0' }} />
          </div>
          <div className="card-grid card-grid-3">
            {[
              { role: 'Delegate', desc: 'Participate in committee debate and represent an assigned country or role.', link: 'https://forms.gle/mA9PM83qLguDkuYK8', icon: '🎤' },
              { role: 'Executive Board', desc: 'Lead debate, guide delegates, and help ensure strong committee flow.', link: 'https://forms.gle/iiVvN9kzk3LqiVEbA', icon: '⚖️' },
              { role: 'Secretariat', desc: 'Support the planning, communication, and execution of the conference.', link: 'https://forms.gle/i5mFY6TjP9PqTjFM6', icon: '📋' },
            ].map(r => (
              <div key={r.role} className="apply-card">
                <div className="apply-card-icon">{r.icon}</div>
                <h3 className="apply-card h3" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '.75rem' }}>{r.role}</h3>
                <p style={{ fontSize: '.9rem', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '1.75rem' }}>{r.desc}</p>
                <a href={r.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex' }}>Apply as {r.role}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BROCHURE */}
      <section className="section section-alt">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <p className="section-label">Official Documents</p>
          <h2 className="section-title">Brochures & Guides</h2>
          <div className="section-divider" style={{ margin: '1rem auto 1.5rem' }} />
          <p style={{ color: 'var(--gray-700)', fontSize: '1rem', marginBottom: '2rem', maxWidth: '540px', margin: '0 auto 2rem' }}>
            Explore the official PYF MUN 2026 documents. The <strong>Beginner's Guide</strong> has been recently uploaded and is now available for viewing and downloading!
          </p>
          <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--crimson))', height: '240px', maxWidth: '320px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '5rem', opacity: .4 }}>📄</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/brochures" className="btn btn-primary">View Brochures</Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Have Questions?</h2>
          <div className="section-divider" style={{ margin: '1rem auto 1.5rem' }} />
          <p style={{ color: 'var(--gray-700)', marginBottom: '1.5rem' }}>
            Reach us at <a href="mailto:pathumyouthforum@gmail.com" style={{ color: 'var(--crimson)', fontWeight: 600 }}>pathumyouthforum@gmail.com</a> or{' '}
            <a href="https://instagram.com/pathumyouthforum" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--crimson)', fontWeight: 600 }}>@pathumyouthforum</a> on Instagram.
          </p>
          <p style={{ color: 'var(--gray-500)', fontSize: '.875rem' }}>Official communication and updates will be shared through designated channels after registration and allocation.</p>
        </div>
      </section>
    </>
  );
}
