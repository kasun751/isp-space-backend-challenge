import NavLinkButton from "@/components/_ui/NavLinkButton";

export default function Navbar() {
    return (
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
                        <NavLinkButton link="/" label="🏠 HOME" />
                        <NavLinkButton link="/engines" label="🚀 ENGINES" />
                        <NavLinkButton link="/request" label="📡 REQUESTE" />
                        <NavLinkButton link="/admin" label="🔒 ADMIN" />
                    </nav>
                </div>
            </div>
        </div>
    );
}