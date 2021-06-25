import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({toggle}) => {
    return (
        <div className="pb-5">
            <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm md:px-20 font-mono">
                <Link to="/home" className="text-2xl font-extrabold nav-title">BlogTown</Link>
                <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </div>
                <div className="md:block hidden">
                    <Link to="/home" className="p-4 hover:text-green-800 nav-item font-medium text-lg">Home</Link>
                    <Link to="/blogs" className="p-4 hover:text-green-800 nav-item font-medium text-lg">Blogs</Link>
                    <Link to="/createPost" className="p-4 hover:text-green-800 nav-item font-medium text-lg">Create Post</Link>
                    <Link to="/contact" className="p-4 hover:text-green-800 nav-item font-medium text-lg">Contact</Link>
                    <Link to="#">
                        <button className="text-white ml-4 bg-green-800 hover:bg-green-700 py-2 px-4 rounded">Login</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;