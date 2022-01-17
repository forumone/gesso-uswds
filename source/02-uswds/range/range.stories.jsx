import parse from 'html-react-parser';

import twigTemplate from './range.twig';
import data from './range.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Range Input',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/form-controls/ and https://components.designsystem.digital.gov/components/detail/range-input.html.",
      },
    },
  }
};

const RangeInput = args => (
  parse(twigTemplate({
    ...args,
  }))
);
RangeInput.args = { ...data };

export default settings;
export { RangeInput };
