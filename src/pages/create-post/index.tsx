import React from "react"
import CreatePosts from "../../components/CreatePosts"
import Header from "../../components/Header"
import {IndexDiv} from "../../components/styles/indexStyle"


export default function createPost() {
    return(
        <IndexDiv>
            <Header />
            <CreatePosts />
        </IndexDiv>
    )
}
