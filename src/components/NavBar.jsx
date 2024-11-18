import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    
    return (
        <nav className="bg-blue-600 text-white shadow-md rounded-b-lg z-10 sticky top-0">
            <div className="container mx-auto flex items-center justify-between px-6 py-3">
                {/* Company Name */}
                <div className="text-xl font-bold">
                    <Link to="/">Neown Books</Link>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link to="/Home">
                        Home
                    </Link>
                    <Link to="/Books">
                        Books
                    </Link>
                    <Link to="/Recommendations">
                        Recommendations
                    </Link>
                    <Link to="/Contact-us">
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
