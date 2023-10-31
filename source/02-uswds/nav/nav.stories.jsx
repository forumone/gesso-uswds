import React from 'react'
import ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';

import twigTemplate from './nav.twig';
import secondaryTwigTemplate from './secondary.twig';
import { MainMenu } from '../../04-components/menu/menu--main/menu--main.stories.jsx';
import { AccountMenu } from '../../04-components/menu/menu--account/menu--account.stories.jsx';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Nav',
};

const navPlaceholderContent = (is_extended) => {
  return (ReactDOMServer.renderToStaticMarkup(
    <>
      {MainMenu(MainMenu.args)}
      {is_extended ? (
        parse(
          secondaryTwigTemplate({
            secondary_content: ReactDOMServer.renderToStaticMarkup(
              <>
                {AccountMenu(AccountMenu.args)}
              </>
            )
          })
        )
      ) : null}
    </>
  ));
};

const Nav = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Nav.args = {
  nav_content: navPlaceholderContent(false),
  is_extended: false,
};

export default settings;
export { Nav };
