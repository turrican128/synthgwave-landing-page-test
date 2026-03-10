import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "קורס FL Studio Synthwave | תחזירו את שנות ה-80 לחיים",
  description: "למדו לייצר מוזיקת Synthwave אותנטית בתוך FL Studio. הצטרפו לרשימת ההמתנה.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&family=Orbitron:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-white antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
