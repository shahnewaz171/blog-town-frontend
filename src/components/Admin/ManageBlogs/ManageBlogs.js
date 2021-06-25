import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageBlogs = () => {
    return (
        <div className="relative min-h-screen md:flex">
            <Sidebar />
            <div>
                <h1 className="ml-5 pt-8 text-2xl font-semibold">Manage Blogs</h1>
            </div>
        </div>
    );
};

export default ManageBlogs;