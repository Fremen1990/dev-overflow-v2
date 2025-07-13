import {Geist, Geist_Mono as GeistMono} from "next/font/google";

import type {Metadata} from "next";

import "./globals.css";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
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
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ThemeProvider>
            <DropdownMenu>
                <DropdownMenuTrigger>Toggle Theme</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Theme</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Dark</DropdownMenuItem>
                    <DropdownMenuItem>Light</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {children}</ThemeProvider>
        </body>
        </html>
    );
}