// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navLinkVariants, navShellVariants } from '../lib/framerVariants';

const navLinks = [
  { href: '#home', label: 'Home' }, /* Source: https://dezitechengineering.com/ */
  { href: '#services', label: 'Services' }, /* Source: https://dezitechengineering.com/engineeringdesign.html */
  { href: '#solutions', label: 'Solutions' }, /* Source: https://dezitechengineering.com/engineeringdesign.html */
  { href: '#industries', label: 'Industries' }, /* Source: https://dezitechengineering.com/engineeringdesign.html */
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' }, /* Source: https://dezitechengineering.com/about.html */
  { href: '#team', label: 'Team' },
  { href: '#careers', label: 'Careers' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#r-d', label: 'R&D' },
  { href: '#manufacturing', label: 'Manufacturing' },
  { href: '#iot', label: 'IoT' },
  { href: '#atlas-edge', label: 'AtlasEdge' },
  { href: '#atlas-predict', label: 'AtlasPredict' },
  { href: '#atlas-sense', label: 'AtlasSense' },
  { href: '#atlas-view', label: 'AtlasView' },
  { href: '#resources', label: 'Resources' },
  { href: '#blog', label: 'Blog' },
  { href: '#events', label: 'Events' },
  { href: '#investors', label: 'Investors' },
  { href: '#partners', label: 'Partners' },
  { href: '#sustainability', label: 'Sustainability' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#news', label: 'News' },
  { href: '#support', label: 'Support' },
  { href: '#documentation', label: 'Documentation' },
  { href: '#api', label: 'API' },
  { href: '#legal', label: 'Legal' },
  { href: '#contact', label: 'Contact' } /* Source: https://dezitechengineering.com/contact.html */
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
    >
      <div className="dez-nav__container">
        <a href="#home" className="dez-nav__logo" aria-label="Dezitech Engineering home">
          Dezitech Engineering {/* Source: https://dezitechengineering.com/ */}
        </a>
        <nav className="dez-nav__menu" aria-label="Main">
          {navLinks.map((link) => (
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
    </motion.header>
  );
};

export default Navbar;
