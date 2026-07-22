import './globals.css';

export const metadata = {
  title: 'OneApp - Your Life. Organized.',
  description: 'Health • Wealth • Growth',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="relative min-h-screen overflow-hidden font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        
        {/* Sfondo combinato a gradienti blu e ciano futuristici */}
        <div className="absolute inset-0 -z-50 bg-[radial-gradient(circle_at_bottom_left,rgba(8,47,73,0.6),rgba(2,6,23,1)_70%)]" />
        <div className="absolute inset-0 -z-50 bg-[radial-gradient(circle_at_top_right,rgba(14,116,144,0.25),transparent_50%)]" />
        
        {/* Bagliore d'atmosfera al neon sferico (Orbe luminoso soffuso) */}
        <div className="absolute top-[-10%] right-[-10%] -z-40 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] -z-40 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[130px] pointer-events-none" />

        {/* Griglia tech geometrica futuristica opzionale in background */}
        <div className="absolute inset-0 -z-40 bg-[linear-gradient(rgba(255,255,255,0.004)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.004)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

        {/* Contenitore principale dell'applicazione */}
        <div className="flex h-screen w-screen relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}
