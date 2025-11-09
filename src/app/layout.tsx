import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/footer";
import "./globals.css";


import Nav from "./components/nav";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Flower Shop",
  description: "Your one-stop online flower shop. Fresh, beautiful flowers delivered to your doorstep with love and care.",
  icons: {
    icon: "/logo.jpg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
         
          <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
