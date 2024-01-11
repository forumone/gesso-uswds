import React from 'react';
import ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';

import twigTemplate from './footer.twig';
import data from './footer.yml';
import ContentPlaceholder from '../../01-global/content-placeholder/content-placeholder';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Footer',
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
    ...data
  },
};

export default settings;
export { Footer };
