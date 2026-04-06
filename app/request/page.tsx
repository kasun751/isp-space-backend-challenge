"use client";

import { useState } from "react";

export default function RequestPage() {
    const [form, setForm] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        const res = await fetch("/api/requests", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            alert("Mission parameters logged. Engineering will review.");
        } else {
            alert("Uplink error. Please verify connection.");
        }
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 font-sans">
            <div className="w-full max-w-xl bg-slate-900 border border-slate-800 p-8 rounded-sm shadow-2xl">
                <header className="mb-8 text-center">
                    <h1 className="text-2xl font-mono font-bold tracking-widest text-cyan-400 uppercase">
                        Mission_Configuration
                    </h1>
                    <p className="text-slate-500 text-xs mt-2 font-mono uppercase tracking-tighter">
                        Input orbital parameters for delta-v calculation
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Payload_Mass (kg)</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="w-full bg-slate-950 border border-slate-800 p-3 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                                onChange={(e) => setForm({ ...form, payloadMass: Number(e.target.value) })}
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Orbit_Type</label>
                            <select
                                className="w-full bg-slate-950 border border-slate-800 p-3 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                                onChange={(e) => setForm({ ...form, orbitType: e.target.value })}
                                required
                            >
                                <option value="">Select Target</option>
                                <option value="LEO">LEO (Low Earth)</option>
                                <option value="MEO">MEO (Medium Earth)</option>
                                <option value="GEO">GEO (Geostationary)</option>
                                <option value="TLI">TLI (Lunar Transit)</option>
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Required_Delta_V (m/s)</label>
                            <input
                                type="number"
                                placeholder="4500"
                                className="w-full bg-slate-950 border border-slate-800 p-3 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors font-mono text-cyan-200"
                                onChange={(e) => setForm({ ...form, deltaV: Number(e.target.value) })}
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Propellant_Type</label>
                            <input
                                placeholder="e.g. Xenon / LOX"
                                className="w-full bg-slate-950 border border-slate-800 p-3 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                                onChange={(e) => setForm({ ...form, propellant: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1 pt-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Contact_Email</label>
                        <input
                            type="email"
                            placeholder="engineering@agency.gov"
                            className="w-full bg-slate-950 border border-slate-800 p-3 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 text-white font-bold py-4 rounded-sm transition-all duration-300 uppercase tracking-[0.2em] text-xs shadow-lg shadow-cyan-900/20"
                    >
                        {isSubmitting ? "Transmitting..." : "Submit_Request"}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center">
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-slate-600 uppercase">System_Online</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-700">ISP_SPACE_V.01</span>
                </div>
            </div>
        </div>
    );
}