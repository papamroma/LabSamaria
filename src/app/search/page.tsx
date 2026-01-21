"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES } from "@/lib/data";
import styles from "./page.module.css";
import { Search, Calendar, User } from "lucide-react";

function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q")?.toLowerCase() || "";
    const [results, setResults] = useState<typeof ARTICLES>([]);

    useEffect(() => {
        if (query) {
            const filtered = ARTICLES.filter(
                (article) =>
                    article.title.toLowerCase().includes(query) ||
                    article.excerpt.toLowerCase().includes(query) ||
                    article.category.toLowerCase().includes(query)
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <div className="container" style={{ padding: "2rem 1rem" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1.5rem" }}>
                Search Results for "{query}"
            </h1>

            {results.length === 0 ? (
                <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--muted)" }}>
                    <Search size={48} style={{ marginBottom: "1rem", opacity: 0.5 }} />
                    <p>No articles found matching your search.</p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {results.map((article) => (
                        <Link key={article.id} href={`/article/${article.slug}`} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className={styles.image}
                                />
                                <span className={styles.category}>{article.category}</span>
                            </div>
                            <div className={styles.content}>
                                <h2 className={styles.title}>{article.title}</h2>
                                <p className={styles.excerpt}>{article.excerpt}</p>
                                <div className={styles.meta}>
                                    <span className={styles.date}>
                                        <Calendar size={14} />
                                        {new Date(article.date).toLocaleDateString()}
                                    </span>
                                    <span className={styles.author}>
                                        <User size={14} />
                                        {article.author}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchResults />
        </Suspense>
    );
}
