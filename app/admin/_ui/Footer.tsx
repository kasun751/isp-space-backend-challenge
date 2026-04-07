export default function Footer({requests}:{requests:any}) {
    return(
        <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500 font-mono">
                <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                                    PENDING: {requests.filter((r: { status: string; }) => r.status === "PENDING").length}
                                </span>
                    <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                    REVIEWED: {requests.filter((r: { status: string; }) => r.status !== "PENDING").length}
                                </span>
                </div>
                <div>
                    TOTAL MISSIONS: {requests.length}
                </div>
            </div>
        </div>
    )
}