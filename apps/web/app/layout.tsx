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
      <body className="bg-background text-foreground">
        <div className="flex h-screen">{children}</div>
      </body>
    </html>
  );
}
