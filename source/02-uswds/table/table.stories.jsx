import parse from 'html-react-parser';

import twigTemplate from './table.twig';
import data from './table.yml';
import borderlessData from './table--borderless.yml';
import scrollableData from './table--scrollable.yml';
import sortableData from './table--sortable.yml';
import stackedData from './table--stacked.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Table',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/table/ and https://components.designsystem.digital.gov/components/detail/tables.html.",
      },
    },
  }
};

const Default = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Default.args = { ...data };

const BorderlessTable = args => (
  parse(twigTemplate({
    ...args,
  }))
);
BorderlessTable.args = { ...borderlessData };

const ScrollableTable = args => (
  parse(twigTemplate({
    ...args,
  }))
);
ScrollableTable.args = { ...scrollableData };

const SortableTable = args => (
  parse(twigTemplate({
    ...args,
  }))
);
SortableTable.args = { ...sortableData };

const StackedTable = args => (
  parse(twigTemplate({
    ...args,
  }))
);
StackedTable.args = { ...stackedData };

export default settings;
export { Default, BorderlessTable, ScrollableTable, SortableTable, StackedTable };
