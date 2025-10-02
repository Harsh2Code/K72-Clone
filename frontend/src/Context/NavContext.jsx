import React, { useState } from 'react'
import { NavbarContext } from './NavbarContext'

const NavContext = ({children}) => {
  const [navOpen, setnavOpen] = useState(false)
  return (
    <div>
      <NavbarContext.Provider value= {[navOpen, setnavOpen]}>
        {children}
      </NavbarContext.Provider>
    </div>
  )
}

export default NavContext
