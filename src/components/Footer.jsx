const Footer = () => (
  <footer className="bg-charcoal py-12">
    <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-3">
      <div className="space-y-3 text-sm text-neutral-300">
        <p className="text-base font-semibold text-mist">
          Dezitech Engineering {/* Taken from https://dezitechengineering.com/ */}
        </p>
        <p>
          Karad, India & Bristol, UK {/* Taken from https://dezitechengineering.com/contact.html */}
        </p>
        <a href="mailto:info@dezitechengineering.com" className="text-dezired">
          info@dezitechengineering.com {/* Taken from https://dezitechengineering.com/contact.html */}
        </a>
      </div>
      <div>
        <p className="text-base font-semibold text-mist">
          Quick Links {/* Taken from https://dezitechengineering.com/contact.html */}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-neutral-300">
          <li>
            <a href="#home" className="hover:text-mist">
              Home {/* Taken from https://dezitechengineering.com/ */}
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-mist">
              Engineering/Design Services {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-mist">
              Refrigeration Design {/* Taken from https://dezitechengineering.com/refrigeration.html */}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-mist">
              Contact Us {/* Taken from https://dezitechengineering.com/contact.html */}
            </a>
          </li>
        </ul>
      </div>
      <div className="text-sm text-neutral-400">
        <p>
          Copyright © {new Date().getFullYear()} - All Rights Reserved {/* Taken from https://dezitechengineering.com/contact.html */}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
