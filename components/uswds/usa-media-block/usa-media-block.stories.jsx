import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-media-block.twig';
import data from './usa-media-block.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-media-block.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Media Block',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [withGlobalWrapper],
};

const MediaBlock = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { MediaBlock };
