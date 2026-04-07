export default function Header() {
    return(
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
    )
}