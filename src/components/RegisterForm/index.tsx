import React from "react";
import Link from "next/link";

import {toast, ToastOptions} from "react-toastify";
import { FormContainer, Inputs, InputsContainer, SubmitButton } from "../styles/FormStyles";

import {useAuth} from "../../hooks/useAuth";
import { useRouter } from "next/router";
import {emailIsValid} from "../../api/userAuthFunctions";

export default function RegisterForm() {

    const router = useRouter()
    const toastOptions: ToastOptions<{}> = {position: "bottom-right"} 

    const [inputs, setInputs] = React.useState({ email: "", password: "", username: "" })
    const { signup } = useAuth()

    function handleRegister(e: React.FormEvent) {
        e.preventDefault()
        if(inputs.password.length < 6 && emailIsValid(inputs.email)) {
            toast("Email ou senha inválido! Obs: senha apenas com mais de 6 caracteres.")
        } else {
            signup(inputs.email, inputs.password, inputs.username)
            .then(() => {
                toast("Cadastrado com sucesso! Redirecionando...", toastOptions)
                router.replace("/")
            })
            .catch(() => toast.error("Usuário já existe!", toastOptions))
        }
    }

    return(
        <FormContainer height="100%" onSubmit={handleRegister}>

            <h1>Juntos Contra o Racismo</h1>

            <InputsContainer>

                <label htmlFor="email">Email</label>
                <Inputs
                    type="text" 
                    id="email"
                    onChange={(e) => setInputs({...inputs, email: e.target.value})}
                />

                <label htmlFor="username">Nome de usuário</label>
                <Inputs
                    type="text"
                    id="username"
                    onChange={(e) => setInputs({...inputs, username: e.target.value})}
                />

                <label htmlFor="password">Senha</label>
                <Inputs
                    type="password" 
                    id="password"
                    onChange={(e) => setInputs({...inputs, password: e.target.value})}
                />

                <SubmitButton type="submit">Submit</SubmitButton>

            </InputsContainer>

            <Link href="/login">LogIn</Link>
        </FormContainer>
    )
}
