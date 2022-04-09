import styled from "styled-components";

const PatchUserContainer = styled.section`
  width: 100vw;
  background-color: #fafafa;
  z-index: 300;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`

const PatchUserWrapper = styled.section`
  width: 90%;
  padding: 8em 5%;
  margin: 0 auto;

  @media screen and (min-width: 40em) {
    width: 40%;
    padding: 8% 5%;
  }
`

export {
  PatchUserWrapper, PatchUserContainer,
}