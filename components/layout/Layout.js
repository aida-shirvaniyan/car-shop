import styles from "./Layout.module.css"

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <h2>BOTOCAR</h2>
                <p>Choose and Buy your car</p>
            </header>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                <p> Next.js | BotoCar Project &copy;</p>
            </footer>
        </>
    );
};

export default Layout;
