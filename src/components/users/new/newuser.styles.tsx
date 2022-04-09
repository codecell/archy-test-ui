import styled from "styled-components";

const NewUserWrapper = styled.section`
  width: 90%;
  padding: 8em 5%;
  margin: 0 auto;

  @media screen and (min-width: 40em) {
    width: 40%;
    padding: 8% 5%;
  }
`

const PageHeader = styled.header`
  display: flex;
  align-items: center;
`


export {
  NewUserWrapper,
  PageHeader,
}