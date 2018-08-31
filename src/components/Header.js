import React from 'react';
import './Header.css';

import { Link } from 'react-router';

import PropTypes from 'prop-types';

const MenuItem = ({ active, children, to }) => (
    // <div className="menu-item">
    // <Link to={to} className="menu-item">
    <Link to={to} className={ `menu-item ${active ? 'active' : ''}`}>
        {children}
    </Link>
    // </div>
);

const Header = (props, context) => {
    const { router } = context;
    return (
        <div>
            <div className="logo">
                Oscar
            </div>
            <div className="menu">
                <MenuItem to={'/'} active={router.isActive('/', true)}>Home</MenuItem>
                <MenuItem to={'/about'} active={router.isActive('/about')}>Introduce</MenuItem>
                <MenuItem to={'/posts'} active={router.isActive('/posts')}>Post</MenuItem>
            </div>
        </div>
    );
};

Header.contextTypes = {
    router: PropTypes.object
}

export default Header;