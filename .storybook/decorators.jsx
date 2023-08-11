import React from 'react';

const withGlobalWrapper = (Story) => (
  <div className="l-constrain l-constrain--large u-spaced-4">
    <Story />
  </div>
);

export { withGlobalWrapper };
