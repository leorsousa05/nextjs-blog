import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {collection, doc, getDoc, getDocs, query, setDoc, where} from "firebase/firestore"
import {useRouter} from "next/router"
import React from "react"
import {app, auth, db} from "../api/firebaseConnection"
import {hashPassword} from "../api/userAuthFunctions"

type AuthInterface = {
    signup: Function
    login: Function
    logout: Function
}

type UserCredential = {
    _tokenResponse: string
}

export const AuthContext = React.createContext<AuthInterface>({
    signup: () => {},
    login: () => {},
    logout: () => {}
})

type Props = { children: JSX.Element }

export default function AuthProvider({ children }: Props) {

    const route = useRouter()


    async function signup(email: string, password: string, username: string) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            setDoc(doc(db, "users", user.uid), {
                username: username,
                email: userCredential.user.email,
                password: hashPassword(password)
            })
            .then(() => console.log("Sucesso"))
            .catch((error) => console.error(error))
        })
    }

    async function login(email: string, password: string) {
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const q = query(collection(db, "users"), where("email", "==", userCredential.user.email))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc) => {
                    localStorage.setItem("username", doc.data().username)
                })
                resolve(() => {
                    route.replace("/home")
                })
            })
            .catch((error) => {
                reject(() => console.error(error))
            })
        })
    }

    async function logout() {
        return new Promise((resolve, reject) => {
            const auth = getAuth(app)
            signOut(auth)
            .then(() => {
                resolve("Deslogado com sucesso!")
                route.replace("/login")
            })
            .catch(() => reject("Um erro aconteceu!"))
        })
    }

    return(
        <AuthContext.Provider value={{ signup, login, logout }}>
            { children }
        </AuthContext.Provider>
    )

}
