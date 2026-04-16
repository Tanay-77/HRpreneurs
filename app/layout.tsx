import type {Metadata} from 'next';
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'HRpreneurs | HR Consulting Firm',
  description: 'Building Strong Organizations with Expert HR Consultancy',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#F5F3EF] text-[#1A1A1A] font-sans antialiased overflow-x-hidden selection:bg-[#0F3D2E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
