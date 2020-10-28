import React, { useState } from 'react'
import styles from './side.module.css';
import Link from 'next/link';
import {ImCross} from 'react-icons/im';
import {AiOutlineHome} from 'react-icons/ai';
import {DiYeoman} from 'react-icons/di';
import {ImTarget} from 'react-icons/im';
import {BsEye} from 'react-icons/bs';
import {GoMail} from 'react-icons/go';
import {motion} from 'framer-motion';

const SideBar = ({close, show}) => {
   
    return (
        <motion.div 
        animate={{
            x: '-100%',
        }}
        transition = {{
            ease: "easeOut",
            duration: 0.3,
        }}
        className={`${styles.sidebar} ${show && styles.open}`}>
            <div className={styles.sidebarHeader}>
                <div className={styles.imgHolder}>
                    <img src='logo1.svg' className={styles.logoJ}/>
                </div>
                <ImCross className={styles.cross} onClick={close} />
            </div>
            <ul>
                <li>
                    <Link href="/">
                        <a><AiOutlineHome/> <span>Home</span></a>
                       
                    </Link>
                </li>
                <li>
                    <Link href="/aboutMe">
                        <a><DiYeoman/><span>About Me</span></a>
                        
                    </Link>
                </li>
                <li>
                    <Link href="/journey">
                        <a><ImTarget/> <span>Journey</span></a>
                       
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a><BsEye/><span>Projects</span></a>
                        
                    </Link>
                </li>
                <li>
                    <Link href="/contactMe">
                        <a><GoMail/> <span>Contact Me</span></a>
                       
                    </Link>
                </li>
            </ul>
        </motion.div>
    )
}

export default SideBar
