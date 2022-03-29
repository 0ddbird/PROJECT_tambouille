import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu: React.FC = () => {
  return (
        <div className="nav-menu">
            <NavLink to='/'
            className={({ isActive }) => isActive ? 'navlink nav-active' : 'navlink'}>
                Home
            </NavLink>
            <NavLink to='/ingredients'
            className={({ isActive }) => isActive ? 'navlink nav-active' : 'navlink'}>
                Produits de saison
            </NavLink>
            <NavLink to='/cuisiner'
            className={({ isActive }) => isActive ? 'navlink nav-active' : 'navlink'}>
                Cuisiner
            </NavLink>
            <NavLink to='/mes-ingredients'
            className={({ isActive }) => isActive ? 'navlink nav-active' : 'navlink'}>
                Mes ingrédients
            </NavLink>
        </div>
  )
}

export default Menu
