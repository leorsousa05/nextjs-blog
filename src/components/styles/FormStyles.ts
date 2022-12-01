import styled from "styled-components"

interface Props {
    height?: string
}

export const Inputs = styled.input`
    width: 100%;
    margin: 0 0 1rem 0;
    padding: .5rem .3rem;
    border-radius: 4px;
    border: .5px solid rgba(255, 255, 255, .4);
    background-color: rgba(255, 255, 255, .05);
    color: white;
`

export const SubmitButton = styled.button`
    width: 100%;
    background-color: #4bb543;
    border-radius: 5px;
    border: 1px solid #3E3E3E;
    padding: .6rem 0;    
    font-weight: 900;
    font-size: 1.1rem;
    color: rgba(0, 0, 0);
`

export const FormContainer = styled.form<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${props => props.height};
    padding: 4rem; 
    background-color: #121212;

    label {
        display: block;
        width: 100%;
        text-align: left;
        color: white;
    }

    a {
        margin: 1rem 0;
        color: white;
        text-align: center;
    }

    h1 {
        text-align: center;
        color: white;
    }
`

export const InputsContainer = styled.div`
    max-width: 40rem;
    flex-direction: column;
    display: flex;
    justify-content: center;
    width: 100%;
`

export const TextArea = styled.textarea`
    width: 100%;
    margin: 0 0 1rem 0;
    padding: .5rem .3rem;
    border-radius: 4px;
    border: .5px solid rgba(255, 255, 255, .4);
    background-color: rgba(255, 255, 255, .05);
    color: white;
`
