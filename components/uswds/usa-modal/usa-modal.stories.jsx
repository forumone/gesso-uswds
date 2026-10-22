import parse from 'html-react-parser';

import twigTemplate from './usa-modal.twig';
import data from './usa-modal.yml';
import globalData from '../../../source/00-config/storybook.global-data.yml';
import '../../../source/01-global/uswds/uswds.es6';
import './usa-modal.source';
import componentInfo from './usa-modal.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Modal',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: Story => (
    <div class="l-constrain u-spaced-05">
      <a
        href={data.id}
        class="usa-button"
        aria-controls={data.id}
        data-open-modal
      >
        Open default modal
      </a>
      <Story />
    </div>
  ),
};

const Modal = {
  render: args => parse(twigTemplate(args)),
  args: { ...globalData, ...data },
};

export default settings;
export { Modal };
