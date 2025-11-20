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
  <section id="industries" className="relative overflow-hidden bg-charcoal/80 py-16">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(225,6,0,0.08),transparent_65%)]" aria-hidden="true" />
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-4 px-6">
      <p className="text-sm uppercase tracking-[0.4em] text-neutral-400">
        Industries served {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </p>
      <h2 className="text-2xl font-semibold text-mist">
        We provide end to end service or tailored individual needs world wide to diverse and multidiciplinary Industries. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </h2>
      <div className="relative mt-8 overflow-x-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap text-4xl font-semibold uppercase text-mist/60">
          {[...industries, ...industries].map((item, index) => (
            <span key={`${item.label}-${index}`} className="tracking-tight">
              {item.element}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default IndustriesStrip;
