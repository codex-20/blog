import React from 'react';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useColorMode } from 'theme-ui';

import Anchor from '@components/Anchor';
import Blockquote from '@components/Blockquote';
import Code from '@components/Code';
import Headings from '@components/Headings';
import HorizontalRule from '@components/HorizontalRule';
import Lists from '@components/Lists';
import Paragraph from '@components/Paragraph';
import Tables from '@components/Tables';
import { ImageZoom } from '@components/Image';
import Figcaption from '@components/Figcaption';
import TOC from '@components/TOC';

import mediaqueries from '@styles/media';
import { toKebabCase } from '@utils';

const components = {
  img: ImageZoom,
  a: Anchor,
  blockquote: Blockquote,
  h1: Headings.h2, // h1 reserved article title
  h2: Headings.h2,
  h3: Headings.h3,
  h4: Headings.h4,
  h5: Headings.h5,
  h6: Headings.h6,
  hr: HorizontalRule,
  ul: Lists.ul,
  ol: Lists.ol,
  p: Paragraph,
  code: Code.Prism,
  pre: Code.Pre,
  table: Tables.Table,
  thead: Tables.Head,
  th: Tables.HeadCell,
  td: Tables.Cell,
  figcaption: Figcaption,
  TOC: TOC,
};

interface MDXProps {
  content: React.ReactNode;
  headings: React.ReactNode;
}

const MDX: React.FC<MDXProps> = ({ content, headings, children, ...props }) => {
  const [colorMode] = useColorMode();

  return (
    <MDXProvider components={components}>
      <CustomBlockCSS>
        <MDXBody>
          <MDXRenderer
            headings={headings}
            isDark={colorMode === 'dark'}
            {...props}
          >
            {content}
          </MDXRenderer>
          {children}
        </MDXBody>
      </CustomBlockCSS>
    </MDXProvider>
  );
};

export default MDX;

const CustomBlockCSS = styled.div`
  div.update {
    background-color: ${(p) => p.theme.colors.track};
    border-left: 8px solid #cccc00;
    padding: 20px 20px;
    padding-bottom: 10px;
    line-height: 1.756;
    font-size: 18px;
    color: ${(p) => p.theme.colors.articleText};
    font-family: ${(p) => p.theme.fonts.sansSerif};
    transition: ${(p) => p.theme.colorModeTransition};
    margin: 0 auto 35px;
    width: 100%;
    max-width: 980px;

    b {
      font-weight: 800;
    }

    ${mediaqueries.desktop`
    max-width: 707px;
  `}

    ${mediaqueries.tablet`
    max-width: 526px;
    margin: 25px auto 25px;
  `};

    ${mediaqueries.phablet`
    padding: 10px 20px;
  `};

    div.custom-block-heading {
      font-weight: 800;
      font-size: 18px;
      padding-bottom: 10px;
    }

    div.custom-block-body {
      font-weight: inherit;
      margin-bottom: -10px;
    }
  }

  div.tldr {
    background-color: ${(p) => p.theme.colors.track};
    border-left: 8px solid #cc5200;
    padding: 20px 20px;
    padding-bottom: 10px;
    line-height: 1.756;
    font-size: 18px;
    color: ${(p) => p.theme.colors.articleText};
    font-family: ${(p) => p.theme.fonts.sansSerif};
    transition: ${(p) => p.theme.colorModeTransition};
    margin: 0 auto 35px;
    width: 100%;
    max-width: 980px;

    b {
      font-weight: 800;
    }

    ${mediaqueries.desktop`
    max-width: 707px;
  `}

    ${mediaqueries.tablet`
    max-width: 526px;
    margin: 25px auto 25px;
  `};

    ${mediaqueries.phablet`
    padding: 10px 20px;
  `};

    div.custom-block-heading {
      font-weight: 800;
      font-size: 18px;
      padding-bottom: 10px;
    }

    div.custom-block-body {
      font-weight: inherit;
      margin-bottom: -10px;
    }
  }
`;

const IMAGE_WIDTHS = {
  regular: '980px',
  large: '1004px',
  full: '100vw',
};

const ARTICLE_WIDTH = css`
  width: 100%;
  max-width: 980px;

  ${mediaqueries.desktop`
    max-width: 807px;
  `}

  ${mediaqueries.tablet`
    max-width: 786px;
  `};

  ${mediaqueries.phablet`
    padding: 0 20px;
  `};
`;

const HeadingsCSS = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 auto;
  }

  h1,
  h1 *,
  h2,
  h2 * {
    margin: 25px auto 18px;

    ${mediaqueries.tablet`
      margin: 30px auto 18px;
    `};
  }

  h3,
  h3 * {
    margin: 20px auto 10px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${ARTICLE_WIDTH};
  }
