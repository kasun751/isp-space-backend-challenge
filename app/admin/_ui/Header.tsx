export default function Header({load}:{load:()=>Promise <void>}) {
    return(
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-800 pb-6 md:pb-8">
            <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold tracking-tighter">
                        <span className="text-cyan-400">MISSION_CONTROL</span>
                        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                        <span className="text-white"> // </span>
                        <span className="text-white">INQUIRIES</span>
                    </h1>
                </div>
                <p className="text-slate-400 text-xs md:text-sm uppercase tracking-widest pl-0">
                    ISP Space Internal Management System
                </p>
            </div>

            <button
                onClick={load}
                className="group relative text-xs md:text-sm bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 px-4 md:px-6 py-2 md:py-2.5 rounded-lg transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 font-mono tracking-wider"
            >
                        <span className="flex items-center gap-2">
                            <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            REFRESH_DATA
                        </span>
            </button>
        </div>
    )
}