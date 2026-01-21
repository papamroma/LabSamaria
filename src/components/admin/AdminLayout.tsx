"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    Image as ImageIcon,
    Settings,
    LogOut,
    Menu,
    X,
    Tags
} from "lucide-react";
import styles from "./AdminLayout.module.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname();

    // Close sidebar on mobile when navigating
    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsSidebarOpen(false);
        }
    }, [pathname]);

    const navItems = [
        { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Articles", href: "/admin/articles", icon: FileText },
        { name: "Categories", href: "/admin/categories", icon: Tags },
        { name: "Media Library", href: "/admin/media", icon: ImageIcon },
        { name: "Settings", href: "/admin/settings", icon: Settings },
    ];

    return (
        <div className={styles.adminContainer}>
            {/* Mobile Header */}
            <div className={styles.mobileHeader}>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={styles.menuBtn}>
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <span className={styles.brand}>LabSamaria Admin</span>
            </div>

            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
                <div className={styles.sidebarHeader}>
                    <h2 className={styles.brand}>LabSamaria</h2>
                    <p className={styles.role}>Administrator</p>
                </div>

                <nav className={styles.nav}>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                            >
                                <Icon size={20} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className={styles.sidebarFooter}>
                    <button className={styles.logoutBtn}>
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    );
}
