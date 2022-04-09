import styled from 'styled-components'
import {
  fontSize,
  space,
  width,
  TypographyProps,
  SpaceProps,
  LayoutProps,
  lineHeight,
  fontWeight,
  fontStyle,
} from 'styled-system'

/**
 * @note All styled elements are in UPPERCASE
 */

export interface TextProps extends TypographyProps, SpaceProps, LayoutProps {
  alignCenter?: boolean
  alignRight?: boolean
  bold?: boolean
  black?: boolean
  clickable?: boolean;
  red?: boolean;
}

const H2 = styled.h2<TextProps>`
  line-height: 1.18;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  ${space};
  ${fontSize};
  ${width};

  @font-face {
    font-family: Avenir;
    src: url('/Avenir-Roman.otf') format('opentype');
  }
`

const P = styled.p<TextProps>`
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  font-size: 100%;
  background-color: none;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: ${({ black }) => (black ? '#000000' : '')};
  color: ${({ red }) => (red ? 'tomato' : '')};
  text-align: ${(props) => (props.alignCenter ? 'center' : '')};
  cursor: ${({ clickable }) => clickable ? 'pointer' : ''};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${fontStyle};
  ${space};

  @font-face {
    font-family: Avenir;
    src: url('/Avenir-Roman.otf') format('opentype');
  }
`

export { H2, P }
