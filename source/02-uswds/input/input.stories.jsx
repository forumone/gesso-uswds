import parse from 'html-react-parser';

import twigTemplate from './input.twig';
import data from './input.yml';
import dataError from './input--error.yml';
import dataSuccess from './input--success.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Input',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/form-controls/ and https://components.designsystem.digital.gov/components/detail/text-input.html.",
      },
    },
  }
};

const Default = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Default.args = { ...data };

const ErrorInput = args => (
  parse(twigTemplate({
    ...args,
  }))
);
ErrorInput.args = { ...dataError };

const SuccessInput = args => (
  parse(twigTemplate({
    ...args,
  }))
);
SuccessInput.args = { ...dataSuccess };

export default settings;
export { Default, ErrorInput, SuccessInput };
