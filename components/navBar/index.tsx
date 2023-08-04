import styles from './style.module.css';

const listLinks = [
    { nome: 'Vasos', link: '/' },
    { nome: 'Plantas', link: '/plantas' },
]

const NavBar = () => {
    return (
        <div className={styles.header}>
            <div><img src="./smart-logo.png" alt="" /></div>
            <div className={styles.menu}>
                {listLinks.map((item, index) => (
                    <a href={item.link}>
                        <div className={styles.menuItem}>
                            <div className={styles.subMenuItem}>{item.nome}</div>
                            <div className={styles.barra}></div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default NavBar;