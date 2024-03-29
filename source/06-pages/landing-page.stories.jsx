import React from 'react';
import ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';

import globalData from '../00-config/storybook.global-data.yml';
import PageWrapper from './page-wrappers/default.jsx';
import { LandingPage as Template } from '../05-templates/landing-page/landing-page.stories.jsx';
import { Default as Card } from '../04-components/card/card.stories.jsx';
import { View } from '../04-components/view/views-view/views-view.stories.jsx';
import { Unformatted } from '../04-components/view/views-view-unformatted/views-view-unformatted.stories';
import { ThreeColumn } from '../03-layouts/grid/grid.stories';

export default {
  title: 'Pages/Landing Page',
  parameters: {
    controls: {
      include: ['is_published', 'show_admin_info'],
    },
  },
};

// You can create a loop to quickly add multiple instances of the same story.
// See the Homepage story for an example of overriding the args for each example.
const rowsContent = [];
for (let i = 1; i <= 12; i += 1) {
  rowsContent.push(Card.render(Card.args));
}

const viewsContent = ReactDOMServer.renderToStaticMarkup(
  Unformatted.render({
    ...Unformatted.args,
    has_constrain: false,
    rows: rowsContent.map(row => ({
      content: ReactDOMServer.renderToStaticMarkup(row),
    })),
  })
);

const gridContent = ReactDOMServer.renderToStaticMarkup(
  ThreeColumn.render({
    ...ThreeColumn.args,
    grid_content: viewsContent,
  })
);

const mainContent = View({
  ...View.args,
  rows: gridContent,
});

const landingPageContent = args =>
  ReactDOMServer.renderToStaticMarkup(
    Template.render({
      ...args,
      page_title: 'Great Scott!',
      content: ReactDOMServer.renderToStaticMarkup(mainContent),
    })
  );

const LandingPage = {
  render: args => <PageWrapper>{parse(landingPageContent(args))}</PageWrapper>,
  args: { ...globalData },
};

export { LandingPage };
