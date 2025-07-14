'use client'

import Image from "next/image";
import {signIn} from "next-auth/react";
import React from "react";
import {toast} from "sonner";

import ROUTES from "@/constants/routes";

import {Button} from "../ui/button";

export enum SocialAuthType {
    GITHUB = "github",// eslint-disable-line no-unused-vars
    GOOGLE = "google",// eslint-disable-line no-unused-vars
    // FACEBOOK = "facebook",
    // TWITTER = "twitter",
    // LINKEDIN = "linkedin",
    // MICROSOFT = "microsoft",
    // APPLE = "apple"
}

const SocialAuthForm = () => {
    const buttonClass =
        "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

    const handleSignIn = (provider: SocialAuthType) => {
        try {
            signIn(provider, {
                callbackUrl: ROUTES.HOME,
                redirect: false
            });
        } catch (error) {
            console.error(`Error signing in with ${provider}:`, error);
            toast.error("Sign-in failed. Please try again later.");

        }

    }

    return (
        <div className="mt-10 flex flex-wrap gap-2.5">
            <Button className={buttonClass} onClick={() => handleSignIn(SocialAuthType.GITHUB)}>
                <Image
                    src="/icons/github.svg"
                    alt="Github Logo"
                    width={20}
                    height={20}
                    className="invert-colors mr-2.5 object-contain"
                />
                <span>Log in with GitHub</span>
            </Button>

            <Button className={buttonClass} onClick={() => handleSignIn(SocialAuthType.GOOGLE)}>
                <Image
                    src="/icons/google.svg"
                    alt="Google Logo"
                    width={20}
                    height={20}
                    className="mr-2.5 object-contain"
                />
                <span>Log in with Google</span>
            </Button>
        </div>
    );
};

export default SocialAuthForm;