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
    <section id="contact" className="relative bg-charcoalSoft/50 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(225,6,0,0.1),transparent_55%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-400">
            Contact us {/* Taken from https://dezitechengineering.com/contact.html */}
          </p>
          <h2 className="text-3xl font-semibold text-mist">
            Please do contact us for any further details such as work samples, quotation or discus how we can help you. {/* Taken from https://dezitechengineering.com/contact.html */}
          </h2>
          <div className="space-y-4 text-neutral-300">
            <p>
              info@dezitechengineering.com {/* Taken from https://dezitechengineering.com/contact.html */}
            </p>
            <p>
              Karad, India · Bristol, UK {/* Taken from https://dezitechengineering.com/about.html */}
            </p>
          </div>
          <p className="text-sm text-neutral-400">
            We manage the entire process from finding suitable manufacturers to continuous supply of products / components. {/* Taken from https://dezitechengineering.com/about.html */}
          </p>
        </div>
        <form className="rounded-3xl border border-white/10 bg-charcoal/70 p-8 shadow-card-hover">
          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-mist" htmlFor="name">
                Name {/* Taken from https://dezitechengineering.com/contact.html */}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your Name"
                className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-mist focus:border-dezired"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-mist" htmlFor="email">
                Email {/* Taken from https://dezitechengineering.com/contact.html */}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your Email ID"
                className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-mist focus:border-dezired"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-mist" htmlFor="tel">
                Phone {/* Taken from https://dezitechengineering.com/contact.html */}
              </label>
              <input
                id="tel"
                name="tel"
                type="tel"
                placeholder="Enter contact number"
                className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-mist focus:border-dezired"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-mist" htmlFor="message">
                Message {/* Taken from https://dezitechengineering.com/contact.html */}
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your Message"
                className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-mist focus:border-dezired"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-dezired px-6 py-3 font-semibold text-mist shadow-border-glow"
            >
              submit {/* Taken from https://dezitechengineering.com/contact.html */}
            </button>
          </div>
        </form>
      </div>
      {/* JSON-LD Organization snippet sourced from Dezitech contact data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
    </section>
  );
};

export default ContactForm;
