import {useRouter} from "next/router"
import React from "react"

export default function Home() {
    const route = useRouter() 

    React.useEffect(() => {
        route.replace("/login")
    })

    return (
        <></>
    )
}
