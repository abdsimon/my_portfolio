
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './navbar.css' 
import {Link} from 'react-scroll'


export default function NavBar() {
  return (
    <nav className='navbar'>
        <div className='desktopMenu'>
           <Link className='desktopMenlistItem'>Home</Link>
           <Link className='desktopMenlistItem'>About</Link>
           <Link className='desktopMenlistItem'>Contact</Link>
        </div>
       
    </nav>
    
    
  )
}
