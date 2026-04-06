"use client";

import { useEffect, useState } from "react";

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
                <div className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-800 pb-6 md:pb-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold tracking-tighter">
                                <span className="text-cyan-400">MISSION_CONTROL</span>
                                <span className="text-white"> // </span>
                                <span className="text-white">INQUIRIES</span>
                            </h1>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm uppercase tracking-widest pl-0">
                            ISP Space Internal Management System
                        </p>
                    </div>

                    <button
                        onClick={load}
                        className="group relative text-xs md:text-sm bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 px-4 md:px-6 py-2 md:py-2.5 rounded-lg transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 font-mono tracking-wider"
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            REFRESH_DATA
                        </span>
                    </button>
                </div>

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
                                <div
                                    key={r.id}
                                    className="group relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-5 md:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-6 hover:border-slate-600 hover:bg-slate-900 transition-all duration-300 shadow-xl hover:shadow-2xl animate-in fade-in slide-in-from-bottom-2"
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                    }}
                                >
                                    {/* Status indicator bar */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-all ${r.status === "PENDING" ? "bg-amber-500" : "bg-emerald-500"}`}></div>

                                    <div className="flex-1 space-y-3 pl-3">
                                        <div className="flex flex-wrap items-center gap-2 md:gap-3">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-md border border-cyan-400/20">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                                </svg>
                                                {r.engineModel || "STANDARD_PROP"}
                                            </span>

                                            <span className={`inline-flex items-center gap-1 text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                                                r.status === "PENDING"
                                                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                                    : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                            }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${r.status === "PENDING" ? "bg-amber-400 animate-pulse" : "bg-emerald-400"}`}></span>
                                                {r.status}
                                            </span>
                                        </div>

                                        <div className="space-y-1">
                                            <h2 className="text-base md:text-lg font-semibold text-slate-100 flex items-center gap-2">
                                                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                {r.email}
                                            </h2>
                                        </div>

                                        <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-slate-400 font-mono">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>
                                                    ORBIT: <span className="text-slate-300 font-medium">{r.orbitType}</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg className="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                </svg>
                                                <span>
                                                    PAYLOAD: <span className="text-slate-300 font-medium">{r.payloadMass}kg</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end lg:justify-center pl-3 lg:pl-0">
                                        {r.status === "PENDING" && (
                                            <button
                                                onClick={() => markReviewed(r.id)}
                                                className="group/btn relative overflow-hidden bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white text-sm font-bold py-2.5 px-6 md:px-8 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-900/30 hover:shadow-xl hover:shadow-cyan-900/40 transform hover:scale-105"
                                            >
                                                <span className="relative z-10 flex items-center gap-2">
                                                    <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    MARK_AS_REVIEWED
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer stats */}
                {!loading && requests.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-slate-800">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500 font-mono">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                                    PENDING: {requests.filter(r => r.status === "PENDING").length}
                                </span>
                                <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                    REVIEWED: {requests.filter(r => r.status !== "PENDING").length}
                                </span>
                            </div>
                            <div>
                                TOTAL MISSIONS: {requests.length}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}