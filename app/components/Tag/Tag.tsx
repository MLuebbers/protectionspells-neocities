import "./style.css";

interface Props {
    text: string
}

export default function Tag({text}: Props) {
    return (<span className="mr-2 underline">#{text}</span>)
}