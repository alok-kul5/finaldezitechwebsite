const Footer = () => (
  <div className="footer-grid">
    <div className="footer-column">
      <p className="footer-title">
        Dezitech Engineering {/* Taken from https://dezitechengineering.com/ */}
      </p>
      <p>
        Karad, India & Bristol, UK {/* Taken from https://dezitechengineering.com/contact.html */}
      </p>
      <a href="mailto:info@dezitechengineering.com">
        info@dezitechengineering.com {/* Taken from https://dezitechengineering.com/contact.html */}
      </a>
    </div>
    <div className="footer-column">
      <p className="footer-title">
        Quick Links {/* Taken from https://dezitechengineering.com/contact.html */}
      </p>
      <ul>
        <li>
          <a href="#home">
            Home {/* Taken from https://dezitechengineering.com/ */}
          </a>
        </li>
        <li>
          <a href="#services">
            Engineering/Design Services {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </a>
        </li>
        <li>
          <a href="#services">
            Refrigeration Design {/* Taken from https://dezitechengineering.com/refrigeration.html */}
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact Us {/* Taken from https://dezitechengineering.com/contact.html */}
          </a>
        </li>
      </ul>
    </div>
    <div className="footer-column footer-column--small">
      <p>
        Copyright © {new Date().getFullYear()} - All Rights Reserved {/* Taken from https://dezitechengineering.com/contact.html */}
      </p>
    </div>
  </div>
);

export default Footer;
