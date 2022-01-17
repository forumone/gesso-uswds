import parse from 'html-react-parser';

import twigTemplate from './checkbox.twig';
import data from './checkbox.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Checkbox',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/form-controls/ and https://components.designsystem.digital.gov/components/detail/checkboxes.html.",
      },
    },
  }
};

const Checkbox = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Checkbox.args = { ...data };

export default settings;
export { Checkbox };
