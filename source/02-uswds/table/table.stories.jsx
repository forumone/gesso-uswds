import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './table.twig';
import data from './table.yml';
import borderlessData from './table--borderless.yml';
import scrollableData from './table--scrollable.yml';
import sortableData from './table--sortable.yml';
import stackedData from './table--stacked.yml';
import stickheaderData from './table--sticky-header.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Table',
  decorators: [withGlobalWrapper],
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/table/ and https://components.designsystem.digital.gov/components/detail/tables.html.',
      },
    },
  },
};

const Default = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

const BorderlessTable = {
  ...Default,
  args: { ...borderlessData },
};

const ScrollableTable = {
  ...Default,
  args: { ...scrollableData },
};

const SortableTable = {
  ...Default,
  args: { ...sortableData },
};

const StackedTable = {
  ...Default,
  args: { ...stackedData },
};

const StickyheaderTable = {
  ...Default,
  args: { ...stickheaderData },
};

export default settings;
export {
  Default,
  BorderlessTable,
  ScrollableTable,
  SortableTable,
  StackedTable,
  StickyheaderTable,
};
