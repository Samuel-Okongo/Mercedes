import "./globals.css";
import Footer from '@components/Footer';
import NavBar from '@components/NavBar';
import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Mercedes",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
