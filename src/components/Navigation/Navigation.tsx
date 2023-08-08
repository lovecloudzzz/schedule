import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.sass'
export const Navigation: React.FC = () => {
    return (
        <nav className={styles.navigation}>
            <Link to='/' className={styles.Link}><a>Основное</a></Link>
            <Link to='/my' className={styles.Link}><a>Личное</a></Link>
        </nav>
    );
};
