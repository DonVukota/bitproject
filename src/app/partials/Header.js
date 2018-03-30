import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header >
            <nav>
                <div className="nav-wrapper headCss">
                    <a id="logoc" className="brand-logo">BitBook</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/' id="feedc">Feed</Link></li>
                        <li ><Link to='/People' id="peoplec">People</Link></li>
                        <li ><Link to='/Profile' id="profilec">Profile</Link></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}
export { Header };