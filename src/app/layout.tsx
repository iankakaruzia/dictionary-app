import "./globals.css";

export const metadata = {
  title: "Dictionary App",
  description: "Check out the definition of any word.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
