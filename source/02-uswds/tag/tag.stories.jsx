import parse from 'html-react-parser';

import twigTemplate from './tag.twig';
import data from './tag.yml';
import bigData from './tag--big.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Tag',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/tag/ and https://components.designsystem.digital.gov/components/detail/labels--default.html.",
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

const BigTag = args => (
  parse(twigTemplate({
    ...args,
  }))
);
BigTag.args = { ...bigData };
BigTag.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/tag/ and https://components.designsystem.digital.gov/components/detail/labels--big.html.",
  },
};

export default settings;
export { Default, BigTag };
