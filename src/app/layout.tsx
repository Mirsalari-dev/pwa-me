import { IRANYekanWeb } from "@/styles/font";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ReactQueryProvider from "@/components/providers/reactQueryProvider/reactQueryProvider";
import MuiWrapper from "@/components/providers/muiProvider/muiProvider";
import { InstallPromptProvider } from "@/context/InstallPromptContext";
import InstallPromptModal from "@/components/common/InstallPromptModal";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "پاداش",
  description: "اپلیکیشن جامع پاداش",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: [
    "پاداش",
    "سرمایه گذاری",
    "لیزینگ",
    "پورتفوی",
    "سوپر اپلیکیشن پاداش"
  ],
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/logo.png",
        href: "/images/logo.png",
        rel: "shortcut icon"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logo.png",
        href: "/images/logo.png",
        rel: "apple-touch-icon"
      }
    ]
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }
  ],
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
  userScalable: false
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="fa" dir="rtl">
        <body className={IRANYekanWeb.className}>
          <ReactQueryProvider>
            <AppRouterCacheProvider>
              <InstallPromptProvider>
                <MuiWrapper>
                  {children}
                  <InstallPromptModal />
                </MuiWrapper>
              </InstallPromptProvider>
            </AppRouterCacheProvider>
          </ReactQueryProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
