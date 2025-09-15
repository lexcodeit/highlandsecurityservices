import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { JotaiProvider } from "@/components/providers/jotai-provider";
import { Toaster } from "sonner";
import RootModal from "@/components/modals/root-modal";
import NextTopLoader from "nextjs-toploader";
import localFont from "next/font/local";

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const scriptFont = localFont({
    src: "../utils/fonts/brushsci.ttf",
    variable: "--font-brush-script", // optional: create CSS variable
});

export const metadata: Metadata = {
    title: "Highland Security Services",
    description: "Your Shield in Every Situation.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ConvexAuthNextjsServerProvider>
            <html lang="en">
                <body
                    className={`${dmSans.variable} ${outfit.variable} ${scriptFont.className} antialiased`}
                >
                    <ConvexClientProvider>
                        <JotaiProvider>
                            <NextTopLoader color="#f7c74b" />
                            {children}
                            <Toaster />
                            <RootModal />
                        </JotaiProvider>
                    </ConvexClientProvider>
                </body>
            </html>
        </ConvexAuthNextjsServerProvider>
    );
}
