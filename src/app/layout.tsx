import {Geist, Geist_Mono as GeistMono} from "next/font/google";

import type {Metadata} from "next";

import "./globals.css";

import {Toaster} from "@/components/ui/sonner";
import SessionWrapper from "@/context/SessionWrapper";
import ThemeProvider from "@/context/Theme";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = GeistMono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dev Overflow",
    description:
        "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
    icons: {
        icon: "/images/site-logo.svg",
        shortcut: "/images/site-logo.svg",
        apple: "/images/site-logo.svg",
    },
};

const RootLayout = async ({
                              children,
                          }: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
            />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <SessionWrapper>

            <ThemeProvider>

                {children}
                <Toaster position="top-center" richColors/>

            </ThemeProvider>
        </SessionWrapper>

        </body>
        </html>
    );
}

export default RootLayout;
