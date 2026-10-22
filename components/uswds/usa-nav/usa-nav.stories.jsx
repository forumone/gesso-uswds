import React from 'react';
import ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';

import twigTemplate from './usa-nav.twig';
import secondaryTwigTemplate from '../usa-nav-secondary/usa-nav-secondary.twig';
import { MainMenu } from '../../components/menu-main/menu-main.stories.jsx';
import { AccountMenu } from '../../components/menu-account/menu-account.stories.jsx';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-nav.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Nav',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
};

const navPlaceholderContent = is_extended => {
  return ReactDOMServer.renderToStaticMarkup(
    <>
      {MainMenu.render(MainMenu.args)}
      {is_extended
        ? parse(
            secondaryTwigTemplate({
              secondary_content: ReactDOMServer.renderToStaticMarkup(
                <>{AccountMenu.render(AccountMenu.args)}</>
              ),
            })
          )
        : null}
    </>
  );
};

// const Nav = args =>
//   parse(
//     twigTemplate({
//       ...args,
//       nav_content: args.nav_content ?? navPlaceholderContent(args.is_extended)
//     })
//   );
// Nav.args = {
//   is_extended: false,
// };

const Nav = {
  render: args =>
    parse(
      twigTemplate({
        ...args,
        nav_content:
          args.nav_content ?? navPlaceholderContent(args.is_extended),
      })
    ),
  args: {
    is_extended: false,
  },
};

export default settings;
export { Nav };
