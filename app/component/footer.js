import footerStyle from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={footerStyle.footer}>
            <Link href="/" className={footerStyle.footerItem}>Home</Link>
            <Link href="/about" className={footerStyle.footerItem}>About</Link>
            <Link href="/services" className={footerStyle.footerItem}>Services</Link>
            <Link href="/contact" className={footerStyle.footerItem}>Contact</Link>
            <Link href="/privacy" className={footerStyle.footerItem}>Privacy</Link>
        </footer>
    );
}