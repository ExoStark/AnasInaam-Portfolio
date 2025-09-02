import { GoogleTagManager } from "@next/third-parties/google";
import { Inter, Playfair_Display, Fira_Code } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ErrorBoundary from "./components/error-boundary";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import { ThemeProvider } from "./components/theme-provider";
import CursorEffect from "./components/cursor-effect";
import PageTransition from "./components/page-transition";
import LoadingScreen from "./components/loading-screen";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: '--font-fira-code',
});

export const metadata = {
  title: "Anas Inaam - Full Stack Developer & Computer Engineer",
  description: "Innovative developer creating exceptional digital experiences with modern technologies",
  keywords: "full stack developer, computer engineer, react, nextjs, javascript, portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${firaCode.variable}`}>
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
              toastClassName="glass-dark"
              bodyClassName="text-white"
            />
            
            {/* Animated background */}
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/10 dark:to-white/5"></div>
            </div>

            <main className="min-h-screen relative">
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
