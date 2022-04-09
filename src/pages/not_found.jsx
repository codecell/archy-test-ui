import styled from "styled-components"
import { H2 } from "../components/typography"


const NotFoundWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

function NotFound() {
    return (
        <NotFoundWrapper>
            <H2>Oops! No such page</H2>
        </NotFoundWrapper>
    )
}

export default NotFound