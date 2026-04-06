import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center relative overflow-hidden font-sans">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950 -z-10"></div>

            <main className="max-w-4xl px-6 text-center space-y-8">
                {/* Visual Accent */}
                <div className="inline-block border border-cyan-500/30 px-3 py-1 rounded-full mb-4">
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-cyan-400">
                        Propulsion_Systems_V1.0
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tighter uppercase leading-tight">
                    ISP <span className="text-cyan-500">Space</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Advancing human reach with high-performance propulsion engines designed for
                    <span className="text-slate-200"> orbital insertion</span> and
                    <span className="text-slate-200"> deep space exploration</span>.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <Link
                        href="/catalogue"
                        className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-10 rounded-sm transition-all duration-300 uppercase tracking-widest text-xs shadow-lg shadow-cyan-900/40"
                    >
                        View_Catalogue
                    </Link>
                    <Link
                        href="/configure"
                        className="w-full sm:w-auto border border-slate-800 hover:border-slate-600 bg-slate-900/50 text-slate-300 font-bold py-4 px-10 rounded-sm transition-all duration-300 uppercase tracking-widest text-xs"
                    >
                        Configure_Mission
                    </Link>
                </div>
            </main>

            {/* Technical Footer Accent */}
            <footer className="absolute bottom-8 w-full px-10 flex justify-between items-end">
                <div className="space-y-1">
                    <div className="text-[10px] font-mono text-slate-600 uppercase tracking-tighter">Status</div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase">System_Active</span>
                    </div>
                </div>

                <div className="hidden md:block text-[10px] font-mono text-slate-700 uppercase tracking-[0.2em]">
                    ©2026_ISP_Space_Propulsion_Lab
                </div>

                <div className="space-y-1 text-right">
                    <div className="text-[10px] font-mono text-slate-600 uppercase tracking-tighter">Coordinates</div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">LEO_STATION_ALPHA</div>
                </div>
            </footer>
        </div>
    );
}