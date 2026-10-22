import React from 'react';
import ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';

import twigTemplate from './usa-footer.twig';
import data from './usa-footer.yml';
import ContentPlaceholder from '../../../source/01-global/content-placeholder/content-placeholder';
import '../../../source/01-global/uswds/uswds.es6';
import './usa-footer.source.scss';
import componentInfo from './usa-footer.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Footer',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/footer/ and https://components.designsystem.digital.gov/components/detail/footer--default.html.',
      },
    },
  },
};

const Footer = {
  render: args => parse(twigTemplate(args)),
  args: {
    primary_content: ReactDOMServer.renderToStaticMarkup(
      <ContentPlaceholder>Primary Content</ContentPlaceholder>
    ),
    secondary_content: ReactDOMServer.renderToStaticMarkup(
      <ContentPlaceholder>Secondary Content</ContentPlaceholder>
    ),
    ...data,
  },
};

export default settings;
export { Footer };
