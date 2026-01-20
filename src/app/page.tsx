import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import styles from "./page.module.css";
import { ARTICLES, TRENDING_POSTS } from "@/lib/data";

const FEATURED_POST = ARTICLES[0];
const LATEST_POSTS = ARTICLES.slice(1);

export default function Home() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <h1>Unlocking the Potential of Artificial Intelligence</h1>
            <p>{FEATURED_POST.excerpt}</p>
            <Link href={`/article/${FEATURED_POST.slug}`} className="btn btn-primary">
              Read Featured Article <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </div>
          <div className={styles.heroImage}>
            {/* Placeholder for Hero Image */}
            <span>Featured Image Placeholder</span>
          </div>
        </div>
      </section>

      <div className="container">
        <div className={styles.section}>
          <div className={styles.mainGrid}>

            {/* Latest Posts */}
            <div className={styles.latest}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Latest Insights</h2>
                <Link href="/category/all" className={styles.viewAll}>
                  View All <ArrowRight size={16} />
                </Link>
              </div>
              <div className="grid-cols-1" style={{ display: 'grid', gap: '2rem' }}>
                {LATEST_POSTS.map((post) => (
                  <ArticleCard key={post.id} {...post} />
                ))}
              </div>
            </div>

            {/* Trending Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.trending}>
                <h3 style={{ marginBottom: '1.5rem' }}>Trending Now</h3>
                <ul className={styles.trendingList}>
                  {TRENDING_POSTS.map((post, index) => (
                    <li key={post.id} className={styles.trendingItem}>
                      <span className={styles.trendingNumber}>0{index + 1}</span>
                      <div className={styles.trendingContent}>
                        <h4>
                          <Link href={`/article/${post.slug}`}>{post.title}</Link>
                        </h4>
                        <span className={styles.trendingMeta}>{post.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Monetization / Ad Space */}
              <div style={{
                marginTop: '2rem',
                padding: '2rem',
                background: 'var(--card-bg)',
                border: '1px dashed var(--border)',
                borderRadius: 'var(--radius)',
                textAlign: 'center',
                color: 'var(--muted)'
              }}>
                <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Advertisement</p>
                <div style={{ height: '250px', background: 'rgba(0,0,0,0.05)', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Ad Space (300x250)
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
}
