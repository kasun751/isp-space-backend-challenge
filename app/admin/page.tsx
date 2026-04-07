"use client";

import { useEffect, useState } from "react";
import AdminCard from "@/app/admin/_ui/AdminCard";
import Footer from "@/app/admin/_ui/Footer";
import Header from "@/app/admin/_ui/Header";

export default function AdminPage() {
    const [requests, setRequests] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const load = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/requests");
            if (!res.ok) {
                throw new Error("Failed to fetch requests");
            }
            const data = await res.json();
            setRequests(data || []);
        } catch (error) {
            console.error("Failed to load requests", error);
            setRequests([]);
        } finally {
            setLoading(false);
        }
    };

    const markReviewed = async (id: string) => {
        try {
            const res = await fetch(`/api/requests/${id}`, {
                method: "PATCH",
            });
            if (!res.ok) {
                throw new Error("Failed to update request");
            }
            await load();
        } catch (error) {
            console.error("Failed to mark reviewed", error);
        }
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 p-4 md:p-8 font-sans">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header Section */}
                <Header load={load} />

                {/* Content Section */}
                <div className="mt-6 md:mt-8">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 md:py-32 gap-4">
                            <div className="relative">
                                <div className="animate-spin rounded-full h-10 w-10 md:h-12 md:w-12 border-b-2 border-cyan-500"></div>
                                <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20"></div>
                            </div>
                            <p className="text-slate-400 text-sm font-mono animate-pulse">LOADING MISSION DATA...</p>
                        </div>
                    ) : (
                        <div className="space-y-4 md:space-y-6">
                            {requests.length === 0 && (
                                <div className="text-center py-16 md:py-24 px-4">
                                    <div className="inline-block p-4 bg-slate-800/30 rounded-full mb-4">
                                        <svg className="w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                        </svg>
                                    </div>
                                    <p className="text-slate-400 text-base md:text-lg font-mono">
                                        NO MISSION REQUESTS FOUND
                                    </p>
                                    <p className="text-slate-500 text-xs md:text-sm mt-2">
                                        Waiting for incoming transmissions...
                                    </p>
                                </div>
                            )}

                            {requests.map((r, index) => (
                                <AdminCard key={index} index={index} r={r} markReviewed={markReviewed} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer stats */}
                {!loading && requests.length > 0 && (
                    <Footer requests={requests} />
                )}
            </div>
        </div>
    );
}