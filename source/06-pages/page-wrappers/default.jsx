import React from 'react';
import ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';

import SkiplinksTwig from '../../04-components/skiplinks/skiplinks.twig';
import HeaderTwig from '../../02-uswds/header/header.twig';
import BreadcrumbTwig from '../../03-layouts/breadcrumb/breadcrumb.twig';
import ContentTwig from '../../03-layouts/content/content.twig';
import FooterTwig from '../../02-uswds/footer/footer.twig';
import NavTwig from '../../02-uswds/nav/nav.twig';
import SecondaryTwig from '../../02-uswds/nav/secondary.twig';
import { Banner } from '../../02-uswds/banner/banner.stories.jsx';
import { NavBar } from '../../02-uswds/navbar/navbar.stories.jsx';
import { AccountMenu } from '../../04-components/menu/menu--account/menu--account.stories.jsx';
import { MainMenu } from '../../04-components/menu/menu--main/menu--main.stories.jsx';
import { Breadcrumb } from '../../04-components/breadcrumb/breadcrumb.stories.jsx';
import { FooterMenu } from '../../04-components/menu/menu--footer/menu--footer.stories.jsx';
import { Copyright } from '../../04-components/copyright/copyright.stories.jsx';
import { BackToTop } from '../../04-components/back-to-top/back-to-top.stories.jsx';

const PageWrapper = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <>
      {parse(SkiplinksTwig())}
      <div className="l-site-container">
        {Banner(Banner.args)}
        {parse(
          HeaderTwig({
            is_extended: true,
            header_content: ReactDOMServer.renderToStaticMarkup(
              <>
                {NavBar(NavBar.args)}
                {parse(
                  NavTwig({
                    label: 'Primary navigation',
                    is_extended: true,
                    nav_content: ReactDOMServer.renderToStaticMarkup(
                      <>
                        {MainMenu(MainMenu.args)}
                        {parse(
                          SecondaryTwig({
                            secondary_content: ReactDOMServer.renderToStaticMarkup(
                              <>
                                {AccountMenu(AccountMenu.args)}
                              </>
                            )
                          })
                        )}
                     </>
                    )
                  })
                )}
              </>
            )
          })
        )}
        {parse(
          BreadcrumbTwig({
            has_constrain: false,
            breadcrumb_content: ReactDOMServer.renderToStaticMarkup(
              <>
                {Breadcrumb(Breadcrumb.args)}
              </>
            ),
          })
        )}
        <main id="main" className="c-main" role="main" tabIndex="-1">
          {parse(
            ContentTwig({
              has_constrain: true,
              content_content: ReactDOMServer.renderToStaticMarkup(
                <>
                  {children}
                </>
              ),
            })
          )}
        </main>
        {parse(
          FooterTwig({
            has_constrain: true,
            has_back_to_top: true,
            primary_content: ReactDOMServer.renderToStaticMarkup(
              <>
                {FooterMenu(FooterMenu.args)}
              </>
            ),
            secondary_content: ReactDOMServer.renderToStaticMarkup(
              <>
                {Copyright(Copyright.args)}
              </>
            ),
          })
        )}
      </div>
      {BackToTop({
        ...BackToTop.args,
        top_element: 'top',
        is_demo: false
      })}
    </>
  );
};

export default PageWrapper;
