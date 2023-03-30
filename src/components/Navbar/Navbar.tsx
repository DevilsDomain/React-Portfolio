import Link from 'next/link';
import React from 'react'
import 'src/components/Navbar/Navbar.css';

interface NavbarType {
  mode?: string
}

function Navbar({mode}: NavbarType) {
  return (
    <div className="z-40">
        <div className='md:hidden'>
            <input id="menu__toggle" type="checkbox" />
            <label className={`menu__btn ${mode}-2`} htmlFor="menu__toggle">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                <path d="M29.9531 3.75L33.2813 7.07812L17.8594 22.5L33.2813 37.9219L29.9531 41.25L11.2031 22.5L29.9531 3.75Z" fill="#232323"/>
                </g>
            </svg>

            </label>
            <ul className={`menu__box ${mode}`}>
                <li><Link className={`menu__item ${mode}`} href={'/'}>HOME</Link></li>
                <li><Link className={`menu__item ${mode}`} href={'/about'}>ABOUT</Link></li>
                <li><Link className={`menu__item ${mode}`} href={'/projects'}>PROJECTS</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;