import React from 'react';
import ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';

import twigTemplate from './usa-header.twig';
import { NavBar } from '../usa-navbar/usa-navbar.stories.jsx';
import { Nav } from '../usa-nav/usa-nav.stories.jsx';
import data from './usa-header.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-header.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Header',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/header/ and https://components.designsystem.digital.gov/components/detail/header--default.html.',
      },
    },
    controls: {
      exclude: ['is_extended'],
    },
  },
};

const headerContent = ReactDOMServer.renderToStaticMarkup(
  <>
    {NavBar.render(NavBar.args)}
    {Nav.render({ ...Nav.args, is_extended: false })}
  </>
);

const headerContentExtended = ReactDOMServer.renderToStaticMarkup(
  <>
    {NavBar.render(NavBar.args)}
    {Nav.render({ ...Nav.args, is_extended: true })}
  </>
);

const Default = {
  render: args => parse(twigTemplate(args)),
  args: {
    header_content: headerContent,
    ...data,
    is_extended: false,
  },
};

const Extended = {
  render: args => parse(twigTemplate(args)),
  args: {
    header_content: headerContentExtended,
    ...data,
    is_extended: true,
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/header/ and https://components.designsystem.digital.gov/components/detail/header--extended.html.',
    },
  },
};

export default settings;
export { Default, Extended };
