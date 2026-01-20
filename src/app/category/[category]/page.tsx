import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES } from "@/lib/data";
import styles from "./page.module.css";

// Helper to capitalize category name
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function CategoryPage({ params }: { params: { category: string } }) {
    const categoryName = capitalize(params.category);

    // Filter articles (mock logic: if category is 'all', show all, else filter)
    const filteredArticles = params.category === 'all'
        ? ARTICLES
        : ARTICLES.filter(article => article.category.toLowerCase() === params.category.toLowerCase());

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/" className={styles.backLink}>
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <h1 className={styles.title}>{categoryName}</h1>
                <p className={styles.subtitle}>
                    {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'} in this category
                </p>
            </div>

            {filteredArticles.length > 0 ? (
                <div className={styles.grid}>
                    {filteredArticles.map((article) => (
                        <ArticleCard key={article.id} {...article} />
                    ))}
                </div>
            ) : (
                <div className={styles.empty}>
                    <p>No articles found in this category.</p>
                    <Link href="/" className="btn btn-primary">Browse All Articles</Link>
                </div>
            )}
        </div>
    );
}
