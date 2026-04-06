export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body style={{ fontFamily: 'Arial' }}>
        <div style={{ padding: 20 }}>
            <h2>ISP Engine Platform</h2>
            <nav style={{ display: 'flex', gap: 10 }}>
                <a href="/">Home</a>
                <a href="/engines">Engines</a>
                <a href="/request">Request</a>
                <a href="/admin">Admin</a>
            </nav>
            <hr />
            {children}
        </div>
        </body>
        </html>
    );
}