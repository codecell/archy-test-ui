import styled from 'styled-components'

const PageWrapper = styled.main`
  * {
    // padding: 0;
    // margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FAFAFA;
    width: 100vw;
  }

  @font-face {
    font-family: Avenir;
    src: url('/Avenir-Roman.otf') format('opentype');
  }
`

export default PageWrapper
