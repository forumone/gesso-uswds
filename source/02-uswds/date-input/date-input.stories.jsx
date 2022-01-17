import parse from 'html-react-parser';

import twigTemplate from './date-input.twig';
import data from './date-input.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Date Input',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/form-controls/ and https://components.designsystem.digital.gov/components/detail/date-input.html.",
      },
    },
  }
};

const DateInput = args => (
  parse(twigTemplate({
    ...args,
  }))
);
DateInput.args = { ...data };

export default settings;
export { DateInput };
