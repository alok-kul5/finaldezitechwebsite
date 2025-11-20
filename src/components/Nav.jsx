import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { linkHoverVariants, navDrawerVariants, navVariants } from '../lib/framerVariants';

const navLinks = [
  {
    href: '#home',
    label: 'Home',
    element: (
      <>
        Home {/* Taken from https://dezitechengineering.com/ */}
      </>
    )
  },
  {
    href: '#services',
    label: 'Services',
    element: (
      <>
        Services {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    )
  },
  {
    href: '#solutions',
    label: 'Solutions',
    element: (
      <>
        Solutions {/* Taken from https://dezitechengineering.com/ */}
      </>
    )
  },
  {
    href: '#industries',
    label: 'Industries',
    element: (
      <>
        Industries {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    )
  }
];

const extendedNavLinks = [
  ...navLinks,
  {
    href: '#about',
    label: 'About',
    element: (
      <>
        About {/* Taken from https://dezitechengineering.com/about.html */}
      </>
    )
  },
  {
    href: '#contact',
    label: 'Contact',
    element: (
      <>
        Contact {/* Taken from https://dezitechengineering.com/contact.html */}
      </>
    )
  }
];

const Nav = ({ accentMode = 'primary' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.setProperty('overflow', 'hidden');
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [open]);

  return (
    <motion.header
      id="dezitech-nav"
      aria-label="Main"
      className={`nav-shell ${scrolled ? 'nav-shell--scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="nav-shell__inner">
        <a href="#home" className="nav-shell__brand">
          Dezitech Engineering {/* Taken from https://dezitechengineering.com/ */}
        </a>
        <nav className="nav-shell__links" aria-label="Primary">
          {extendedNavLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="nav-link"
              variants={linkHoverVariants}
              initial="rest"
              whileHover="hover"
              whileFocus="hover"
              whileTap="tap"
            >
              <span>{link.element}</span>
              <span className="nav-link__underline" aria-hidden="true" />
            </motion.a>
          ))}
        </nav>
        <div className="nav-shell__cta">
          <a
            href="mailto:info@dezitechengineering.com"
            className="contact-pill"
            data-accent={accentMode}
          >
            Contact Sales {/* Taken from https://dezitechengineering.com/contact.html */}
          </a>
        </div>
        <button
          type="button"
          aria-controls="dezitech-menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="nav-shell__burger"
        >
          <span className="sr-only">Open navigation {/* UX POLISH: generated — short */}</span>
          <span />
          <span />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="nav-shell__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              id="dezitech-menu"
              className="nav-drawer"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={navDrawerVariants}
            >
              <div className="nav-drawer__header">
                <span>Menu</span>
                <button type="button" onClick={() => setOpen(false)} className="nav-drawer__close">
                  <span className="sr-only">Close menu {/* UX POLISH: generated — short */}</span>
                  <span />
                  <span />
                </button>
              </div>
              <div className="nav-drawer__links">
                {extendedNavLinks.map((link) => (
                  <a
                    key={`drawer-${link.label}`}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.element}
                  </a>
                ))}
              </div>
              <a
                href="mailto:info@dezitechengineering.com"
                className="contact-pill contact-pill--drawer"
                data-accent={accentMode}
                onClick={() => setOpen(false)}
              >
                Contact Sales {/* Taken from https://dezitechengineering.com/contact.html */}
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Nav;
