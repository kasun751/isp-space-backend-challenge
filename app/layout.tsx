import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-sans bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
                <div className="min-h-screen">
                    <Navbar />
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
                        </div>
                    </div>
                    <main className="relative">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}