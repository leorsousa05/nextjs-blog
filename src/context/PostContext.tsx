import {addDoc, collection, doc, DocumentData, getDoc, getDocs, query, Timestamp} from "firebase/firestore";
import React from "react";
import {toast} from "react-toastify";
import {db} from "../api/firebaseConnection";

type PostContextType = {
    addPost: Function
    getPosts: Function
    getPost: Function
}

type Props = {
    children: JSX.Element
}

export const PostContext = React.createContext<PostContextType>({
    addPost: () => {},
    getPosts: () => {},
    getPost: () => {}
})


export default function PostProvider({ children }: Props) {

    function addPost(image: string, text: string, title: string) {
        const date = new Date()
        const t = Timestamp.fromDate(date)
        const user = localStorage.getItem("username")
        addDoc(collection(db, 'posts'), {
            date: t.toDate(),
            image: image,
            text: text,
            title: title,
            user: user
        }).then(() => toast("Cadastrado com sucesso!"))
        .catch((error) => toast.error("Erro, tente novamente mais tarde."))
    }

    async function getPosts() {
        let posts: DocumentData = []
        const querySnapshot = await getDocs(query(collection(db, "posts")))
        const data = querySnapshot.forEach((doc) => {
            const data = doc.data()
            const date = new Date(data.date.seconds * 1000).toLocaleDateString()
            data.date = date
            const childKey = doc.id
            posts.push({...data, childKey})
        })
        return posts
    }

    async function getPost(postId: string) {
        const postsRef = doc(db, "posts", postId)
        const postDoc = await getDoc(postsRef)
        .then((snapshot) => {
            return snapshot.data()
        })
        .catch(() => {
            return new Error("Erro ao buscar!")
        })
        return postDoc
    }


return(
    <PostContext.Provider value={{ addPost, getPosts, getPost }}>
        { children }
    </PostContext.Provider>
)
}
