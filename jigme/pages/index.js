import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/NavBar/NavigationBar';
import {Button} from '@material-ui/core';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jigme T Namgyal</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.homepageContainer}>
                <Navbar/>
                
                <div className={styles.homeContent}>
                    <img className={styles.bodyone} src='body.svg' alt="body"/>
                    <div className={styles.announcement}>
                    <p>The site is currently under maintenance, sorry for the inconvenience caused :)</p>
                </div>
                    <img className={styles.hone} src='h1.svg' alt="h1"/>
                    
                    <h1
                        aria-label="Hi, I'm igme Tashi Namgyal."
                        className={styles.homeIntroContainer}>
                        <span>H</span>
                        <span>i</span>
                        <span>,
                        </span>
                        <br/>
                        <span>I</span>
                        <span>'</span>

                        <span>m</span>
                        <img src="J.svg" className={styles.jHolder}></img>
                        <span>i</span>
                        <span>g</span>
                        <span>m</span>
                        <span>e
                        </span>
                        <span> T</span>
                        <span>a</span>
                        <span>s</span>
                        <span>h</span>
                        <span>i
                        </span>
                        <br/>
                        <span>N</span>
                        <span>a</span>
                        <span>m</span>
                        <span>g</span>
                        <span>y</span>
                        <span>a</span>
                        <span>l</span>
                        <span>.</span>
                        <img className={styles.hone1} src='h1.svg' alt="h1"/>
                    </h1>
                    
                    <div className={styles.secondaryHomeContent}>
                        <p>Neophyte programmer</p>
                        <Button className={styles.homeBtn}>Contact Me</Button>
                    </div>
                    <img className={styles.bodytwo} src='bodyClose.svg' alt="body"/>
                    
                </div>
            </div>

        </div>
    )
}