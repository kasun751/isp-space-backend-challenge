import "./globals.css";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="font-sans bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        {/* Navigation Container */}
        <div className="min-h-screen">
            {/* Header Section */}
            <div className="border-b border-slate-800/50 bg-slate-900/30 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Logo / Title Section */}
                        <div className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-cyan-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                <div className="relative w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg md:text-xl lg:text-2xl font-mono font-bold tracking-tighter">
                                            <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
                                                ISP Engine Platform
                                            </span>
                                </h2>
                                <p className="text-[10px] md:text-xs text-slate-500 font-mono hidden md:block">
                                    INTERSTELLAR PROPULSION SYSTEMS
                                </p>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-wrap items-center gap-2 md:gap-3">
                            <a href="/" className="group relative">
                                <div className="relative px-3 md:px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-cyan-600/20 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                                            <span className="text-xs md:text-sm font-mono tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors">
                                                🏠 HOME
                                            </span>
                                </div>
                            </a>
                            <a href="/engines" className="group relative">
                                <div className="relative px-3 md:px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-cyan-600/20 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                                            <span className="text-xs md:text-sm font-mono tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors">
                                                🚀 ENGINES
                                            </span>
                                </div>
                            </a>
                            <a href="/request" className="group relative">
                                <div className="relative px-3 md:px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-cyan-600/20 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                                            <span className="text-xs md:text-sm font-mono tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors">
                                                📡 REQUEST
                                            </span>
                                </div>
                            </a>
                            <a href="/admin" className="group relative">
                                <div className="relative px-3 md:px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-cyan-600/20 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                                            <span className="text-xs md:text-sm font-mono tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors">
                                                🔒 ADMIN
                                            </span>
                                </div>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Divider with animated glow */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="relative">
                {children}
            </main>

            {/* Footer */}
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
        </div>
        </body>
        </html>
    );
}