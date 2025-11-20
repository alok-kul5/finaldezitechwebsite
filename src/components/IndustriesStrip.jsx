import Section from './Section';

const industries = [
  {
    label: 'Automotive',
    element: (
      <>
        Automotive {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    )
  },
  {
    label: 'Industrial',
    element: (
      <>
        Industrial {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    )
  },
  {
    label: 'HVAC & R',
    element: (
      <>
        HVAC & R {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    )
  },
  {
    label: 'Oil & Gas',
    element: (
      <>
        Oil & Gas {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    )
  },
  {
    label: 'Aviation',
    element: (
      <>
        Aviation {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    )
  }
];

const IndustriesStrip = () => (
  <Section id="industries" variant="light">
    <div className="section-shell industries-shell">
      <p className="section-eyebrow">
        Industries served {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </p>
      <h2 className="section-title">
        We provide end to end service or tailored individual needs world wide to diverse and multidiciplinary Industries. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </h2>
      <div className="industries-marquee" aria-label="Industries marquee">
        <div className="industries-marquee__track">
          {[...industries, ...industries].map((item, index) => (
            <span key={`${item.label}-${index}`} className="industries-marquee__item">
              {item.element}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default IndustriesStrip;
