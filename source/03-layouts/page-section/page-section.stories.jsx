import parse from 'html-react-parser';

import twigTemplate from './page-section.twig';
import data from './page-section.yml';

const settings = {
  title: 'Layouts/Page Section',
};

const PageSection = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
PageSection.args = { ...data };

export default settings;
export { PageSection };
