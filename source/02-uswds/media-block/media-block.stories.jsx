import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './media-block.twig';
import data from './media-block.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Media Block',
  decorators: [withGlobalWrapper],
};

const MediaBlock = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { MediaBlock };
