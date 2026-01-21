"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import { Plus, Edit, Trash2, Tag } from "lucide-react";

export default function CategoriesPage() {
    const categories = [
        { id: 1, name: "News", slug: "news", count: 15 },
        { id: 2, name: "Reviews", slug: "reviews", count: 8 },
        { id: 3, name: "Business", slug: "business", count: 5 },
        { id: 4, name: "Startups", slug: "startups", count: 3 },
        { id: 5, name: "Tutorials", slug: "tutorials", count: 12 },
        { id: 6, name: "Opinions", slug: "opinions", count: 4 },
    ];

    return (
        <AdminLayout>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827' }}>Categories</h1>
                <button style={{
                    padding: '0.75rem 1.5rem',
                    background: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <Plus size={18} />
                    Add Category
                </button>
            </div>

            <div style={{ background: 'white', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ background: '#f9fafb' }}>
                        <tr>
                            <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Name</th>
                            <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Slug</th>
                            <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Articles</th>
                            <th style={{ padding: '0.75rem 1.5rem', textAlign: 'right', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id} style={{ borderTop: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '1rem 1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{ padding: '0.5rem', background: '#eff6ff', borderRadius: '0.375rem', color: '#2563eb' }}>
                                            <Tag size={16} />
                                        </div>
                                        <span style={{ fontWeight: 500, color: '#111827' }}>{category.name}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '1rem 1.5rem', color: '#6b7280', fontFamily: 'monospace' }}>/{category.slug}</td>
                                <td style={{ padding: '1rem 1.5rem' }}>
                                    <span style={{ padding: '0.25rem 0.75rem', background: '#f3f4f6', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 500, color: '#374151' }}>
                                        {category.count} articles
                                    </span>
                                </td>
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
