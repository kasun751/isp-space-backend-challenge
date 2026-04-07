export default function Footer() {
    return (
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
    )
}