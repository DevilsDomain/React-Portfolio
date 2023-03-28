import Link from 'next/link';
import React from 'react'
import 'src/components/Navbar/Navbar.css';

function Navbar() {
  return (
    <div className="hamburger-menu z-40">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <ul className="menu__box">
        <li><Link className="menu__item" href={'/'}>HOME</Link></li>
        <li><Link className="menu__item" href={'/about'}>ABOUT</Link></li>
        <li><Link className="menu__item" href={'/projects'}>PROJECTS</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;