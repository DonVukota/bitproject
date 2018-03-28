import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo">BitBook</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/'>Feed</Link></li>
                        <li><Link to='/People'>People</Link></li>
                        <li><Link to='/Profile'>Profile</Link></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}
export { Header };