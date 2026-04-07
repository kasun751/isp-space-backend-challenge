import Link from "next/link";

type Props = {
    label: string;
    link: string;
};

export default function NavLinkButton({ link, label }: Props) {
    return (
        <Link href={link} className="group relative">
            <div className="relative px-3 md:px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-cyan-600/20 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <span className="text-xs md:text-sm font-mono tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors">
                    {label}
                </span>
            </div>
        </Link>
    );
}