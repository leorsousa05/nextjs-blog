import React from "react";
import {usePost} from "../../hooks/usePost";
import {FormContainer, Inputs, InputsContainer, SubmitButton, TextArea} from "../styles/FormStyles";

type InputsData = {
    imgLink: string
    text: string
    title: string
}

export default function CreatePosts() {

    const { addPost } = usePost()

    const [inputs, setInputs] = React.useState<InputsData>({
        imgLink: "",
        text: "",
        title: "",
    })

    const { imgLink, text, title } = inputs
    
    function handleSubmit() {
        addPost(imgLink, text, title) 
    }

    return (
        <FormContainer 
            height="calc(100vh - 80px)"
            onSubmit={handleSubmit}
        >

            <InputsContainer>
                <label htmlFor="img">Image</label>
                <Inputs
                    type="text"
                    placeholder="Image Link"
                    onChange={(e) => setInputs({...inputs, imgLink: e.target.value})}
                    id="img"
                />   

                <label htmlFor="title">Título</label>
                <Inputs
                    type="text"
                    placeholder="Title"
                    id="title"
                    onChange={(e) => setInputs({...inputs, title: e.target.value})}
                />

                <label htmlFor="text">Texto</label>
                <TextArea
                    placeholder="Blog text"
                    id="text"
                    onChange={(e) => setInputs({...inputs, text: e.target.value})}
                />

                <SubmitButton type="submit">Adicionar Post</SubmitButton>

            </InputsContainer>
        </FormContainer> 

    )
}
