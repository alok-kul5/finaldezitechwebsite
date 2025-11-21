// src/components/Section.jsx
import { forwardRef } from 'react';

const Section = forwardRef(
  ({ as: Tag = 'section', variant = 'dark', padded = true, className = '', children, ...rest }, ref) => {
    const classes = ['dez-section', `dez-section--${variant}`];
    if (padded) classes.push('dez-section--padded');
    if (className) classes.push(className);

    return (
      <Tag ref={ref} className={classes.join(' ').trim()} data-variant={variant} {...rest}>
        {children}
      </Tag>
    );
  }
);

Section.displayName = 'Section';

export default Section;
