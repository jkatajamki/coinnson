import { css } from 'styled-components'

export const theme = {
  grid: {
    maxWidth: '92rem',
    gutter: '4rem'
  }
}

const sizes = {
  xxlarge: 1332,
  xlarge: 1200,
  large: 992,
  medium: 768,
  small: 576
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  const emSize = sizes[label] / 16;
  acc[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
