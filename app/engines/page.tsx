"use client";

import Link from "next/link";
import {engines} from "@/app/engines/data";
import Header from "@/app/engines/_ui/Header";
import EngineCard from "@/app/engines/_ui/EngineCard";
import Footer from "@/app/engines/_ui/Footer";

export default function Engines() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 p-4 md:p-8 font-sans">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <Header />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {engines.map((e, i) => (
                        <EngineCard key={i} e={e} i={i} />
                    ))}
                </div>
                <Footer />
            </div>
        </div>
    );
}