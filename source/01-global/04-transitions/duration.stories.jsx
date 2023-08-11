import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './duration.twig';
import data from '../../00-config/config.design-tokens.yml';
import './duration.scss';

const settings = {
  title: 'Global/Duration',
  decorators: [withGlobalWrapper],
  argTypes: {
    gesso: {
      table: {
        disable: true,
      },
    },
  },
};

const Duration = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Duration.args = { ...data };

export default settings;
export { Duration };
