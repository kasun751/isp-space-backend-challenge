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
        <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12 border-l-4 border-cyan-500 pl-6">
                    <h1 className="text-4xl font-mono font-bold tracking-tight uppercase">
                        Propulsion_Systems
                    </h1>
                    <p className="text-slate-400 mt-2 font-light tracking-wide">
                        Flight-proven hardware for multi-mission orbital insertion.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engines.map((e, i) => (
                        <div 
                            key={i} 
                            className="group bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-cyan-500/50 transition-all duration-300 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-slate-700 group-hover:text-cyan-900 transition-colors">
                                REV_0{i + 1}
                            </div>
                            
                            <h3 className="text-2xl font-mono font-bold text-cyan-400 mb-4 tracking-tighter">
                                {e.name}
                            </h3>
                            
                            <p className="text-sm text-slate-400 mb-6 leading-relaxed h-12">
                                {e.description}
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex justify-between border-b border-slate-800 pb-1">
                                    <span className="text-xs uppercase text-slate-500 font-bold">Thrust</span>
                                    <span className="text-sm font-mono">{e.thrust}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-800 pb-1">
                                    <span className="text-xs uppercase text-slate-500 font-bold">Isp</span>
                                    <span className="text-sm font-mono text-cyan-200">{e.isp}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-800 pb-1">
                                    <span className="text-xs uppercase text-slate-500 font-bold">Propellant</span>
                                    <span className="text-sm font-mono">{e.propellant}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-800 pb-1">
                                    <span className="text-xs uppercase text-slate-500 font-bold">Mass</span>
                                    <span className="text-sm font-mono">{e.mass}</span>
                                </div>
                            </div>

                            <Link 
                                href="/configure"
                                className="block w-full text-center bg-slate-800 hover:bg-cyan-600 text-white text-xs font-bold py-3 transition-colors tracking-widest uppercase"
                            >
                                Configure_Mission
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}