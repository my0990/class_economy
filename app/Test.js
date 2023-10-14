'use client'
import { useSession } from "next-auth/react"
export default function Test() {
    const  { data: session, status } = useSession();
    console.log(session)
    return(
        <div>
        {session ? session.user.role : null}
        </div>
    )
}
