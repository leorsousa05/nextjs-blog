import sha256 from 'crypto-js/sha256'
import CryptoJS from 'crypto-js'
import {addDoc, collection, DocumentData, getDocs, query, where} from 'firebase/firestore'
import {db} from './firebaseConnection'

type DBUserData = [{
    email?: string,
    password?: string,
}] | DocumentData[]

type UserData = {
    email: string,
    password: string,
}

interface UserSignIn {
    email: string,
    password: string,
    username: string,
}

export function hashPassword(password: string) {
    return sha256(password).toString(CryptoJS.enc.Hex)
}

export function emailIsValid(email: string) {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

export async function compareLogin(userData: UserData): Promise<DocumentData[]> {

    return await new Promise(async (resolve, reject) => {

        if(emailIsValid(userData.email)) {
            const userSnapshot = await getDocs(query(collection(db, "users"), where("email", "==", userData.email)))
            let dbUserData: DBUserData = [{}]

            userSnapshot.forEach(doc => {
                let dataArray = []
                dataArray.push(doc.data())
                dbUserData = dataArray
            })

            if(dbUserData[0].email === userData.email && hashPassword(userData.password) === dbUserData[0].password) {
                resolve(dbUserData)
            } else {
                reject("Email ou Senha incorreto!")
            }
        } else {
            reject("Email inválido")
        }

    })
}

export async function registerUser(userData: UserSignIn): Promise<string> {
    return await new Promise(async (resolve, reject) => {
        if(emailIsValid(userData.email)) {
            const userSnapshot = await getDocs(query(collection(db, "users"), where("email", "==", userData.email)))
            let dbUserData: DBUserData = [{}]

            userSnapshot.forEach(doc => {
                let dataArray = []
                dataArray.push(doc.data())
                dbUserData = dataArray
            })
            console.log(dbUserData[0])

            !dbUserData[0].email ? addDoc(collection(db, "users"), {
                email: userData.email,
                password: hashPassword(userData.password),
                username: userData.username
            }).then(() => {
                resolve("Usuário cadastrado!")
            }) : reject("Usuário já existe!")
        }
    })
}
