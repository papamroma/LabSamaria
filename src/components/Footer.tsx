import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <Image src="/logo.png" alt="LabSamaria Logo" width={32} height={32} />
                            <span>LabSamaria</span>
                        </Link>
                        <p className={styles.description}>
                            Exploring the frontiers of Artificial Intelligence.
                            News, tutorials, and insights for the future.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="GitHub"><Github size={20} /></a>
                            <a href="#" aria-label="Email"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h4>Categories</h4>
                        <ul>
                            <li><Link href="/category/news">AI News</Link></li>
                            <li><Link href="/category/tutorials">Tutorials</Link></li>
                            <li><Link href="/category/reviews">Tools & Reviews</Link></li>
                            <li><Link href="/category/startups">Startups</Link></li>
                        </ul>
                    </div>

                    <div className={styles.links}>
                        <h4>Resources</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div className={styles.newsletter}>
                        <h4>Stay Updated</h4>
                        <p>Get the latest AI news delivered to your inbox.</p>
                        <form className={styles.form}>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} LabSamaria. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
