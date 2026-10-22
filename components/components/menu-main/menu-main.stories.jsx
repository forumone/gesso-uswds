import parse from 'html-react-parser';

import twigTemplate from './menu-main.twig';
import data from './menu-main.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './menu-main.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'Components/Menu/Main Menu',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
};

const MainMenu = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { MainMenu };
