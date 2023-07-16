import styles from "/styles/layout.module.css";

const Layout = ({children}) => {
    return(
        <div className={styles.layoutContainer}>
            {children}
        </div>
    )
}

export default Layout;