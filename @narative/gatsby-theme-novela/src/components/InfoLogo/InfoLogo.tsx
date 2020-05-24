import React from 'react';

import { Icon } from '@types';
import styled from '@emotion/styled';

import mediaqueries from '@styles/media';

const InfoLogo: Icon = ({ fill = '#000' }) => {
  return (
    <LogoContainer>
      <svg
        width="24"
        height="24"
        enable-background="new 0 0 31.939 31.939"
        viewBox="0 0 31.939 31.939"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo"
      >
        <path
          fill={fill}
          d="m15.58 18.332h-.777c-.403 0-.73-.326-.73-.729 0-.149.06-.293.167-.397.452-.439.832-1.03 1.107-1.667.056.041.116.071.184.071.436 0 .95-.964.95-1.621s-.061-1.19-.498-1.19c-.052 0-.106.009-.162.023-.031-1.782-.481-4.005-3.202-4.005-2.839 0-3.17 2.219-3.202 3.999-.04-.008-.08-.017-.117-.017-.437 0-.497.533-.497 1.19s.512 1.621.949 1.621c.054 0 .104-.015.151-.042.274.627.649 1.206 1.094 1.641.107.104.167.246.167.396 0 .403-.327.73-.73.73h-.778c-1.662 0-3.009 1.347-3.009 3.009v.834c0 .524.425.95.95.95h10.042c.524 0 .949-.426.949-.95v-.834c.001-1.664-1.346-3.012-3.008-3.012z"
        />
        <path
          fill={fill}
          d="m24.589 10.077h-8.421c.243.538.417 1.2.489 2.019.18.111.315.29.425.506h7.507c.39 0 .704-.315.704-.704v-1.117c0-.388-.314-.704-.704-.704z"
        />
        <path
          fill={fill}
          d="m24.589 14.678h-7.335c-.199.752-.689 1.539-1.368 1.749-.02.037-.043.069-.064.106v.67h8.766c.389 0 .704-.315.704-.705v-1.116c.001-.389-.313-.704-.703-.704z"
        />
        <path
          fill={fill}
          d="m24.589 19.279h-5.726c.378.598.6 1.303.6 2.062v.463h5.126c.39 0 .704-.315.704-.704v-1.117c0-.389-.314-.704-.704-.704z"
        />
        <path
          fill={fill}
          d="m27.615 3.057h-23.29c-2.389 0-4.325 1.936-4.325 4.325v17.176c0 2.39 1.936 4.325 4.325 4.325h23.29c2.389 0 4.324-1.936 4.324-4.325v-17.176c0-2.389-1.935-4.325-4.324-4.325zm2.283 21.501c0 1.259-1.024 2.283-2.283 2.283h-23.29c-1.259 0-2.283-1.024-2.283-2.283v-17.176c0-1.259 1.024-2.283 2.283-2.283h23.29c1.259 0 2.283 1.024 2.283 2.283z"
        />
      </svg>
    </LogoContainer>
  );
};

export default InfoLogo;

const LogoContainer = styled.div`
  ${mediaqueries.tablet`
  .Logo {
    display: inline-flex;
    transform: scale(0.708);
    margin-left: 10px;

    &:hover {
      opacity: 0.5;
    }
  `}
  }
`;