import parse from 'html-react-parser';

import twigTemplate from './menu--main.twig';
import data from './menu--main.yml';
import '../../../02-uswds/uswds.es6';

const settings = {
  title: 'Components/Menu/Main Menu',
};

const MainMenu = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { MainMenu };
