// RSC is Live Template for that component - React Server Component

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import MobileNavigation from "@/components/navigation/navbar/MobileNavigation";
import ModeToggle from "@/components/navigation/navbar/ModeToggle";

const Navbar = () => {
    return (
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 dark:shadow-none sm:px-12"
             data-testid="next-image"
        >
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src='/images/site-logo.svg'
                    width={30}
                    height={30}
                    alt='Dev Overflow Logo'
                />

                <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                    Dev<span className="text-primary-500">Flow</span>
                </p>
            </Link>

            <p>Global Search</p>

            <div className="flex-between gap-5">
                <ModeToggle/>

                <MobileNavigation/>
            </div>
        </nav>
    );
};

export default Navbar;
