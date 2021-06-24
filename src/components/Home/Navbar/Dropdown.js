import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-green-500' : 'hidden'} onClick={toggle}>
            <Link to="/home" className="p-4 hover:text-green-800 nav-item font-medium text-lg">Home</Link>
            <Link to="/blogs" className="p-4 hover:text-green-800 nav-item font-medium text-lg">Blogs</Link>
            <Link to="/create_post" className="p-4 hover:text-green-800 nav-item font-medium text-lg">Create Post</Link>
            <Link to="/contact" className="p-4 hover:text-green-800 nav-item font-medium text-lg">Contact</Link>
            <Link to="#" className="pb-4">
                <button className="text-white ml-4 bg-green-800 hover:bg-green-700 py-2 px-4 rounded">Login</button>
            </Link>
        </div>
    );
};

export default Dropdown;