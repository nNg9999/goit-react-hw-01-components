import React from 'react';

import PropType from 'prop-types';

export default function Section({ children }) {
  return (<section>
    {children}
  </section>)

};


Section.Proptype = {
  children: PropType.node
};
