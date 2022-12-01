import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'

import AuthProvider from '../context/AuthContext'
import PostProvider from '../context/PostContext'

import type { AppProps } from 'next/app'
import {ToastContainer} from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <PostProvider>
                <>
                    <Component {...pageProps} />
                    <ToastContainer />
                </>
            </PostProvider>
        </AuthProvider>
    )
}
