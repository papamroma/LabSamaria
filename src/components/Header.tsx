"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Sun, Moon, Twitter, Linkedin, Github } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState("light");
    const pathname = usePathname();

    useEffect(() => {
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
        <header className={styles.headerWrapper}>
            {/* Top Bar: Logo + Ad Space */}
            <div className={styles.topBar}>
                <div className={`container ${styles.topBarContainer}`}>
                    <Link href="/" className={styles.logo}>
                        <Image src="/logo.png" alt="LabSamaria Logo" width={50} height={50} className={styles.logoImage} />
                        <span className={styles.logoText}>LabSamaria</span>
                    </Link>

                    {/* Top Ad Space */}
                    <div className={styles.topAd}>
                        <div style={{
                            width: '100%',
                            maxWidth: '728px',
                            height: '90px',
                            background: 'var(--card-bg)',
                            border: '1px dashed var(--border)',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--muted)',
                            fontSize: '0.85rem'
                        }}>
                            Advertisement (728x90)
                        </div>
                    </div>

                    {/* Social Icons + Theme Toggle */}
                    <div className={styles.topActions}>
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
                        <button className={styles.iconBtn} onClick={toggleTheme} aria-label="Toggle Theme">
                            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className={styles.navBar}>
                <div className={`container ${styles.navContainer}`}>
                    <nav className={styles.nav}>
                        <Link href="/category/news" className={styles.navLink} aria-current={pathname === '/category/news' ? 'page' : undefined}>
                            News
                        </Link>
                        <Link href="/category/reviews" className={styles.navLink} aria-current={pathname === '/category/reviews' ? 'page' : undefined}>
                            Reviews
                        </Link>
                        <Link href="/category/business" className={styles.navLink} aria-current={pathname === '/category/business' ? 'page' : undefined}>
                            Business
                        </Link>
                        <Link href="/category/amazing-reads" className={styles.navLink} aria-current={pathname === '/category/amazing-reads' ? 'page' : undefined}>
                            Amazing Reads
                        </Link>
                        <Link href="/category/startups" className={styles.navLink} aria-current={pathname === '/category/startups' ? 'page' : undefined}>
                            Startups
                        </Link>
                        <Link href="/category/tutorials" className={styles.navLink} aria-current={pathname === '/category/tutorials' ? 'page' : undefined}>
                            How To
                        </Link>
                        <Link href="/category/your-take" className={styles.navLink} aria-current={pathname === '/category/your-take' ? 'page' : undefined}>
                            Your Take
                        </Link>
                    </nav>

                    <div className={styles.navActions}>
                        <button className={styles.searchBtn} aria-label="Search">
                            <Search size={20} />
                        </button>
                        <button className={styles.mobileMenuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className={styles.mobileNav}>
                    <Link href="/category/news" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)} aria-current={pathname === '/category/news' ? 'page' : undefined}>News</Link>
                    <Link href="/category/reviews" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)} aria-current={pathname === '/category/reviews' ? 'page' : undefined}>Reviews</Link>
                    <Link href="/category/business" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)} aria-current={pathname === '/category/business' ? 'page' : undefined}>Business</Link>
                    <Link href="/category/amazing-reads" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)} aria-current={pathname === '/category/amazing-reads' ? 'page' : undefined}>Amazing Reads</Link>
                    <Link href="/category/startups" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)} aria-current={pathname === '/category/startups' ? 'page' : undefined}>Startups</Link>
                    <Link href="/category/tutorials" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)} aria-current={pathname === '/category/tutorials' ? 'page' : undefined}>How To</Link>
                    <Link href="/category/your-take" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)} aria-current={pathname === '/category/your-take' ? 'page' : undefined}>Your Take</Link>
                </div>
            )}
        </header>
    );
}
