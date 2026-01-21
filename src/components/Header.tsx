"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
    Menu, X, Search, Sun, Moon, Twitter, Linkedin, Github,
    Zap, Newspaper, Star, Briefcase, Rocket, BookOpen, MessageCircle
} from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState("light");
    const [currentDate, setCurrentDate] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        // Theme initialization
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.setAttribute("data-theme", "dark");
        }

        // Real-time Date
        const updateDate = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
            setCurrentDate(now.toLocaleDateString('en-US', options));
        };
        updateDate();
        const interval = setInterval(updateDate, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
        }
    };

    const navItems = [
        { name: "What's New", href: "/category/whats-new", icon: Zap, color: "#f59e0b" }, // Amber
        { name: "News", href: "/category/news", icon: Newspaper, color: "#3b82f6" }, // Blue
        { name: "Reviews", href: "/category/reviews", icon: Star, color: "#ef4444" }, // Red
        { name: "Business", href: "/category/business", icon: Briefcase, color: "#10b981" }, // Emerald
        { name: "Amazing Reads", href: "/category/amazing-reads", icon: BookOpen, color: "#8b5cf6" }, // Violet
        { name: "Startups", href: "/category/startups", icon: Rocket, color: "#ec4899" }, // Pink
        { name: "How To", href: "/category/tutorials", icon: BookOpen, color: "#06b6d4" }, // Cyan
        { name: "Your Take", href: "/category/your-take", icon: MessageCircle, color: "#f97316" }, // Orange
    ];

    return (
        <header className={styles.headerWrapper}>
            {/* Top Bar: Logo + Ad Space + Date */}
            <div className={styles.topBar}>
                <div className={`container ${styles.topBarContainer}`}>
                    <Link href="/" className={styles.logo}>
                        <Image src="/logo.png" alt="LabSamaria Logo" width={50} height={50} className={styles.logoImage} />
                        <span className={styles.logoText}>LabSamaria</span>
                    </Link>

                    {/* Date Display (Visible on Desktop) */}
                    <div className={styles.dateDisplay}>
                        {currentDate}
                    </div>

                    {/* Top Ad Space (Hidden on mobile, visible on desktop) */}
                    <div className={styles.topAd}>
                        <div style={{
                            width: '100%',
                            maxWidth: '468px',
                            height: '60px',
                            background: 'var(--card-bg)',
                            border: '1px dashed var(--border)',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--muted)',
                            fontSize: '0.75rem'
                        }}>
                            Ad Space (468x60)
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
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={styles.navLink}
                                    aria-current={pathname === item.href ? 'page' : undefined}
                                >
                                    <div className={styles.iconCircle} style={{ backgroundColor: item.color }}>
                                        <Icon size={14} color="white" />
                                    </div>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className={styles.navActions}>
                        {isSearchOpen ? (
                            <form onSubmit={handleSearch} className={styles.searchForm}>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className={styles.searchInput}
                                    autoFocus
                                />
                                <button type="button" onClick={() => setIsSearchOpen(false)} className={styles.closeSearchBtn}>
                                    <X size={18} />
                                </button>
                            </form>
                        ) : (
                            <button className={styles.searchBtn} onClick={() => setIsSearchOpen(true)} aria-label="Search">
                                <Search size={20} />
                            </button>
                        )}

                        <button className={styles.mobileMenuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className={styles.mobileNav}>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMenuOpen(false)}
                                aria-current={pathname === item.href ? 'page' : undefined}
                            >
                                <div className={styles.iconCircle} style={{ backgroundColor: item.color, marginRight: '1rem' }}>
                                    <Icon size={16} color="white" />
                                </div>
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            )}
        </header>
    );
}
