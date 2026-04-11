'use client';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/pyf-mun-2026', label: 'PYF MUN 2026' },
    { href: '/free-mun', label: 'Free MUN' },
    { href: '/events', label: 'Events' },
    { href: '/media', label: 'Media' },
    { href: '/brochures', label: 'Brochures' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <Image src="/logo.png" alt="Pathum Youth Forum" width={120} height={60} priority style={{ objectFit: 'contain', borderRadius: '4px' }} />
        </Link>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`${pathname === l.href ? 'active' : ''}${l.href === '/pyf-mun-2026' ? ' nav-cta' : ''}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/logo.png" alt="Pathum Youth Forum" width={140} height={70} style={{ objectFit: 'contain', borderRadius: '4px' }} />
            <p style={{ marginTop: '1rem' }}>Building confident voices through accessible diplomacy, dialogue, and meaningful participation.</p>
            <div className="social-links" style={{ marginTop: '1.25rem' }}>
              <a href="https://instagram.com/pathumyouthforum" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">IG</a>
              <a href="mailto:pathumyouthforum@gmail.com" className="social-link" aria-label="Email">✉</a>
              <a href="#" className="social-link" aria-label="LinkedIn">in</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Organization</h4>
            <ul>
              <li><Link href="/about">About PYF</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/media">Media</Link></li>
              <li><Link href="/brochures">Brochures</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>PYF MUN 2026</h4>
            <ul>
              <li><Link href="/pyf-mun-2026">Conference Overview</Link></li>
              <li><Link href="/pyf-mun-2026#committees">Committees</Link></li>
              <li><a href="https://forms.gle/mA9PM83qLguDkuYK8" target="_blank" rel="noopener noreferrer">Apply as Delegate</a></li>
              <li><a href="https://forms.gle/i5mFY6TjP9PqTjFM6" target="_blank" rel="noopener noreferrer">Apply as Executive Board</a></li>
              <li><a href="https://forms.gle/iiVvN9kzk3LqiVEbA" target="_blank" rel="noopener noreferrer">Apply as Secretariat</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:pathumyouthforum@gmail.com">pathumyouthforum@gmail.com</a></li>
              <li><a href="https://instagram.com/pathumyouthforum" target="_blank" rel="noopener noreferrer">@pathumyouthforum</a></li>
              <li><Link href="/contact">Contact Page</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Pathum Youth Forum. All rights reserved.</p>
          <p style={{ color: 'rgba(255,255,255,.35)', fontSize: '.75rem' }}>All official updates are shared through our official communication channels.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pathum Youth Forum — Building confident voices through accessible diplomacy, dialogue, and meaningful participation. Home of PYF MUN 2026." />
        <title>Pathum Youth Forum</title>
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
