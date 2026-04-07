export default function Footer() {
    return (
        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-slate-600 uppercase">System_Online</span>
            </div>
            <span className="text-[10px] font-mono text-slate-700">ISP_SPACE_V.01</span>
        </div>
    )
}