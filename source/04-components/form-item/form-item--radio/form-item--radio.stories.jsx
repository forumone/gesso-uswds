import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../../.storybook/decorators';
import twigTemplate from '../form-item.twig';
import inputTemplate from '../_input.twig';
import labelTemplate from '../_form-item-label.twig';
import data from './form-item--radio.yml';

const settings = {
  title: 'Components/Form Item/Radio',
  decorators: [withGlobalWrapper],
};

const label = args => labelTemplate({ ...args });
const children = args => inputTemplate({ ...args });
const Radio = {
  render: args =>
    parse(
      twigTemplate({
        ...args,
        label: label(args),
        children: children(args),
      })
    ),
  args: { ...data },
};

export default settings;
export { Radio };
