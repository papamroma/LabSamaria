"use client";

export const dynamic = 'force-dynamic';

import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Save, Upload, Globe, Palette, Share2, Search } from "lucide-react";
import Image from "next/image";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("branding");
    const [loading, setLoading] = useState(false);

    // Placeholder state
    const [settings, setSettings] = useState({
        siteName: "LabSamaria",
        tagline: "Exploring the frontiers of Artificial Intelligence",
        primaryColor: "#2563eb",
        secondaryColor: "#76b900",
        twitter: "https://twitter.com/labsamaria",
        linkedin: "https://linkedin.com/company/labsamaria",
        github: "https://github.com/labsamaria",
    });

    const handleSave = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("Settings saved!");
        }, 1000);
    };

    const tabs = [
        { id: "branding", label: "Branding", icon: Palette },
        { id: "general", label: "General", icon: Globe },
        { id: "social", label: "Social Media", icon: Share2 },
        { id: "seo", label: "SEO", icon: Search },
    ];

    return (
        <AdminLayout>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827' }}>Site Settings</h1>
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
                        <Save size={18} />
                        Save Changes
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '2rem' }}>
                    {/* Tabs */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '0.75rem 1rem',
                                        background: activeTab === tab.id ? 'white' : 'transparent',
                                        border: 'none',
                                        borderRadius: '0.5rem',
                                        color: activeTab === tab.id ? '#2563eb' : '#6b7280',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        boxShadow: activeTab === tab.id ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <Icon size={18} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>

                        {/* Branding Tab */}
                        {activeTab === "branding" && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: '#111827' }}>Logo</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                        <div style={{
                                            width: '100px',
                                            height: '100px',
                                            background: '#f3f4f6',
                                            borderRadius: '0.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '1px solid #e5e7eb'
                                        }}>
                                            <Image src="/logo.png" alt="Logo" width={60} height={60} style={{ objectFit: 'contain' }} />
                                        </div>
                                        <button style={{
                                            padding: '0.5rem 1rem',
                                            background: 'white',
                                            border: '1px solid #d1d5db',
                                            borderRadius: '0.5rem',
                                            color: '#374151',
                                            fontWeight: 500,
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <Upload size={16} />
                                            Upload New Logo
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', color: '#111827' }}>Colors</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>Primary Color</label>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                <input
                                                    type="color"
                                                    value={settings.primaryColor}
                                                    onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                                                    style={{ width: '40px', height: '40px', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}
                                                />
                                                <input
                                                    type="text"
                                                    value={settings.primaryColor}
                                                    onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                                                    style={{ flex: 1, padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>Secondary Color</label>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                <input
                                                    type="color"
                                                    value={settings.secondaryColor}
                                                    onChange={(e) => setSettings({ ...settings, secondaryColor: e.target.value })}
                                                    style={{ width: '40px', height: '40px', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}
                                                />
                                                <input
                                                    type="text"
                                                    value={settings.secondaryColor}
                                                    onChange={(e) => setSettings({ ...settings, secondaryColor: e.target.value })}
                                                    style={{ flex: 1, padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* General Tab */}
                        {activeTab === "general" && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>Site Name</label>
                                    <input
                                        type="text"
                                        value={settings.siteName}
                                        onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>Tagline</label>
                                    <input
                                        type="text"
                                        value={settings.tagline}
                                        onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Social Tab */}
                        {activeTab === "social" && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>Twitter URL</label>
                                    <input
                                        type="url"
                                        value={settings.twitter}
                                        onChange={(e) => setSettings({ ...settings, twitter: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>LinkedIn URL</label>
                                    <input
                                        type="url"
                                        value={settings.linkedin}
                                        onChange={(e) => setSettings({ ...settings, linkedin: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>GitHub URL</label>
                                    <input
                                        type="url"
                                        value={settings.github}
                                        onChange={(e) => setSettings({ ...settings, github: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* SEO Tab */}
                        {activeTab === "seo" && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>Meta Description</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Enter site description for search engines..."
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', resize: 'vertical' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>Google Analytics ID</label>
                                    <input
                                        type="text"
                                        placeholder="G-XXXXXXXXXX"
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
                                    />
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
