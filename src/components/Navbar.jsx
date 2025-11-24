import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 ${scrolled ? 'header-scrolled' : 'header-rounded'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo">Dezitech Engineering</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#services" className="uppercase text-sm tracking-wider">Services</a>
          <a href="#solutions" className="uppercase text-sm tracking-wider">Solutions</a>
          <a href="#industries" className="uppercase text-sm tracking-wider">Industries</a>
          <a href="#contact" className="btn px-4 py-2 bg-dez-primary rounded text-white">Contact</a>
        </nav>
        <button className="md:hidden">Menu</button>
      </div>
    </header>
  );
}
