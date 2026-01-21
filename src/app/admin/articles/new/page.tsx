"use client";

export const dynamic = 'force-dynamic';

import { useState } from "react";
import nextDynamic from "next/dynamic";
import AdminLayout from "@/components/admin/AdminLayout";
import { Save, Image as ImageIcon, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import "react-quill/dist/quill.snow.css";

// Dynamic import for React Quill to avoid SSR issues
const ReactQuill = nextDynamic(() => import("react-quill"), { ssr: false });

export default function NewArticle() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [category, setCategory] = useState("News");
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        setLoading(true);
        // Simulate saving
        setTimeout(() => {
            setLoading(false);
            alert("Article saved! (Database connection pending)");
        }, 1000);
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video', 'code-block'],
            ['clean']
        ],
        clipboard: {
            matchVisual: false,
        },
    };

    return (
        <AdminLayout>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Link href="/admin/articles" style={{ color: '#6b7280', display: 'flex', alignItems: 'center' }}>
                            <ArrowLeft size={20} />
                        </Link>
                        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827' }}>New Article</h1>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button style={{
                            padding: '0.75rem 1.5rem',
                            background: 'white',
                            border: '1px solid #d1d5db',
                            borderRadius: '0.5rem',
                            color: '#374151',
                            fontWeight: 500,
                            cursor: 'pointer'
                        }}>
                            Save Draft
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={loading}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: '#2563eb',
                                border: 'none',
                                borderRadius: '0.5rem',
                                color: 'white',
                                fontWeight: 500,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                            Publish
                        </button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                    {/* Main Editor */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                            <input
                                type="text"
                                placeholder="Article Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                style={{
                                    width: '100%',
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    border: 'none',
                                    outline: 'none',
                                    marginBottom: '1rem'
                                }}
                            />
                            <div className="quill-wrapper">
                                <ReactQuill
                                    theme="snow"
                                    value={content}
                                    onChange={setContent}
                                    modules={modules}
                                    style={{ height: '400px', marginBottom: '3rem' }}
                                />
                            </div>
                        </div>

                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: '#374151' }}>Excerpt</h3>
                            <textarea
                                value={excerpt}
                                onChange={(e) => setExcerpt(e.target.value)}
                                placeholder="Short description for search results and previews..."
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    padding: '0.75rem',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '0.5rem',
                                    resize: 'none',
                                    fontSize: '0.875rem'
                                }}
                            />
                        </div>
                    </div>

                    {/* Sidebar Settings */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Featured Image */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: '#374151' }}>Featured Image</h3>
                            <div style={{
                                border: '2px dashed #d1d5db',
                                borderRadius: '0.5rem',
                                padding: '2rem',
                                textAlign: 'center',
                                cursor: 'pointer',
                                color: '#6b7280'
                            }}>
                                <ImageIcon size={32} style={{ marginBottom: '0.5rem', opacity: 0.5 }} />
                                <p style={{ fontSize: '0.875rem' }}>Click to upload</p>
                            </div>
                        </div>

                        {/* Category */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: '#374151' }}>Category</h3>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '0.5rem',
                                    background: 'white',
                                    fontSize: '0.875rem'
                                }}
                            >
                                <option value="News">News</option>
                                <option value="Reviews">Reviews</option>
                                <option value="Business">Business</option>
                                <option value="Startups">Startups</option>
                                <option value="Tutorials">Tutorials</option>
                                <option value="Opinions">Opinions</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
