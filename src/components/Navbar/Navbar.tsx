import Link from 'next/link';
import React from 'react'
import 'src/components/Navbar/Navbar.css';

function Navbar() {
  return (
    <div className="hamburger-menu z-40">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
        <path d="M29.9531 3.75L33.2813 7.07812L17.8594 22.5L33.2813 37.9219L29.9531 41.25L11.2031 22.5L29.9531 3.75Z" fill="#232323"/>
        </g>
       </svg>

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