import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/NavBar/NavigationBar';
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jigme T Namgyal</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.homepageContainer}>
                <Navbar/>
            </div>

        </div>
    )
}
