import parse from 'html-react-parser';

import twigTemplate from './media-block.twig';
import data from './media-block.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Media Block',
};

const MediaBlock = args => (
  parse(twigTemplate({
    ...args,
  }))
);
MediaBlock.args = { ...data };

export default settings;
export { MediaBlock };
