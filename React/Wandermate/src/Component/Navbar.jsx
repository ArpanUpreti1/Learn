// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                <Link to ="/"> <span className="text-xl tracking-loose text-orange-500  font-bold">Wandermate.</span></Link>
                </div>
                <ul className="flex ml-14 space-x-12 text-xl">
                    <li><Link to = "/home">Home</Link></li>
                    <li><Link to ="/hotel">Hotels</Link></li>
                    <li><Link to ="/Destination">Destination</Link></li>
                    <li><Link to ="/travelpac">Travel Package</Link></li>
                </ul>
                <div className="flex justify-center space-x-12 items-center">
                    <Link to="/sign-in" className="bg-orange-500 h-9 w-18 p-1 border rounded-md text-xl">Sign In</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
