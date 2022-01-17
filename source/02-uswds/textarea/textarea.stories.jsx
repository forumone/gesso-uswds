import parse from 'html-react-parser';

import twigTemplate from './textarea.twig';
import data from './textarea.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Text Area',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/form-controls/ and https://components.designsystem.digital.gov/components/detail/text-input.html.",
      },
    },
  }
};

const TextArea = args => (
  parse(twigTemplate({
    ...args,
  }))
);
TextArea.args = { ...data };

export default settings;
export { TextArea };
