// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navLinkVariants, navShellVariants } from '../lib/framerVariants';

const navLinks = [
  {
    href: '#home',
    label: 'Home' // Source: https://dezitechengineering.com/
  },
  {
    href: '#services',
    label: 'Services' // Source: https://dezitechengineering.com/engineeringdesign.html
  },
  {
    href: '#solutions',
    label: 'Solutions' // Source: https://dezitechengineering.com/engineeringdesign.html
  },
  {
    href: '#industries',
    label: 'Industries' // Source: https://dezitechengineering.com/engineeringdesign.html
  },
  {
    href: '#about',
    label: 'About' // Source: https://dezitechengineering.com/about.html
  },
  {
    href: '#contact',
    label: 'Contact' // Source: https://dezitechengineering.com/contact.html
  }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
              <motion.span
                className="dez-nav__underline"
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
