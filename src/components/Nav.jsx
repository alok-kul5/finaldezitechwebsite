import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinkVariants, navMenuItem, navMenuVariants, navShellVariants } from '../lib/framerVariants';

const navLinks = [
  {
    href: '#home',
    label: (
      <>
        Home {/* Taken from https://dezitechengineering.com/ */}
      </>
    )
  },
  {
    href: '#services',
    label: (
      <>
        Services {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    )
  },
  {
    href: '#solutions',
    label: (
      <>
        Solutions {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    )
  },
  {
    href: '#industries',
    label: (
      <>
        Industries {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    )
  },
  {
    href: '#about',
    label: (
      <>
        About {/* Taken from https://dezitechengineering.com/about.html */}
      </>
    )
  },
  {
    href: '#contact',
    label: (
      <>
        Contact {/* Taken from https://dezitechengineering.com/contact.html */}
      </>
    )
  }
];

const Nav = ({ accentMode = 'primary' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const close = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menuOpen]);

  return (
    <motion.header
      className={`dz-nav ${scrolled ? 'dz-nav--scrolled' : ''}`}
      aria-label="Primary"
      data-accent={accentMode}
      initial="hidden"
      animate="visible"
      variants={navShellVariants}
    >
      <div className="dz-nav__inner">
        <a href="#home" className="dz-nav__brand" aria-label="Dezitech Engineering home">
          Dezitech Engineering {/* Taken from https://dezitechengineering.com/ */}
        </a>
        <nav className="dz-nav__links" aria-label="Global">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="dz-nav__link"
              variants={navLinkVariants}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              whileTap="tap"
            >
              <span className="dz-nav__label">{link.label}</span>
              <span className="dz-nav__underline" aria-hidden="true" />
            </motion.a>
          ))}
        </nav>
        <button
          type="button"
          className="dz-nav__menu-trigger"
          aria-expanded={menuOpen}
          aria-controls="nav-flyout"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="dz-nav__menu-dot" aria-hidden="true" />
          <span className="dz-nav__menu-dot" aria-hidden="true" />
          <span className="dz-nav__menu-label">Menu {/* UX POLISH: generated */}</span>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="nav-flyout"
            className="dz-nav__flyout"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={navMenuVariants}
          >
            {navLinks.map((link) => (
              <motion.a
                key={`flyout-${link.href}`}
                href={link.href}
                className="dz-nav__flyout-link"
                variants={navMenuItem}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Nav built to match Meridian/Vantor feel; no contact CTA; source content from Dezitech pages when applicable */}
    </motion.header>
  );
};

export default Nav;
