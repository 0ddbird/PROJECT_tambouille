import React from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './NavMenu'

const Header: React.FC = () => {
  return (
        <div className="header">

          <NavLink to='/'
          className="logo">
            <span className="logo-icon">🍲</span><h1 className="logo-name">Tambouille</h1>
          </NavLink>

            {<Menu />}
        </div>
  )
}

export default Header
