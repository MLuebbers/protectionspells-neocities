import { marked } from "marked"
import { ReactElement } from "react"
import DOMPurify from "dompurify"

interface Props {
    children: string
}

export default async function Markdown({children}: Props) {
    return (<div dangerouslySetInnerHTML={{ __html: await marked.parse(children) }} />)
}