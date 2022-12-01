import styled from "styled-components";

export const PostsContainer = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const PostsList = styled.ul`
    list-style: none;     
    display: flex;
    flex-direction: column;
    width: 60rem;
`

export const Post = styled.li`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;

    .title {
        display:flex;
        flex-direction: row;
        align-items: center;

        > p {
            margin: 0;    
        }
        
        h4 {
            margin: 0 .8rem;
        }
    }
    
    > p {
        padding: .4rem 0;
        font-size: .8rem;
        font-weight: 700;
        margin: 0;
        opacity:40%;
    }
    
`

export const PostContainer = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;

    > p {
        display: flex;
        max-width: 43.75em;
        align-items: center;
        text-align: left;
    }

    img {
        width: 100%;
    }

    .presentation {

        .title {
            display: flex;
            flex-direction: row;
            align-items: baseline;
            justify-content: center;

            p {
                padding: 0 1rem;
            }
        }
    }
`
