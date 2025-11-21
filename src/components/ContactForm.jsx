// src/components/ContactForm.jsx
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/framerVariants';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', tel: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus('error');
      return;
    }
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', tel: '', message: '' });
  };

  return (
    <motion.div
      className="dez-contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
    >
      <div className="dez-contact__container">
        <div className="dez-contact__copy">
          <p className="dez-section__eyebrow">Contact us</p>
          {/* Taken from https://dezitechengineering.com/contact.html */}
          <h2 className="dez-section__title">
            Please do contact us for any further details such as work samples, quotation or discus how we can help you.{' '}
            {/* Taken from https://dezitechengineering.com/contact.html */}
          </h2>
          <div className="dez-contact__details">
            <p>
              <a href="mailto:info@dezitechengineering.com">info@dezitechengineering.com</a>
              {/* Taken from https://dezitechengineering.com/contact.html */}
            </p>
            <p>
              Karad, India · Bristol, UK {/* Taken from https://dezitechengineering.com/about.html */}
            </p>
          </div>
          <p className="dez-contact__support">
            We manage the entire process from finding suitable manufacturers to continuous supply of products /
            components. {/* Taken from https://dezitechengineering.com/about.html */}
          </p>
        </div>
        <form className="dez-contact__form" onSubmit={handleSubmit} noValidate aria-live="polite">
          <div className="dez-contact__form-row">
            <div className="dez-contact__field">
              <label htmlFor="name">
                Name {/* Taken from https://dezitechengineering.com/contact.html */}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span id="name-error" className="dez-contact__error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="dez-contact__field">
              <label htmlFor="email">
                Email {/* Taken from https://dezitechengineering.com/contact.html */}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="dez-contact__error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>
          </div>
          <div className="dez-contact__field">
            <label htmlFor="tel">
              Phone {/* Taken from https://dezitechengineering.com/contact.html */}
            </label>
            <input
              id="tel"
              name="tel"
              type="tel"
              value={formData.tel}
              onChange={handleChange}
              placeholder="Enter contact number"
              aria-invalid={errors.tel ? 'true' : 'false'}
            />
          </div>
          <div className="dez-contact__field">
            <label htmlFor="message">
              Message {/* Taken from https://dezitechengineering.com/contact.html */}
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
            />
          </div>
          {submitStatus === 'success' && (
            <div className="dez-contact__success" role="alert">
              Thank you! Your message has been sent.
            </div>
          )}
          {submitStatus === 'error' && Object.keys(errors).length > 0 && (
            <div className="dez-contact__error-message" role="alert">
              Please correct the errors above.
            </div>
          )}
          <button type="submit" className="dez-btn dez-btn--primary dez-contact__submit">
            Submit {/* Taken from https://dezitechengineering.com/contact.html */}
          </button>
        </form>
      </div>
      {/* JSON-LD Organization snippet */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
    </motion.div>
  );
};

export default ContactForm;
