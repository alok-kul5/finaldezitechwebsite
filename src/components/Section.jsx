import { forwardRef } from 'react';

const Section = forwardRef(
  ({ as: Tag = 'section', variant = 'dark', padded = true, className = '', children, ...rest }, ref) => {
    const classes = ['dz-section', `dz-section--${variant}`];
    if (padded) classes.push('dz-section--padded');
    if (className) classes.push(className);

    return (
      <Tag ref={ref} className={classes.join(' ').trim()} data-variant={variant} {...rest}>
        {children}
      </Tag>
    );
  }
);

export default Section;
