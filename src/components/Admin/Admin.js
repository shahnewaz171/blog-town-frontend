import React from 'react';
import AdminProfile from './AdminProfile/AdminProfile';
import Sidebar from './Sidebar/Sidebar';

const Admin = () => {

    return (
        <div className="relative min-h-screen md:flex">
            <Sidebar />
            <div>
                <AdminProfile />
            </div>
        </div>
    );
};

export default Admin;