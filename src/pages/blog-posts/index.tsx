import React from "react";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import {IndexDiv} from "../../components/styles/indexStyle";

export default function BlogPosts() {
    
    return(
        <IndexDiv>
            <Header />
            <Posts />
        </IndexDiv>
    )
}
