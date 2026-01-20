"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Sun, Moon, Twitter, Linkedin, Github } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Check system preference or local storage
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <Image src="/logo.png" alt="LabSamaria Logo" width={40} height={40} className={styles.logoImage} />
                    <span className={styles.logoText}>LabSamaria</span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <Link href="/category/news" className={styles.navLink}>News</Link>
                    <Link href="/category/reviews" className={styles.navLink}>Reviews</Link>
                    <Link href="/category/business" className={styles.navLink}>Business</Link>
                    <Link href="/category/amazing-reads" className={styles.navLink}>Amazing Reads</Link>
                    <Link href="/category/startups" className={styles.navLink}>Startups</Link>
                    <Link href="/category/tutorials" className={styles.navLink}>How To</Link>
                    <Link href="/category/your-take" className={styles.navLink}>Your Take</Link>
                </nav>

                <div className={styles.actions}>
                    {/* Social Media Icons */}
                    <div className={styles.socialIcons}>
                        <a href="https://twitter.com/labsamaria" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter size={18} />
                        </a>
                        <a href="https://linkedin.com/company/labsamaria" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://github.com/labsamaria" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={18} />
                        </a>
                    </div>

                    <button className={styles.iconBtn} aria-label="Search">
                        <Search size={20} />
                    </button>
                    <button
                        className={styles.iconBtn}
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className={styles.mobileNav}>
                    <Link href="/category/news" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>News</Link>
                    <Link href="/category/reviews" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Reviews</Link>
                    <Link href="/category/business" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Business</Link>
                    <Link href="/category/amazing-reads" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Amazing Reads</Link>
                    <Link href="/category/startups" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Startups</Link>
                    <Link href="/category/tutorials" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>How To</Link>
                    <Link href="/category/your-take" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Your Take</Link>
                </div>
            )}
        </header>
    );
}
