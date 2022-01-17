import parse from 'html-react-parser';

import twigTemplate from './footer.twig';
import data from './footer.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Footer',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/footer/ and https://components.designsystem.digital.gov/components/detail/footer--default.html.",
      },
    },
  }
};

const Footer = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Footer.args = { ...data };

export default settings;
export { Footer };
