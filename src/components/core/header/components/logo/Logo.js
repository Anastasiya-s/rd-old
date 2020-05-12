import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from './img/header-logo.png';

const Logo = () => (
    <Link to="/">
        <img src={logoImage} />
    </Link>
);

export default Logo;
