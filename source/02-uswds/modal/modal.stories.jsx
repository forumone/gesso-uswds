import parse from 'html-react-parser';

import twigTemplate from './modal.twig';
import data from './modal.yml';
import globalData from '../../00-config/storybook.global-data.yml';
import '../uswds.es6';
import './modal.es6';

const settings = {
  title: 'USWDS/Modal',
  decorators: Story => (
    <div class="l-constrain u-spaced-05">
      <a
        href={data.id}
        class="usa-button"
        aria-controls={data.id}
        data-open-modal
        >Open default modal</a>
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
