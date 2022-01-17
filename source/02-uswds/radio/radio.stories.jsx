import parse from 'html-react-parser';

import twigTemplate from './radio.twig';
import data from './radio.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Radio Button',
  parameters: {
    docs: {
      description: {
        component: "See [https://designsystem.digital.gov/components/form-controls/]() and [https://components.designsystem.digital.gov/components/detail/radio-buttons.html]().",
      },
    },
  }
};

const RadioButton = args => (
  parse(twigTemplate({
    ...args,
  }))
);
RadioButton.args = { ...data };

export default settings;
export { RadioButton };
