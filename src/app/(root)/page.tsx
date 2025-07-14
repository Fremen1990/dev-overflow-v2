import {redirect} from "next/navigation"
import {getServerSession} from "next-auth/next"

import {Button} from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import {authOptions} from "@/lib/auth";

export default async function Home() {
    const session = await getServerSession(authOptions)

    console.log("Session data:", session)

    if (!session) {
        redirect(ROUTES.SIGN_IN)
    }

    // Server action for sign out
    async function handleSignOut() {
        "use server"
        redirect("/api/auth/signout")
    }

    return (
        <>

            <h1 className={`h1-bold`}>
                Home page is here!
            </h1>
            <h1 className={`h1-bold`}>
                Home page is here!
            </h1>

            <h1 className={`h1-bold`}>
                Home page is here!
            </h1>

            <h2>name: {session?.user?.name}</h2>
            <h2>email: {session?.user?.email}</h2>
            <h2>expires: {session?.expires}</h2>
            {/* <Image src={session?.user?.image}/> */}
            <img src={session?.user?.image} alt=""/>

            {session && (
                <form action={handleSignOut}>
                    <Button type="submit">LOG OUT!!</Button>
                </form>
            )}

        </>

    )
}