import parse from 'html-react-parser';

import twigTemplate from './button-group.twig';
import data from './button-group.yml';

const settings = {
  title: 'Components/Button Group',
};

const Default = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Default.args = { ...data };

const Separated = args => (
  parse(twigTemplate({
    ...args,
    is_separated: true,
  }))
);
Separated.args = { ...data };

const Segmented = args => (
  parse(twigTemplate({
    ...args,
    is_segmented: true,
  }))
);
Segmented.args = { ...data };

export default settings;
export { Default, Separated, Segmented };
