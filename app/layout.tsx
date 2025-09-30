import type { Metadata } from"next";
import { Poppins } from"next/font/google";
import { Geist_Mono } from"next/font/google";
import"./globals.css";

const poppins = Poppins({
 variable:"--font-geist-sans",
 weight: ["300","400","500","600","700"],
 subsets: ["latin"],
});

const geistMono = Geist_Mono({
 variable:"--font-geist-mono",
 subsets: ["latin"],
});

export const metadata: Metadata = {
 title:"Medios de Transmisión - Presentación",
 description:"Medios de transmisión guiados y cableado estructurado - Presentación técnica para ingenieros",
};

export const viewport = {
 width:"device-width",
 initialScale: 1,
 maximumScale: 5,
 userScalable: true,
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en">
 <body
 className={`${poppins.variable} ${geistMono.variable} antialiased`}
 >
 {children}
 </body>
 </html>
 );
}