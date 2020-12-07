import styles from './navbar.module.css';
import Ham from './tools/HamBurger';

const Navbar = ({hamHandler}) => {
    return (
        <header className={styles.navBar}>
            <div className={styles.navBarHolder}>
                <div className={styles.cartHolder}>
                    <img className={styles.logoJ} src="logo1.svg" alt="myLogo"/>
                </div>
                <div className={styles.hamHolder}>
                    <Ham click={hamHandler}/>
                </div>
            </div>

        </header>
    )
}

export default Navbar
