import { css } from '@emotion/react';

import { reset } from './reset';

export const globalStyle = css`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  #root {
    font-size: 1.6rem;
  }
`;
