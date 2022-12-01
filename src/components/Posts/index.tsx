import Link from "next/link";
import React from "react";
import {usePost} from "../../hooks/usePost";
import {PostInfos} from "../../pages/interfaces";
import {Post, PostsContainer, PostsList} from "../styles/Posts";

export default function Posts() {

    const { getPosts } = usePost()
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        async function getPost() {
            const data = await getPosts()
            setPosts(data)
        }

        getPost()
    }, [])
    console.log(posts)

    return (
        <PostsContainer>
            <PostsList>
                {posts?.map((post: PostInfos, index: number) => (
                    <Post key={post.childKey}>
                        <div className="title">
                            <p>{index + 1}.</p>
                            <h4><Link href={`/blog-posts/${post.childKey}`}>{post.title}</Link></h4>
                        </div>
                        <p>{post.date}</p>
                    </Post>
                ))}

            </PostsList>
        </PostsContainer>
    )
}
