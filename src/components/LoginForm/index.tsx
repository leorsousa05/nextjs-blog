import Link from "next/link";
import {useRouter} from "next/router";
import React, {FormEvent} from "react";
import {toast, ToastOptions} from "react-toastify";
import {useAuth} from "../../hooks/useAuth";
import {FormContainer, Inputs, InputsContainer, SubmitButton} from "../styles/FormStyles";

export default function LoginForm() {

    const router = useRouter()
    const toastOptions: ToastOptions<{}> = {position: "bottom-right"} 

    const { login } = useAuth()

    const [inputs, setInputs] = React.useState({ email: "", password: ""})


    function handleLogin(e: FormEvent) {
        e.preventDefault()
        login(inputs.email, inputs.password)
        .then(() => {
            toast("Logado com sucesso! Redirecionando...", toastOptions)
            router.replace("/blog-posts")
        })
        .catch(() => toast.error("Usuário não encontrado!", toastOptions))
    }

    return(
        <FormContainer height="100%" onSubmit={handleLogin}>

            <h1>Juntos Contra o Racismo</h1>

            <InputsContainer>
                <label htmlFor="email">Email</label>

                <Inputs
                    type="text" 
                    id="email"
                    onChange={(e) => setInputs({...inputs, email: e.target.value})}
                />

                <label htmlFor="password">Password</label>
                <Inputs 
                    type="password" 
                    id="password"
                    onChange={(e) => setInputs({...inputs, password: e.target.value})}
                />
                <SubmitButton type="submit">Submit</SubmitButton>
                <Link href="/register">Registre-se</Link>
            </InputsContainer>
        </FormContainer>
    )
}
