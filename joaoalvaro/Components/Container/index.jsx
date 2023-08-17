import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Lorem Ipsum</span>
            </Link>
        </header>
    )    
}

export default Header