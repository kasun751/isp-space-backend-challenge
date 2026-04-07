type Props = {
    r:any;
    index:number;
    markReviewed:(id:string)=> Promise<void>;
}


export default function AdminCard({r, index, markReviewed}:Props) {
    return (
        <div
            key={r.id}
            className="group relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-5 md:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-6 hover:border-slate-600 hover:bg-slate-900 transition-all duration-300 shadow-xl hover:shadow-2xl animate-in fade-in slide-in-from-bottom-2"
            style={{
                animationDelay: `${index * 50}ms`,
            }}
        >
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
    )
}