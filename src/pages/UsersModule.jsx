import React from 'react';
import { Outlet } from 'react-router-dom';

const UsersModule = () => {
    return (
        <div>
            UsersModule
            <Outlet></Outlet>
        </div>
    );
};

export default UsersModule;