import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const openSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <>
            <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                <Link to="#" className="block p-4  text-white font-bold">BlogTown</Link>
                {/* Mobile Menu */}
                <button className="p-4 focus:outline-none focus:bg-gray-700" onClick={openSidebar}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </div>
            
            {/* Sidebar */}
            <div className={sidebar ? 'bg-green-900 text-green-100 w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out' : 'bg-green-900 text-green-100 w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'}>
                <Link to="/" className="text-white flex items-center space-x-2 px-4">
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} className="text-2xl" />
                    <span className="text-2xl font-extrabold">BlogTown</span>
                </Link>
                <div>
                    <Link to="admin-profile" className="block py-2.5 px-5 hover:bg-green-800 rounded transition duration-200">Profile</Link>
                    <Link to="/create-blog" className="block py-2.5 px-5 hover:bg-green-800 rounded transition duration-200">Add Blog</Link>
                    <Link to="/manage-blogs" className="block py-2.5 px-5 hover:bg-green-800 rounded transition duration-200">Manage Blogs</Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;