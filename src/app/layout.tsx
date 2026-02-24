import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Achievers' Institute — Best Bank & SSC Coaching in Assam",
    template: "%s | Achievers' Institute",
  },
  description:
    "Secure your future with Assam's best coaching at Achievers' Institute for Banking, SSC, and State Direct Recruitment Government exams.",
  keywords: [
    "Achievers Institute",
    "best bank coaching in Assam",
    "SSC coaching Assam",
    "ADRE preparation",
    "government exam coaching",
    "banking exam preparation",
  ],
  authors: [{ name: "Achievers' Institute" }],
  openGraph: {
    title: "Achievers' Institute — Best Bank & SSC Coaching in Assam",
    description:
      "Secure your future with Assam's best coaching for Banking, SSC, and Government exams.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#f97316" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">
        <AuthProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#0f172a',
                color: '#fff',
                borderRadius: '12px',
                fontSize: '14px',
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
