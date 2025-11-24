'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navLinkVariants, navShellVariants } from '@/lib/framerVariants';

/* Primary navigation links - centered layout inspired by Meridian (trymeridian.com) */
const primaryNavLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#industries', label: 'Industries' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

/* Extended resource links */
const resourceNavLinks = [
  { href: '#r-d', label: 'R&D' },
  { href: '#manufacturing', label: 'Manufacturing' },
  { href: '#iot', label: 'IoT' },
  { href: '#resources', label: 'Resources' },
  { href: '#blog', label: 'Blog' },
  { href: '#partners', label: 'Partners' },
  { href: '#sustainability', label: 'Sustainability' },
  { href: '#careers', label: 'Careers' },
  { href: '#case-studies', label: 'Case Studies' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showResources, setShowResources] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 24);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`dez-nav ${scrolled ? 'dez-nav--scrolled' : ''}`}
      aria-label="Main Navigation"
      initial="hidden"
      animate="visible"
      variants={navShellVariants}
      style={{
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        transition: 'backdrop-filter 0.3s ease, background-color 0.3s ease',
      }}
    >
      <div className="dez-nav__container">
        <a href="#home" className="dez-nav__logo" aria-label="Dezitech Engineering home">
          Dezitech Engineering
        </a>
        <nav className="dez-nav__menu" aria-label="Main">
          {primaryNavLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="dez-nav__link"
              variants={navLinkVariants}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              whileTap="tap"
            >
              <span className="dez-nav__link-text">{link.label}</span>
              <span className="dez-nav__underline" aria-hidden="true" />
            </motion.a>
          ))}
          <div
            className="dez-nav__resources"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
          >
            <button
              className="dez-nav__link dez-nav__link--resources"
              aria-expanded={showResources}
              aria-haspopup="true"
            >
              <span className="dez-nav__link-text">More</span>
              <span className="dez-nav__underline" aria-hidden="true" />
            </button>
            {showResources && (
              <motion.div
                className="dez-nav__dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {resourceNavLinks.map((link) => (
                  <a key={link.href} href={link.href} className="dez-nav__dropdown-link">
                    {link.label}
                  </a>
                ))}
              </motion.div>
            )}
          </div>
        </nav>
        <a
          href="#contact"
          className="dez-nav__contact-cta"
          aria-label="Contact Dezitech Engineering"
        >
          Contact
        </a>
        <button
          className="dez-nav__mobile-toggle"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <motion.nav
          className="dez-nav__mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {[...primaryNavLinks, ...resourceNavLinks].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="dez-nav__mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}

