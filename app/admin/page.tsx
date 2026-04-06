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
        <div className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">

            <div className="max-w-6xl mx-auto mb-10 flex justify-between items-end border-b border-slate-800 pb-6">
                <div>
                    <h1 className="text-3xl font-mono font-bold tracking-tighter text-cyan-400">
                        MISSION_CONTROL // <span className="text-white">INQUIRIES</span>
                    </h1>
                    <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest">
                        ISP Space Internal Management
                    </p>
                </div>

                <button
                    onClick={load}
                    className="text-xs bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded transition border border-slate-700"
                >
                    REFRESH_DATA
                </button>
            </div>

            <div className="max-w-6xl mx-auto">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {requests.length === 0 && (
                            <p className="text-center text-slate-500 py-10 border border-dashed border-slate-800 rounded">
                                No mission requests found.
                            </p>
                        )}

                        {requests.map((r) => (
                            <div
                                key={r.id}
                                className="bg-slate-900 border border-slate-800 p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-slate-600 transition shadow-xl"
                            >
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded">
                                            {r.engineModel || "STANDARD_PROP"}
                                        </span>

                                        <span
                                            className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                                                r.status === "PENDING"
                                                    ? "bg-amber-500/10 text-amber-500"
                                                    : "bg-emerald-500/10 text-emerald-500"
                                            }`}
                                        >
                                            {r.status}
                                        </span>
                                    </div>

                                    <h2 className="text-lg font-semibold text-slate-100">
                                        {r.email}
                                    </h2>

                                    <div className="flex gap-4 text-sm text-slate-400 font-mono">
                                        <span>
                                            ORBIT:{" "}
                                            <span className="text-slate-200">
                                                {r.orbitType}
                                            </span>
                                        </span>

                                        <span>
                                            PAYLOAD:{" "}
                                            <span className="text-slate-200">
                                                {r.payloadMass}kg
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    {r.status === "PENDING" && (
                                        <button
                                            onClick={() => markReviewed(r.id)}
                                            className="bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold py-2 px-6 rounded transition shadow-lg shadow-cyan-900/20"
                                        >
                                            MARK_AS_REVIEWED
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}