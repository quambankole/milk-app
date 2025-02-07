import headerStyles from "./header.module.css";
import Link from "next/link" ;

export default function Header() {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.logo}>Logo</div>

            <nav className={headerStyles.nav}>
                <Link href="/" className={headerStyles.navItem}>Home</Link>
                <Link href="/gallery" className={headerStyles.navItem}>Gallery</Link>
                <Link href="/about" className={headerStyles.navItem}>About</Link>
                <Link href="/user" className={headerStyles.navItem}>User</Link>
                <Link href="/form" className={headerStyles.navItem}>Form</Link>
            </nav>
        </header>
    );
}