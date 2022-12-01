export interface Props {
    children: JSX.Element[] | JSX.Element
}

interface Input {
    email: string,
    password: string
}

export type UserData = DocumentData<{
    email: string
    password: string
    username: string
}>

export type PostInfos = {
    date: string
    childKey: string
    image: string
    text: string
    title: string
    user: string
}
