import React from "react";
import Header from "../../../components/Header";
import PostDetails from "../../../components/PostDetails";
import {IndexDiv} from "../../../components/styles/indexStyle";

export default function blogPost() {

    return(
        <IndexDiv>
            <Header />
            <PostDetails />
        </IndexDiv>    
    )
}
