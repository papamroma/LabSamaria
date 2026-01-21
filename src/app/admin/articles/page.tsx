"use client";

export const dynamic = 'force-dynamic';

import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";
import { Plus, Search, Edit, Trash2 } from "lucide-react";

export default function ArticlesList() {
    // Placeholder data
    const articles = [
        { id: 1, title: "The Future of AI in 2026", category: "News", status: "Published", date: "Jan 20, 2026" },
        { id: 2, title: "Review: GPT-5 vs Claude 4", category: "Reviews", status: "Draft", date: "Jan 19, 2026" },
    ];

    return (
        <AdminLayout>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827' }}>Articles</h1>
                <Link href="/admin/articles/new" style={{
                    padding: '0.75rem 1.5rem',
                    background: '#2563eb',
                    color: 'white',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <Plus size={18} />
                    New Article
                </Link>
            </div>

            <div style={{ background: 'white', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                {/* Search Bar */}
                <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
                    <div style={{ position: 'relative', maxWidth: '400px' }}>
                        <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            style={{
                                width: '100%',
                                padding: '0.625rem 1rem 0.625rem 2.5rem',
                                border: '1px solid #d1d5db',
                                borderRadius: '0.5rem',
                                fontSize: '0.875rem'
                            }}
                        />
                    </div>
                </div>

                {/* Table */}
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ background: '#f9fafb' }}>
                        <tr>
                            <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Title</th>
                            <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Category</th>
                            <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Status</th>
                            <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Date</th>
                            <th style={{ padding: '0.75rem 1.5rem', textAlign: 'right', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article) => (
                            <tr key={article.id} style={{ borderTop: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '1rem 1.5rem', color: '#111827', fontWeight: 500 }}>{article.title}</td>
                                <td style={{ padding: '1rem 1.5rem' }}>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        background: '#eff6ff',
                                        color: '#1d4ed8',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: 500
                                    }}>
                                        {article.category}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem 1.5rem' }}>
                                    <span style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.375rem',
                                        fontSize: '0.875rem',
                                        color: article.status === 'Published' ? '#059669' : '#d97706'
                                    }}>
                                        <span style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            background: article.status === 'Published' ? '#059669' : '#d97706'
                                        }}></span>
                                        {article.status}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem 1.5rem', color: '#6b7280', fontSize: '0.875rem' }}>{article.date}</td>
                                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                        <button style={{ padding: '0.5rem', color: '#4b5563', background: 'none', border: 'none', cursor: 'pointer' }}>
                                            <Edit size={18} />
                                        </button>
                                        <button style={{ padding: '0.5rem', color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}>
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
