import React from 'react'
import ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';

import twigTemplate from './header.twig';
import { NavBar } from '../navbar/navbar.stories.jsx';
import { Nav } from '../nav/nav.stories.jsx';
import data from './header.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Header',
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/header/ and https://components.designsystem.digital.gov/components/detail/header--default.html.',
      },
    },
    controls: {
      exclude: ['is_extended']
    }
  },
};

const headerContent = ReactDOMServer.renderToStaticMarkup(
  <>
    {NavBar(NavBar.args)}
    {Nav({...Nav.args, is_extended: false})}
  </>
);

const headerContentExtended = ReactDOMServer.renderToStaticMarkup(
  <>
    {NavBar(NavBar.args)}
    {Nav({...Nav.args, is_extended: true})}
  </>
);

const Default = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Default.args = {
  header_content: headerContent,
  ...data,
  is_extended: false,
};

const Extended = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Extended.args = {
  header_content: headerContentExtended,
  ...data,
  is_extended: true,
};
Extended.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/header/ and https://components.designsystem.digital.gov/components/detail/header--extended.html.',
  },
};

export default settings;
export { Default, Extended };
