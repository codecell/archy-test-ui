import React from 'react'

import {
  NavWrapper
} from './navbar.styles'
import { P } from '../typography'


const Navbar = ():JSX.Element => {
  return (
    <NavWrapper>
      <P black bold fontSize={["100%", "140%"]}>Archimedes Challenge</P>
    </NavWrapper>
  )
}

export default Navbar