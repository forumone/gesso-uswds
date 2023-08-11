import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './tag-link.twig';
import data from './tag-link.yml';
import './tag-link.scss';

const settings = {
  title: 'Components/Tag Link',
  decorators: [withGlobalWrapper],
};

const TagLink = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
TagLink.args = { ...data };

export default settings;
export { TagLink };
