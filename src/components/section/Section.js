import React from 'react';

const Section = ({ title, children }) => (
  <section>
    <h3>{title}</h3>
    {children}
  </section>
);
export default Section;
