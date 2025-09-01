import { GoogleTagManager } from "@next/third-parties/google";
import { Inter, Playfair_Display, Fira_Code } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ErrorBoundary from "./components/error-boundary";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import { ThemeProvider } from "./components/theme-provider";
import CursorEffect from "./components/cursor-effect";
import PageTransition from "./components/page-transition";
import LoadingScreen from "./components/loading-screen";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata = {
  title: "Anas Inaam - Full Stack Developer & Computer Engineer",
  description: "Innovative full stack developer and computer engineer passionate about creating exceptional digital experiences. Specializing in modern web technologies and creative solutions.",
  keywords: "full stack developer, computer engineer, web development, react, nextjs, javascript, portfolio",
  openGraph: {
    title: "Anas Inaam - Portfolio",
    description: "Full Stack Developer & Computer Engineer Portfolio",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${firaCode.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ErrorBoundary>
            <CursorEffect />
            <LoadingScreen />
            <ToastContainer 
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              toastClassName="bg-gray-800/90 backdrop-blur-md"
              bodyClassName="text-white font-inter"
              progressClassName="bg-gradient-to-r from-indigo-500 to-purple-500"
            />
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 opacity-90" />
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--primary-color)_0%,_transparent_70%)] opacity-20 dark:opacity-10" />
            
            <main className="min-h-screen relative mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[85rem] xl:max-w-[100rem] 2xl:max-w-[120rem] text-gray-800 dark:text-gray-200">
              <Navbar />
              <PageTransition>
                {children}
              </PageTransition>
              <ScrollToTop />
            </main>
            <Footer />
          </ErrorBoundary>
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GTM && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        )}
      </body>
    </html>
  );
}
