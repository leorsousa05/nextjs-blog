import Link from "next/link";
import React from "react";

import {onIdTokenChanged} from "firebase/auth";
import {useRouter} from "next/router";
import {HeaderContainer, PagesList} from "./style";
import {useAuth} from "../../hooks/useAuth";
import {auth} from "../../api/firebaseConnection";

export default function Header() {

    const { logout } = useAuth()

    const route = useRouter()

    onIdTokenChanged(auth, async ( user ) => {
        !user && route.replace("/login")
    })

    return (
        <HeaderContainer>
            <h2>Blog Contra o Racismo</h2>

            <PagesList>
                <li><Link href="/blog-posts">Home</Link></li>
                <li><Link href="/create-post">Criar Post</Link></li>
                <li><Link href="#" onClick={() => logout()}>Logout</Link></li>
            </PagesList>
        </HeaderContainer>        
    ) 
}
