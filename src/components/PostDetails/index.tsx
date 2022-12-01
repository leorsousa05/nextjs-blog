import {useRouter} from "next/router";
import React from "react";
import {usePost} from "../../hooks/usePost";
import {PostInfos} from "../../pages/interfaces";
import {PostContainer} from "../styles/Posts";

export default function PostDetails() {
    const route = useRouter()

    const { id } = route.query

    const [postDetails, setPostDetails] = React.useState<PostInfos>({
        image: "",
        user: "",
        text: "",
        title: "",
        date: "",
        childKey: ""
    })

    const { getPost } = usePost()

    React.useEffect(() => {
        async function getPostDetails() {
            if(route.query.id) {
                const post = await getPost(id)
                setPostDetails(post)
            }
        }

        getPostDetails()
    }, [route.query.id])

    console.log(postDetails)


    return(
        <PostContainer>
            <div className="presentation">
                <div className="title">
                    <h2>{postDetails.title}</h2>
                    <p>Postado por: {postDetails.user}</p>
                </div>
                <img id="post-image" alt="" src={postDetails.image} />
            </div>
            <p id="post-text">{postDetails.text}</p>
        </PostContainer>
    )
}
