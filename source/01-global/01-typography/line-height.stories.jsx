import parse from 'html-react-parser';

import twigTemplate from './line-height.twig';
import data from '../../00-config/config.design-tokens.yml';

const settings = {
  title: 'Global/Line Height',
  argTypes: {
    gesso: {
      table: {
        disable: true
      }
    }
  }
};

const LineHeight = args => (
  parse(twigTemplate({
    ...args,
  }))
);
LineHeight.args = { ...data };

export default settings;
export { LineHeight };
