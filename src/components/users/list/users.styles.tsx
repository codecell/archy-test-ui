import styled from "styled-components";

const UsersListWrapper = styled.section`
  width: 100%;
  padding: 8em 5%;
  margin: 0 auto;
  overflow-x: scroll;
  position: relative;

  @media screen and (min-width: 40em) {
    width: 60%;
    padding: 10% 5%;
  }
`

const UsersListTable = styled.table`
  border-radius: 3px;
  width: 100%;
  border: 1.2px solid #EEEEEE;
  border-bottom: none;
  margin: 2em 0 0;

  tr {
    cursor: pointer;
    max-width: 100%;
  }
`

const Th = styled.th`
  background-color: #FFFFFF;
  padding: 0.5em 1.5em;
  color: #808080;
  border-bottom: 1.2px solid #EEEEEE;
  font-size: 70%;
  text-align: left;


  @media screen and (min-width: 40em) {
    padding: 1.1em 3em;
  }
`

interface TdProp {
  noTalign?: boolean;
}

const Td = styled.td<TdProp>`
  background-color: #FFFFFF;
  padding: 0.75em 1.3em;
  text-align: ${({ noTalign }) => noTalign ? "center" : "left"};
  border-bottom: 1.2px solid #EEEEEE;
  color: #202020;
  font-weight: bold;
  font-size: 90%;
  white-space: nowrap;

  @media screen and (min-width: 40em) {
    padding: 1.3em 2em;
  }
`

const ArrowDown = styled.img.attrs({
  src: '/assets/ChevronDown.svg',
  alt: 'Arrow down image'
})`
  width: 10px;
  height: 10px;
  margin-left: 5px;
`


export {
  UsersListTable, Th,
  Td, ArrowDown, UsersListWrapper,
}