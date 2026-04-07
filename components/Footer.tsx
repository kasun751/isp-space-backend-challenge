export default function Footer() {
    return (
        <footer className="border-t border-slate-800/50 bg-slate-900/20 mt-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
                            <div className="w-1.5 h-1.5 bg-cyan-500/60 rounded-full animate-pulse delay-300"></div>
                            <div className="w-1.5 h-1.5 bg-cyan-500/30 rounded-full animate-pulse delay-700"></div>
                        </div>
                        <span className="text-[10px] md:text-xs font-mono text-slate-500 tracking-wider">
                                                SYSTEM_STATUS: OPERATIONAL
                                            </span>
                    </div>

                    <div className="text-center">
                        <p className="text-[10px] md:text-xs font-mono text-slate-600 tracking-wider">
                            © {new Date().getFullYear()} ISP Space Technologies — All trajectories computed
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg className="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18v-5a2 2 0 00-2-2H8a2 2 0 00-2 2v5m10 0v-5a2 2 0 00-2-2h-2a2 2 0 00-2 2v5m-6 0h12" />
                        </svg>
                        <span className="text-[10px] font-mono text-slate-600">SECURE_CHANNEL</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}