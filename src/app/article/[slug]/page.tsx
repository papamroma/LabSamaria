import Link from "next/link";
import styles from "./page.module.css";
import { ArrowLeft } from "lucide-react";
import { ARTICLES } from "@/lib/data";

export default function ArticlePage({ params }: { params: { slug: string } }) {
    const article = ARTICLES.find(a => a.slug === params.slug);

    if (!article) {
        return (
            <div className={styles.container} style={{ textAlign: 'center', padding: '5rem 0' }}>
                <h1>Article Not Found</h1>
                <Link href="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <article className={styles.container}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', marginBottom: '2rem' }}>
                <ArrowLeft size={16} /> Back to Home
            </Link>

            <header className={styles.header}>
                <div className={styles.meta}>
                    <span className={styles.category}>{article.category}</span>
                    <span>•</span>
                    <span className={styles.date}>{article.date}</span>
                </div>
                <h1 className={styles.title}>{article.title}</h1>
                <div className={styles.author}>
                    <span>By {article.author}</span>
                </div>
            </header>

            <div className={styles.featuredImage}>
                <span>Featured Image: {article.title}</span>
            </div>

            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className={styles.tags}>
                {article.tags.map((tag: string) => (
                    <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
            </div>
        </article>
    );
}
