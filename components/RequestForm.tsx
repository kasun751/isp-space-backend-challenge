
type Props = {
    form : any;
    isSubmitting : boolean;
    handleSubmit : (e:any)=> Promise<void>;
    setForm: (value: any) => void;
}

export default function RequestForm({form, isSubmitting, handleSubmit, setForm}:Props) {
    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Payload_Mass (kg)</label>
                    <input
                        type="number"
                        placeholder="0.00"
                        className="w-full bg-slate-950 border border-slate-800 p-3 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                        onChange={(e) => setForm({ ...form, payloadMass: Number(e.target.value) })}
                        required
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Orbit_Type</label>
                    <select
                        className="w-full bg-slate-950 border border-slate-800 p-3 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                        onChange={(e) => setForm({ ...form, orbitType: e.target.value })}
                        required
                    >
                        <option value="">Select Target</option>
                        <option value="LEO">LEO (Low Earth)</option>
                        <option value="MEO">MEO (Medium Earth)</option>
                        <option value="GEO">GEO (Geostationary)</option>
                        <option value="TLI">TLI (Lunar Transit)</option>
                    </select>
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Required_Delta_V (m/s)</label>
                    <input
                        type="number"
                        placeholder="4500"
                        className="w-full bg-slate-950 border border-slate-800 p-3 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors font-mono text-cyan-200"
                        onChange={(e) => setForm({ ...form, deltaV: Number(e.target.value) })}
                        required
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Propellant_Type</label>
                    <input
                        placeholder="e.g. Xenon / LOX"
                        className="w-full bg-slate-950 border border-slate-800 p-3 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                        onChange={(e) => setForm({ ...form, propellant: e.target.value })}
                        required
                    />
                </div>
            </div>

            <div className="space-y-1 pt-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Contact_Email</label>
                <input
                    type="email"
                    placeholder="engineering@agency.gov"
                    className="w-full bg-slate-950 border border-slate-800 p-3 rounded-sm text-sm focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 text-white font-bold py-4 rounded-sm transition-all duration-300 uppercase tracking-[0.2em] text-xs shadow-lg shadow-cyan-900/20"
            >
                {isSubmitting ? "Transmitting..." : "Submit_Request"}
            </button>
        </form>
    )
}