import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../context/ThemeContext';
import { navVariants } from '../lib/framerVariants';

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

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
    const close = (event) => {
      if (event.target.closest?.('#dezitech-nav')) return;
      setOpen(false);
    };
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [open]);

  return (
    <motion.header
      id="dezitech-nav"
      aria-label="Main"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'nav-blur' : 'bg-transparent'}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight text-mist">
          Dezitech Engineering {/* Taken from https://dezitechengineering.com/ */}
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative font-medium text-neutral-300 transition hover:text-mist focus-visible:text-mist"
            >
              {link.element}
              <span className="absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-dezired transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="px-3 py-2 rounded-full border border-white/10 text-xs uppercase tracking-wide text-neutral-300 hover:text-mist hover:border-dezired/60"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'} {/* UX POLISH: generated — short */}
          </button>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-dezired text-mist font-semibold shadow-border-glow focus-visible:focus-ring"
          >
            Contact Sales {/* UX POLISH: generated — short */}
          </a>
        </nav>
        <button
          type="button"
          aria-controls="dezitech-menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 text-mist"
        >
          <span className="sr-only">Toggle navigation {/* UX POLISH: generated — short */}</span>
          <span className="w-5 h-0.5 bg-mist block mb-1"></span>
          <span className="w-5 h-0.5 bg-mist block mb-1"></span>
          <span className="w-5 h-0.5 bg-mist block"></span>
        </button>
      </div>
      <div
        id="dezitech-menu"
        className={`lg:hidden grid gap-4 px-6 pb-6 transition-[max-height,opacity] duration-500 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-base font-medium text-neutral-200"
          >
            {link.element}
          </a>
        ))}
        <button
          type="button"
          onClick={toggleTheme}
          className="justify-self-start px-4 py-2 rounded-full border border-white/10 text-neutral-200"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'} {/* UX POLISH: generated — short */}
        </button>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="inline-flex items-center justify-center rounded-full bg-dezired px-4 py-2 text-mist font-semibold"
        >
          Contact Sales {/* UX POLISH: generated — short */}
        </a>
      </div>
    </motion.header>
  );
};

export default Nav;
