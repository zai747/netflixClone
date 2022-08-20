import React from 'react'
import { Link } from 'react-router-dom'
import './navb.css'

function Navb() {
  return (
    <div>
    <div class="page">
  <nav class="page__menu page__custom-settings menu">
    <Link class="menu__group menu__link r-link text-underlined" to='/originals' >Originals</Link>
    <Link class="menu__group menu__link r-link text-underlined" to='/popular' >Popular</Link>
    <Link class="menu__group menu__link r-link text-underlined" to='/latest' >Latest</Link>
  </nav>
</div>
</div>
  )
}

export default Navb