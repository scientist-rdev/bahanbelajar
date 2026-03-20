import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  variable: "--font-inter",
  subsets: ["latin"] 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BahanBelajar1",
  description: "Website buatan Rado (bahan belajar)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div id="dnavbar">
          <a href="/" className={inter.variable}>
            Template
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
