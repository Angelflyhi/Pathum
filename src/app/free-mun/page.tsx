export const metadata = { title: 'Free MUN — Pathum Youth Forum', description: 'A free, one-day virtual MUN conference hosted on MyMUN — 3rd May 2026.' };

export default function FreeMUN() {
  return (
    <>
      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg, #7B1D1D 0%, #5E1515 100%)', padding: '8rem 2rem 5rem', marginTop: 'var(--nav-h)', color: 'white', textAlign: 'center' }}>
        <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#D4AC0D', marginBottom: '1rem' }}>Free Virtual Conference</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', marginBottom: '1.25rem' }}>Pathum Youth Forum International<br />Model United Nations 2026</h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,.75)', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          A free, one-day virtual conference hosted on MyMUN to make MUN experience accessible to students from all backgrounds.
        </p>
        <div style={{ display: 'inline-flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
          {['3 May 2026', 'Free Entry', 'Virtual via MyMUN'].map(tag => (
            <span key={tag} style={{ background: 'rgba(255,255,255,.12)', padding: '.4rem 1rem', fontSize: '.8rem', fontWeight: 600, letterSpacing: '.06em' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="section">
        <div className="section-inner split">
          <div>
            <p className="section-label">About the Conference</p>
            <h2 className="section-title">Making MUN Free and Accessible</h2>
            <div className="section-divider" />
            <p className="section-sub" style={{ marginBottom: '1rem' }}>
              Pathum Youth Forum proudly presents its International Model United Nations Conference, to be held on 3rd May 2026.
            </p>
            <p className="section-sub" style={{ marginBottom: '1rem' }}>
              This special edition is being conducted as a free, one-day virtual conference with the aim of making quality Model United Nations participation accessible to students from all backgrounds.
            </p>
            <p className="section-sub">
              Before committee proceedings begin, participants will receive an expert training session to help them understand rules of procedure, research methods, and effective participation.
            </p>
          </div>
          <div style={{ background: 'var(--off-white)', padding: '2.5rem' }}>
            <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--crimson)', marginBottom: '1.25rem' }}>Conference Details</p>
            {[
              { label: 'Date', val: '3rd May 2026' },
              { label: 'Mode', val: 'Virtual — MyMUN' },
              { label: 'Entry Fee', val: 'Free' },
              { label: 'Communication', val: 'WhatsApp (post-registration)' },
              { label: 'Updates', val: '@pathumyouthforum (Instagram)' },
              { label: 'Queries', val: 'pathumyouthforum@gmail.com' },
            ].map(d => (
              <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '.75rem 0', borderBottom: '1px solid var(--gray-200)', fontSize: '.9rem' }}>
                <span style={{ color: 'var(--gray-700)' }}>{d.label}</span>
                <span style={{ fontWeight: 600 }}>{d.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITTEES */}
      <section className="section section-alt">
        <div className="section-inner">
          <p className="section-label">Committees</p>
          <h2 className="section-title">Two Committees. Two Agendas.</h2>
          <div className="section-divider" />
          <div style={{ display: 'grid', gap: '1.25rem', marginTop: '1rem' }}>
            {[
              {
                name: 'UNGA',
                agenda: 'Establishing international norms for the regulation of artificial intelligence in military and strategic domains',
                desc: 'Delegates will explore the growing intersection of AI technology and national security, examining how the international community can develop binding frameworks to prevent misuse of AI in warfare and strategic operations.',
              },
              {
                name: 'UNHRC',
                agenda: 'Examining climate-induced displacement and the recognition of climate refugees under international human rights law',
                desc: 'This committee will focus on the increasingly critical issue of forced migration caused by climate change, exploring legal recognition and protections for climate refugees under existing and developing international frameworks.',
              },
            ].map(c => (
              <div key={c.name} className="committee-card">
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: '80px' }}>
                    <div className="committee-name">{c.name}</div>
                  </div>
                  <div>
                    <div className="committee-agenda">{c.agenda}</div>
                    <div className="committee-desc">{c.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <div className="section-inner split">
          <div>
            <p className="section-label">Conference Experience</p>
            <h2 className="section-title">What to Expect</h2>
            <div className="section-divider" />
            <p className="section-sub" style={{ marginBottom: '1.5rem' }}>Delegates will engage in a full range of diplomatic procedures in a guided, welcoming environment.</p>
            {['Formal debate', 'Moderated caucuses', 'Unmoderated caucuses', 'Working paper drafting', 'Collaborative resolution writing'].map(item => (
              <div key={item} style={{ display: 'flex', gap: '.75rem', alignItems: 'center', padding: '.6rem 0', borderBottom: '1px solid var(--gray-200)', fontSize: '.9rem', color: 'var(--gray-700)' }}>
                <span style={{ color: 'var(--crimson)', fontWeight: 700 }}>›</span> {item}
              </div>
            ))}
          </div>
          <div>
            <p className="section-label">What Delegates Will Gain</p>
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Skills & Recognition</h2>
            <div className="section-divider" />
            {[
              'Practical experience in diplomacy and international negotiation',
              'Public speaking and confidence development',
              'Research and policy-analysis skills',
              'Exposure to real-world global affairs',
              'Guidance from trained Executive Board members',
              'Certificates and conference recognition',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '.75rem', alignItems: 'center', padding: '.6rem 0', borderBottom: '1px solid var(--gray-200)', fontSize: '.9rem', color: 'var(--gray-700)' }}>
                <span style={{ color: 'var(--crimson)', fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section section-crimson">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>Join Us — It&apos;s Free</h2>
          <p style={{ color: 'rgba(255,255,255,.8)', fontSize: '1.05rem', marginBottom: '.5rem' }}>
            We warmly invite students interested in global affairs, debate, and leadership to join us for a meaningful diplomatic simulation.
          </p>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.875rem', marginBottom: '2rem' }}>All official communication and updates will be conducted via WhatsApp after registration and allotment.</p>
          <a href="https://instagram.com/pathumyouthforum" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            Follow for Registration Details
          </a>
        </div>
      </section>
    </>
  );
}
