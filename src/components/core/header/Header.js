import React from 'react';

import { Nav } from './components/nav';
import { Logo } from './components/logo';
import { Contacts } from './components/contacts';

import styles from './styles.scss';

const Header = () => (
    <div className={styles.header}>
        <Nav />
        <Logo />
        <Contacts />
    </div>
);

export default Header;
