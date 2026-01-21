"use client";

export const dynamic = 'force-dynamic';

import AdminLayout from "@/components/admin/AdminLayout";
import { FileText, Users, Eye, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
    const stats = [
        { name: "Total Articles", value: "12", icon: FileText, change: "+2 this week", color: "bg-blue-500" },
        { name: "Total Views", value: "1,234", icon: Eye, change: "+15% vs last month", color: "bg-green-500" },
        { name: "Active Users", value: "89", icon: Users, change: "+5% vs last month", color: "bg-purple-500" },
        { name: "Avg. Read Time", value: "4m 32s", icon: TrendingUp, change: "+12s vs last month", color: "bg-orange-500" },
    ];

    return (
        <AdminLayout>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#111827' }}>Dashboard</h1>
                <p style={{ color: '#6b7280' }}>Welcome back, Admin</p>
            </div>

            {/* Stats Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
            }}>
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.name} style={{
                            background: 'white',
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{
                                    padding: '0.75rem',
                                    borderRadius: '0.5rem',
                                    background: '#f3f4f6',
                                    color: '#374151'
                                }}>
                                    <Icon size={24} />
                                </div>
                                <span style={{
                                    fontSize: '0.875rem',
                                    color: stat.change.includes('+') ? '#059669' : '#dc2626',
                                    fontWeight: 500
                                }}>
                                    {stat.change}
                                </span>
                            </div>
                            <h3 style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: 500 }}>{stat.name}</h3>
                            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginTop: '0.25rem' }}>{stat.value}</p>
                        </div>
                    );
                })}
            </div>

            {/* Recent Activity Placeholder */}
            <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Recent Articles</h2>
                <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
                    <p>No articles published yet.</p>
                    <button style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        background: '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.375rem',
                        cursor: 'pointer'
                    }}>
                        Write your first article
                    </button>
                </div>
            </div>
        </AdminLayout>
    );
}
