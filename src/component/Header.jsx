import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/users">users</Link>
        </div>
    );
};

export default Header;