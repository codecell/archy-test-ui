import styled from "styled-components";
import { space, SpaceProps } from "styled-system"


interface SharedElementProps extends SpaceProps {
 jcsb?: boolean
}


const FlexRow = styled.div<SharedElementProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ jcsb }) => jcsb ? 'space-between' : ''};
  ${space};
`

const PlusIcon = styled.img.attrs({
  src: '/assets/PlusIcon.svg',
  alt: 'Arrow down image'
})`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`

const DeleteIcon = styled.img.attrs({
  src: '/assets/Delete.svg',
  alt: 'Delete icon'
})`
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin: 0 auto;
` 

const LeftArrowIcon = styled.img.attrs({
  src: '/assets/LeftArrowt.svg',
  alt: 'Left Arrow image'
})`
  width: 20px;
  height: 40px;
  margin-right: 15px;
  cursor: pointer;
`


const Form = styled.form`
  border-radius: 3px;
  width: 100%;
  border: 1.2px solid #EEEEEE;
  margin: 1em 0 0;
  padding: 1.3em 1em;
`

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5em;
  font-size: 80%;
`

const Input = styled.input`
  display: block;
  border: 1.2px solid #EEEEEE;
  width: 100%;
  margin-bottom: 1em;
  padding: 0.5em 1em;
  border-radius: 3px;
  height: 2.5rem;

  :focus {
    outline: none;
  }
`

const SelectField = styled.select`
  width: 100%;
  border-radius: 4px;
  border: 1.2px solid #EEEEEE;
  font-size: 82.5%;
  // font-size: 75%;
  background-color: #fff;
  padding: 0.5em 1rem;
  height: 2.5rem;
  cursor: pointer;
  margin-bottom: 1em;
  max-width: 100%;
  ${space};
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('/assets/chevronDown.svg');
  background-repeat: no-repeat, repeat;

  /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
  background-position: right 0.4em top 50%, 0 0;
  /* icon size, then gradient */
  background-size: 1em auto, 100%;

  /* Hide arrow icon in IE browsers */
  ::-ms-expand {
    display: none;
  }

  /* Focus style */
  &:focus {
    /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    outline: none;
  }

  /* Set options to normal weight */
  option {
    font-weight: normal;
  }

  /* Support for rtl text, explicit support for Arabic and Hebrew */
  *[dir='rtl'],
  &:root:lang(ar),
  &:root:lang(iw) {
    background-position: left 1.4em top 50%, 0 0;
  }

  /* Disabled styles */
  &:disabled,
  [aria-disabled='true'] {
    background-image: url('/assets/ChevronDown.svg');
  }

  &:disabled:hover,
  [aria-disabled='true'] {
    border-color: #aaa;
  }

  @media screen and (min-width: 40em) {
    background-position: right 1.4em top 50%, 0 0;
  }

  @font-face {
    font-family: Avenir;
    src: url('/Avenir-Roman.otf') format('opentype');
  }
`

export {
  FlexRow, PlusIcon,
  LeftArrowIcon, Form,
  Label, Input, SelectField,
  DeleteIcon,
} 