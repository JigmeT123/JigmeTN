import React from 'react'
import styles from './side.module.css';
import Link from 'next/link';
import {ImCross} from 'react-icons/im';
import {AiOutlineHome} from 'react-icons/ai';
import {DiYeoman} from 'react-icons/di';
import {ImTarget} from 'react-icons/im';
import {BsEye} from 'react-icons/bs';
import {GoMail} from 'react-icons/go';

const SideBar = ({close, show}) => {

    
    return (
        <div className={`${styles.sidebar} ${show && styles.open}`}>
            <div className={styles.sidebarHeader}>
                <div className={styles.imgHolder}>
                    <img src='logo1.svg' className={styles.logoJ}/>
                </div>
                
                <ImCross className={styles.cross} onClick={close}/>
            </div>
            <ul>
                <li><Link href="/"><a><AiOutlineHome /></a></Link></li>
                <li><Link href="/aboutMe"><a><DiYeoman /></a></Link></li>
                <li><Link href="/journey"><a><ImTarget /></a></Link></li>
                <li><Link href="/projects"><a><BsEye /></a></Link></li>
                <li><Link href="/contactMe"><a><GoMail /></a></Link></li>
            </ul>
        </div>
    )
}

export default SideBar
