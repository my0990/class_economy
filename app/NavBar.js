import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import NavBarTemplate from "./components/navbar/NavbarTemplate"
export default async function NavBar(){
    const session = await getServerSession(authOptions);
    return(
        <>
            <div style={{width:'100%', height:'80px'}}/>
            <NavBarTemplate session={session}/>
        </>
    )
}