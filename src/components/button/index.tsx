import styled from 'styled-components'
import {
  fontSize,
  space,
  SpaceProps,
  FontSizeProps,
  ButtonStyleProps,
} from 'styled-system'

interface Btn extends SpaceProps, FontSizeProps, ButtonStyleProps {
  whiteBg?: boolean;
  fullWidth?: boolean;
  flexD?: boolean;
}

const Button = styled.button<Btn>`
  padding: 0.5128em 1.65em 0.5128em 1.6878em;
  border-radius: 6px;
  color: #FFFFFF;
  background-color: #00B8C5;
  cursor: pointer;
  border: 1.2px solid #00B8C5;
  font-weight: 500;
  font-stretch: normal;
  box-shadow: 0 15px 26px 0 rgba(11, 17, 96, 0.11);
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  position: relative;
  white-space: nowrap;
  height: 2.875em;
  font-size: 87.5%;
  display: ${({ flexD }) => flexD ? "flex" : ''};
  align-items: center;
  fullWidth?: boolean;
  width: ${({ fullWidth }) => fullWidth ? "100%" : ''};
  ${fontSize};
  ${space};

  @font-face {
    font-family: Avenir;
    src: url('/Avenir-Roman.otf') format('opentype');
  }

  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    transition: 250ms ease-in-out;
  }

  &:hover {
    ::after {
      background-color: rgba(3, 7, 67, 0.13);
    }
  }
`

export default Button
