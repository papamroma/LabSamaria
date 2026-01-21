"use client";

import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Upload, Image as ImageIcon, Trash2, Copy, Check } from "lucide-react";
import Image from "next/image";

export default function MediaLibrary() {
    const [uploading, setUploading] = useState(false);
    const [copiedId, setCopiedId] = useState<number | null>(null);

    // Placeholder data
    const images = [
        { id: 1, url: "/logo.png", name: "logo.png", size: "45 KB", date: "Jan 20, 2026" },
        // Add more placeholder images if needed
    ];

    const handleUpload = () => {
        setUploading(true);
        setTimeout(() => {
            setUploading(false);
            alert("Image uploaded! (Database connection pending)");
        }, 1000);
    };

    const copyUrl = (id: number, url: string) => {
        navigator.clipboard.writeText(url);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <AdminLayout>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827' }}>Media Library</h1>
                <button
                    onClick={handleUpload}
                    disabled={uploading}
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
                    <Upload size={18} />
                    Upload Image
                </button>
            </div>

            {/* Upload Area */}
            <div style={{
                border: '2px dashed #d1d5db',
                borderRadius: '0.75rem',
                padding: '3rem',
                textAlign: 'center',
                background: 'white',
                marginBottom: '2rem',
                cursor: 'pointer',
                transition: 'border-color 0.2s'
            }}>
                <div style={{
                    width: '64px',
                    height: '64px',
                    background: '#eff6ff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: '#2563eb'
                }}>
                    <Upload size={32} />
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>Click to upload or drag and drop</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>SVG, PNG, JPG or GIF (max. 5MB)</p>
            </div>

            {/* Image Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
                {images.map((image) => (
                    <div key={image.id} style={{
                        background: 'white',
                        borderRadius: '0.75rem',
                        overflow: 'hidden',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        border: '1px solid #e5e7eb'
                    }}>
                        <div style={{ position: 'relative', height: '150px', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image src={image.url} alt={image.name} width={100} height={100} style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                        <div style={{ padding: '1rem' }}>
                            <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827', marginBottom: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{image.name}</p>
                            <p style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '1rem' }}>{image.size} • {image.date}</p>

                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button
                                    onClick={() => copyUrl(image.id, image.url)}
                                    style={{
                                        flex: 1,
                                        padding: '0.5rem',
                                        background: copiedId === image.id ? '#dcfce7' : '#f3f4f6',
                                        color: copiedId === image.id ? '#166534' : '#374151',
                                        border: 'none',
                                        borderRadius: '0.375rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.25rem',
                                        fontSize: '0.75rem',
                                        fontWeight: 500
                                    }}
                                >
                                    {copiedId === image.id ? <Check size={14} /> : <Copy size={14} />}
                                    {copiedId === image.id ? 'Copied' : 'Copy URL'}
                                </button>
                                <button style={{
                                    padding: '0.5rem',
                                    background: '#fef2f2',
                                    color: '#dc2626',
                                    border: 'none',
                                    borderRadius: '0.375rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
}
