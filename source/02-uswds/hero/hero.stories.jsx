import parse from 'html-react-parser';

import twigTemplate from './hero.twig';
import data from './hero.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Hero',
  parameters: {
    docs: {
      description: {
        component: "See https://components.designsystem.digital.gov/components/detail/hero.html.",
      },
    },
  }
};

const Hero = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Hero.args = { ...data };

export default settings;
export { Hero };
