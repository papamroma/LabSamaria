import Link from "next/link";
import styles from "./ArticleCard.module.css";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    author: string;
    slug: string;
    image?: string; // Optional for now
}

export default function ArticleCard({ title, excerpt, category, date, author, slug }: ArticleCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.content}>
                <div className={styles.meta}>
                    <span className={styles.category}>{category}</span>
                    <span className={styles.date}>{date}</span>
                </div>
                <h3 className={styles.title}>
                    <Link href={`/article/${slug}`}>{title}</Link>
                </h3>
                <p className={styles.excerpt}>{excerpt}</p>
                <div className={styles.footer}>
                    <span className={styles.author}>By {author}</span>
                    <Link href={`/article/${slug}`} className={styles.readMore}>
                        Read More <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </article>
    );
}
