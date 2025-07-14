import GithubProvider from "next-auth/providers/github";

// import GoogleProvider from "next-auth/providers/google";
import type {NextAuthOptions} from "next-auth"

import ROUTES from "@/constants/routes";

export const authOptions: NextAuthOptions = {
    secret: process.env.SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        // })
    ],
    callbacks: {
        async session({session}) {
            return session
        },
        async jwt({token}) {
            return token
        }
    },
    pages: {
        signIn: ROUTES.SIGN_IN,
        signOut: ROUTES.SIGN_UP,
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // Used for check email message
        // newUser: null // Will disable the new account creation screen
    }
}
