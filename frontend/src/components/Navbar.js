import React from 'react'

const Navbar = () => {
    return (
        <nav id="navbar">
            <h1>Cristy</h1>
            <ul>
                <li>
                    <a href="#">
                        <i className="fas fa-shopping-cart nav-icons"></i>
                        Cart
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-user nav-icons"></i>
                        Sign In
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