`;

const PrismCSS = (p) => css`
  .prism-code {
    overflow: auto;
    width: 100%;
    max-width: 944px;
    margin: 0 auto;
    padding: 38px 32px;
    font-size: 13px;
    margin: 15px auto 50px;
    border-radius: 5px;
    font-family: ${p.theme.fonts.monospace};
    background: ${p.theme.colors.prism.background};

    .code-title {
      background: #404040;
      padding: 0.5rem 1rem 0.75rem;
      position: absolute;
      left: 0px;
      color: #f3f7f9;
      font-weight: bold;
      width: 100%;
      margin-top: -38px;

      ${mediaqueries.desktop`
      left: 20px;
    `};

      ${mediaqueries.tablet`
        margin-top: -40px;
        left: 0;
    `};

      ${mediaqueries.phablet`
        margin-top: -44px;
        margin-bottom: 0px;
        left: 0;
      `};
    }

    .token-line {
      border-left: 3px solid transparent;

      ${Object.keys(p.theme.colors.prism)
        .map((key) => {
          return `.${toKebabCase(key)}{color:${p.theme.colors.prism[key]};}`;
        })
        .reduce((curr, next) => curr + next, ``)};

      & > span {
      }
    }

    .number-line {
      display: inline-block;
      width: 32px;
      user-select: none;
      opacity: 0.3;
      color: #dcd9e6;

      ${mediaqueries.tablet`
        opacity: 0;
        width: 0;
      `};
    }

    .token-line.highlight-line {
      margin: 0 -32px;
      padding: 0 32px;
      background: ${p.theme.colors.prism.highlight};
      border-left: 3px solid ${p.theme.colors.prism.highlightBorder};

      ${mediaqueries.tablet`
        margin: 0 -20px;
        padding: 0 20px;
      `};
    }

    .operator + .maybe-class-name {
      color: #ffcf74 !important;
    }

    .plain ~ .operator {
      color: #5fa8aa !important;
    }

    ${mediaqueries.desktop`
      left: -26px;
    `};

    ${mediaqueries.tablet`
      max-width: 726px;
      padding: 40px 20px;
      margin: 35px auto 25px;
      left: 0;
    `};

    ${mediaqueries.phablet`
      text-size-adjust: none;
      border-radius: 0;
      margin: 25px auto 25px;
      padding: 25px 20px;
      overflow: initial;
      width: unset;
      max-width: unset;
      float: left;
      min-width: 100%;
      overflow: initial;
      position: relative;
    `};
  }
`;

const ImageCSS = css`
  .gatsby-resp-image-background-image {
    display: none !important;
  }

  img {
    display: inline-block;
    position: relative;
    max-width: 100%;
    height: auto;
    z-index: 0;
    margin: 15px auto 50px;
    border-radius: 5px;

    ${mediaqueries.tablet`
      margin: 10px auto 45px;
    `};
  }

  div.Image__Small {
    display: inline-block;
    position: relative;
    max-width: 100%;
    height: auto;
    z-index: 0;
    margin: 15px auto 50px;
    border-radius: 5px;
    width: 100%;
    max-width: 880px;

    ${mediaqueries.tablet`
      margin: 10px auto 45px;
    `};

    ${mediaqueries.desktop`
      max-width: 707px;
    `}

    ${mediaqueries.tablet`
      max-width: 686px;
      margin: 0 auto 25px;
    `};

    ${mediaqueries.phablet`
      padding: 0 20px;
    `};
  }

  .Image__Container {
    text-align: center;
    &__left {
      display: inline-block;
      vertical-align: top;
      width: 30%;

      ${mediaqueries.desktop`
      width: 45%;
    `}
      ${mediaqueries.tablet`
      width: 60%;
    `};

      ${mediaqueries.phablet`
      width: 90%;
    `};
    }

    &__right {
      display: inline-block;
      width: 30%;

      ${mediaqueries.desktop`
      width: 45%;
    `}

      ${mediaqueries.tablet`
      width: 60%;
    `};

      ${mediaqueries.phablet`
      width: 90%;
    `};
    }
  }

  img.Image__With-Shadow {
    box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.15);
  }

  div.Image__Medium {
    position: relative;
    margin: 15px auto 50px;
    width: 100%;
    max-width: ${IMAGE_WIDTHS.large};

    ${mediaqueries.desktop_medium`
      left: -34px;
    `};

    ${mediaqueries.desktop`
      left: -26px;
    `};

    ${mediaqueries.tablet`
      border-radius: 0;
      left: 0;
      margin: 0 auto 25px;

      img {
        border-radius: 0;
      }
    `};
  }

  div.Image__Large {
    position: relative;
    left: -68px;
    width: ${IMAGE_WIDTHS.full};
    margin: 25px auto 60px;
    pointer-events: none;

    img {
      border-radius: 0;
    }

    ${mediaqueries.desktop`
      left: -53px;
    `};

    ${mediaqueries.tablet`
      left: 0;
      margin: 0 auto 25px;
    `};
  }
`;

/**
 * MDXBody
 * Here we're applying "global" selectors to make sure we maintain an article
 * body type feel. We're also applying all the Prism selecotors and styles within
 * the MDXBody.
 */
const MDXBody = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${HeadingsCSS}
  ${PrismCSS}
  ${ImageCSS}
`;
