import "./globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`bg-gradient-to-b from-gray-900 via-gray-800 px-0 md:px-20 to-gray-700 ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
