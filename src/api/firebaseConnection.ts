import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfigs = {
    apiKey: "AIzaSyDiahvD3KPXj30G2yX7eZEFWbs8nt544oY",
    authDomain: "notional-gist-360921.firebaseapp.com",
    projectId: "notional-gist-360921",
    storageBucket: "notional-gist-360921.appspot.com",
    messagingSenderId: "69925262760",
    appId: "1:69925262760:web:4c2190b768c575ae64799d",
    measurementId: "G-FNYS9QPSCY"
}

export const app = initializeApp(firebaseConfigs)
export const auth = getAuth(app)
export const db = getFirestore(app)
