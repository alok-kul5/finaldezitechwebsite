// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/framerVariants';

const Footer = () => {
  return (
    <motion.footer
      className="dez-footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
    >
      <div className="dez-footer__container">
        <div className="dez-footer__grid">
          <div className="dez-footer__column">
            <h3 className="dez-footer__title">Dezitech Engineering</h3>
            {/* Taken from https://dezitechengineering.com/ */}
            <p>Karad, India & Bristol, UK</p>
            {/* Taken from https://dezitechengineering.com/contact.html */}
            <a href="mailto:info@dezitechengineering.com">info@dezitechengineering.com</a>
            {/* Taken from https://dezitechengineering.com/contact.html */}
          </div>
          <div className="dez-footer__column">
            <h4 className="dez-footer__subtitle">Quick Links</h4>
            {/* Taken from https://dezitechengineering.com/contact.html */}
            <ul className="dez-footer__links">
              <li>
                <a href="#home">Home</a>
                {/* Taken from https://dezitechengineering.com/ */}
              </li>
              <li>
                <a href="#services">Engineering/Design Services</a>
                {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
              </li>
              <li>
                <a href="#services">Refrigeration Design</a>
                {/* Taken from https://dezitechengineering.com/refrigeration.html */}
              </li>
              <li>
                <a href="#contact">Contact Us</a>
                {/* Taken from https://dezitechengineering.com/contact.html */}
              </li>
            </ul>
          </div>
          <div className="dez-footer__column dez-footer__column--small">
            <p className="dez-footer__copyright">
              Copyright © {new Date().getFullYear()} - All Rights Reserved
              {/* Taken from https://dezitechengineering.com/contact.html */}
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
