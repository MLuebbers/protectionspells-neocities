import "../../globals.css";
import "./style.css";
import Tag from "../Tag/Tag";
import Markdown from "../Markdown";

interface Props {
    title: string,
    subtitle: string,
    date: string,
    tags: string[],
    body: string,
}

export default function Home({title, subtitle, date, tags, body}: Props) {
  return (
    <div>
        <h1>
            {title}
        </h1>
        <h2 className="italic">
            {subtitle} {date}
        </h2>
        <ul className="mt-2">
            {tags.map((tag) => <Tag text={tag} />)}
        </ul>
        <div>
            <Markdown>{body}</Markdown>
        </div>
    </div>
  );
}