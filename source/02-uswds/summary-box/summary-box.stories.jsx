import parse from 'html-react-parser';

import twigTemplate from './summary-box.twig';
import data from './summary-box.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Summary Box',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/summary-box/.",
      },
    },
  }
};

const SummaryBox = args => (
  parse(twigTemplate({
    ...args,
  }))
);
SummaryBox.args = { ...data };

export default settings;
export { SummaryBox };
