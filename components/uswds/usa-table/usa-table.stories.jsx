import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-table.twig';
import data from './usa-table.yml';
import borderlessData from './usa-table--borderless.yml';
import scrollableData from './usa-table--scrollable.yml';
import sortableData from './usa-table--sortable.yml';
import stackedData from './usa-table--stacked.yml';
import stickheaderData from './usa-table--sticky-header.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-table.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Table',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
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
