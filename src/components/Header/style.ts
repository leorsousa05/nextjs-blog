import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #121212;

    h2 {
        color: white;
        padding: 0 0 0 2em;
    }

    @media (max-width: 576px) {
        font-size: .8rem;
    }
`

export const PagesList = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    color: white;
    font-weight: 800;
        padding: 0 10em 0 0;

    li {
        margin: 0 .5em;
    }

    @media (max-width: 768px) {
        padding: 0 1em 0 0;
    }
`
