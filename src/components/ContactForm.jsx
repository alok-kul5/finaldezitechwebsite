import { useMemo } from 'react';

const ContactForm = () => {
  const organizationJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Dezitech Engineering',
      email: 'info@dezitechengineering.com', // Taken from https://dezitechengineering.com/contact.html
      url: 'https://dezitechengineering.com/',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Sales',
          email: 'info@dezitechengineering.com', // Taken from https://dezitechengineering.com/contact.html
          areaServed: 'Global'
        }
      ],
      address: [
        {
          '@type': 'PostalAddress',
          addressLocality: 'Karad', // Taken from https://dezitechengineering.com/contact.html
          addressCountry: 'IN'
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Bristol', // Taken from https://dezitechengineering.com/about.html
          addressCountry: 'GB'
        }
      ]
    }),
    []
  );

  return (
    <div className="contact-grid">
      <div className="contact-grid__copy">
        <p className="section-eyebrow">
          Contact us {/* Taken from https://dezitechengineering.com/contact.html */}
        </p>
        <h2 className="section-title">
          Please do contact us for any further details such as work samples, quotation or discus how we can help you. {/* Taken from https://dezitechengineering.com/contact.html */}
        </h2>
        <div className="contact-grid__details">
          <p>
            info@dezitechengineering.com {/* Taken from https://dezitechengineering.com/contact.html */}
          </p>
          <p>
            Karad, India · Bristol, UK {/* Taken from https://dezitechengineering.com/about.html */}
          </p>
        </div>
        <p className="contact-grid__support">
          We manage the entire process from finding suitable manufacturers to continuous supply of products / components. {/* Taken from https://dezitechengineering.com/about.html */}
        </p>
      </div>
      <form className="contact-form">
        <div className="contact-form__field">
          <label htmlFor="name">
            Name {/* Taken from https://dezitechengineering.com/contact.html */}
          </label>
          <input id="name" name="name" type="text" placeholder="Enter your Name" required />
        </div>
        <div className="contact-form__field">
          <label htmlFor="email">
            Email {/* Taken from https://dezitechengineering.com/contact.html */}
          </label>
          <input id="email" name="email" type="email" placeholder="Enter your Email ID" required />
        </div>
        <div className="contact-form__field">
          <label htmlFor="tel">
            Phone {/* Taken from https://dezitechengineering.com/contact.html */}
          </label>
          <input id="tel" name="tel" type="tel" placeholder="Enter contact number" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="message">
            Message {/* Taken from https://dezitechengineering.com/contact.html */}
          </label>
          <textarea id="message" name="message" rows="4" placeholder="Enter your Message" />
        </div>
        <button type="submit" className="hero-cta hero-cta--primary contact-form__submit">
          submit {/* Taken from https://dezitechengineering.com/contact.html */}
        </button>
      </form>
      {/* JSON-LD Organization snippet sourced from Dezitech contact data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
    </div>
  );
};

export default ContactForm;
