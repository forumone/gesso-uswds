import parse from 'html-react-parser';

import twigTemplate from './tooltip.twig';
import data from './tooltip.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Tooltip',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/tooltip/.",
      },
    },
  }
};

const Tooltip = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Tooltip.args = { ...data };

export default settings;
export { Tooltip };
