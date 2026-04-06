"use client";

import Link from "next/link";

const engines = [
    {
        name: "Astra-1",
        thrust: "450 kN",
        isp: "320s",
        propellant: "LOX/RP-1",
        mass: "1100 kg",
        description: "High-thrust booster optimized for sea-level ascent and heavy lift capability."
    },
    {
        name: "Nova-Vac",
        thrust: "220 kN",
        isp: "415s",
        propellant: "LOX/LH2",
        mass: "750 kg",
        description: "Vacuum-optimized upper stage engine featuring an extended nozzle for orbital efficiency."
    },
    {
        name: "Ion-X",
        thrust: "50 mN",
        isp: "2500s",
        propellant: "Xenon",
        mass: "300 kg",
        description: "Next-generation Hall effect thruster designed for long-duration deep space transit."
    },
];

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
                {/* Header Section */}
                <header className="mb-10 md:mb-16 group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-cyan-400 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <span className="text-xs font-mono text-cyan-400 tracking-wider">PROPULSION_DATABASE</span>
                        </div>
                    </div>

                    <div className="border-l-4 border-cyan-500 pl-6 md:pl-8 transition-all duration-300 group-hover:border-cyan-400">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold tracking-tighter uppercase bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
                            Propulsion_Systems
                        </h1>
                        <p className="text-slate-400 mt-2 md:mt-3 font-light tracking-wide text-sm md:text-base max-w-2xl">
                            Flight-proven hardware for multi-mission orbital insertion. Select your primary propulsion unit.
                        </p>
                    </div>
                </header>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {engines.map((e, i) => (
                        <div
                            key={i}
                            className="group relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-900/20 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Background gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-700"></div>

                            {/* Top right badge */}
                            <div className="absolute top-0 right-0">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/20 to-transparent blur-md"></div>
                                    <div className="relative bg-slate-800/80 backdrop-blur-sm px-3 py-1.5 text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 transition-all duration-300 rounded-bl-lg border-l border-b border-slate-700 group-hover:border-cyan-500/30">
                                        REV_0{i + 1}
                                    </div>
                                </div>
                            </div>

                            {/* Engine icon/visual indicator */}
                            <div className="mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-mono font-bold mb-3 tracking-tighter">
                                <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                                    {e.name}
                                </span>
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-400 mb-6 leading-relaxed min-h-[3rem] md:min-h-[4rem]">
                                {e.description}
                            </p>

                            {/* Specifications grid */}
                            <div className="space-y-3 mb-8">
                                <div className="flex justify-between items-center border-b border-slate-800 pb-2 group-hover:border-slate-700 transition-colors">
                                    <span className="text-xs uppercase text-slate-500 font-bold tracking-wider flex items-center gap-2">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        Thrust
                                    </span>
                                    <span className="text-sm font-mono font-semibold text-slate-200">{e.thrust}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-800 pb-2 group-hover:border-slate-700 transition-colors">
                                    <span className="text-xs uppercase text-slate-500 font-bold tracking-wider flex items-center gap-2">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Isp
                                    </span>
                                    <span className="text-sm font-mono font-semibold text-cyan-300">{e.isp}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-800 pb-2 group-hover:border-slate-700 transition-colors">
                                    <span className="text-xs uppercase text-slate-500 font-bold tracking-wider flex items-center gap-2">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                        Propellant
                                    </span>
                                    <span className="text-sm font-mono font-semibold text-slate-200">{e.propellant}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-800 pb-2 group-hover:border-slate-700 transition-colors">
                                    <span className="text-xs uppercase text-slate-500 font-bold tracking-wider flex items-center gap-2">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        </svg>
                                        Mass
                                    </span>
                                    <span className="text-sm font-mono font-semibold text-slate-200">{e.mass}</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Link
                                href="/configure"
                                className="relative group/btn block w-full overflow-hidden rounded-lg"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative bg-slate-800 hover:bg-transparent text-white text-xs md:text-sm font-bold py-3.5 px-4 transition-all duration-300 tracking-widest uppercase flex items-center justify-center gap-2 border border-slate-700 group-hover/btn:border-cyan-500/50 rounded-lg">
                                    <span>Configure_Mission</span>
                                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </Link>

                            {/* Corner accent */}
                            <div className="absolute bottom-0 left-0 w-16 h-16">
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300 rounded-bl-xl"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer note */}
                <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-slate-800 text-center">
                    <div className="inline-flex items-center gap-3 text-xs text-slate-500 font-mono">
                        <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                        <span>ALL SPECIFICATIONS SUBJECT TO MISSION PARAMETERS</span>
                        <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                    </div>
                    <p className="text-xs text-slate-600 mt-3">
                        Select any engine to begin mission configuration
                    </p>
                </div>
            </div>
        </div>
    );
}