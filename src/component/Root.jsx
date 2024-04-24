import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import App from '../App';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
        </div>
    );
};

export default Root;