import React from 'react';
import ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';

import SkiplinksTwig from '../../components/components/skiplinks/skiplinks.twig';
import HeaderTwig from '../../components/uswds/usa-header/usa-header.twig';
import BreadcrumbTwig from '../../components/layouts/breadcrumb-wrapper/breadcrumb-wrapper.twig';
import ContentTwig from '../../components/layouts/content/content.twig';
import FooterTwig from '../../components/uswds/usa-footer/usa-footer.twig';
import NavTwig from '../../components/uswds/usa-nav/usa-nav.twig';
import SecondaryTwig from '../../components/uswds/usa-nav-secondary/usa-nav-secondary.twig';
import { Banner } from '../../components/uswds/usa-banner/usa-banner.stories.jsx';
import { NavBar } from '../../components/uswds/usa-navbar/usa-navbar.stories.jsx';
import { AccountMenu } from '../../components/components/menu-account/menu-account.stories.jsx';
import { MainMenu } from '../../components/components/menu-main/menu-main.stories.jsx';
import { Breadcrumb } from '../../components/components/breadcrumb/breadcrumb.stories.jsx';
import { FooterMenu } from '../../components/components/menu-footer/menu-footer.stories.jsx';
import { Copyright } from '../../components/components/copyright/copyright.stories.jsx';
import { BackToTop } from '../../components/components/back-to-top/back-to-top.stories.jsx';
// Twig includes above don't attach SDC libraries — pull CSS directly.
import '../../components/components/skiplinks/skiplinks.source.scss';
import '../../components/uswds/usa-footer/usa-footer.source.scss';

const PageWrapper = props => {
  const { children, isHomepage } = props;
  if (isHomepage) {
    document.body.classList.add('front');
    document.body.classList.remove('not-front');
  } else {
    document.body.classList.add('not-front');
    document.body.classList.remove('front');
  }
  return (
    <>
      {parse(SkiplinksTwig())}
      <div className="l-site-container">
        {Banner.render(Banner.args)}
        {parse(
          HeaderTwig({
            is_extended: true,
            header_content: ReactDOMServer.renderToStaticMarkup(
              <>
                {NavBar.render(NavBar.args)}
                {parse(
                  NavTwig({
                    label: 'Primary navigation',
                    is_extended: true,
                    nav_content: ReactDOMServer.renderToStaticMarkup(
                      <>
                        {MainMenu.render(MainMenu.args)}
                        {parse(
                          SecondaryTwig({
                            secondary_content:
                              ReactDOMServer.renderToStaticMarkup(
                                <>{AccountMenu.render(AccountMenu.args)}</>
                              ),
                          })
                        )}
                      </>
                    ),
                  })
                )}
              </>
            ),
          })
        )}
        {parse(
          BreadcrumbTwig({
            has_constrain: false,
            breadcrumb_content: ReactDOMServer.renderToStaticMarkup(
              <>{Breadcrumb.render(Breadcrumb.args)}</>
            ),
          })
        )}
        <main id="main" className="c-main" role="main" tabIndex="-1">
          {parse(
            ContentTwig({
              has_constrain: true,
              content_content: ReactDOMServer.renderToStaticMarkup(
                <>{children}</>
              ),
            })
          )}
        </main>
        {parse(
          FooterTwig({
            has_constrain: true,
            has_back_to_top: true,
            primary_content: ReactDOMServer.renderToStaticMarkup(
              <>{FooterMenu.render(FooterMenu.args)}</>
            ),
            secondary_content: ReactDOMServer.renderToStaticMarkup(
              <>{Copyright.render(Copyright.args)}</>
            ),
          })
        )}
      </div>
      {BackToTop.render({
        ...BackToTop.args,
        top_element: 'top',
      })}
    </>
  );
};

export default PageWrapper;
