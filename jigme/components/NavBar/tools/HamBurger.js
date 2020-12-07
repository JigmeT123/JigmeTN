import React from 'react'
import styles from './ham.module.css';
import {HiMenuAlt1} from 'react-icons/hi';

const HamBurger = ({click}) => {
    return (
        <HiMenuAlt1 className={styles.hamburger} onClick={click}/>
    )
}

export default HamBurger
