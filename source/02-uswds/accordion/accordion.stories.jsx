import parse from 'html-react-parser';

import twigTemplate from './accordion.twig';
import data from './accordion.yml';
import borderedData from './accordion--bordered.yml';
import multiselectableData from './accordion--multiselectable.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Accordion',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/accordion/ and https://components.designsystem.digital.gov/components/detail/accordion--default.html.",
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

const Bordered = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Bordered.args = { ...borderedData };
Bordered.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/accordion/ and https://components.designsystem.digital.gov/components/detail/accordion--bordered.html.",
  },
};

const Multiselectable = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Multiselectable.args = { ...multiselectableData };
Multiselectable.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/accordion/ and https://components.designsystem.digital.gov/components/detail/accordion--multiselectable.html.",
  },
};

export default settings;
export { Default, Bordered, Multiselectable };
