import { marked } from "marked"

interface Props {
    children: string
}

export default function Markdown({children}: Props) {
    return (<div dangerouslySetInnerHTML={{ __html: marked.parse(children).toString() }} />)
}