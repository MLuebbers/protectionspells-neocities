import { getTags } from "../lib/posts";
import TagComponent from "./Tag/Tag";

export default function TagList() {
    const tags = getTags();
    return (
      <ul className="mt-8">
        {tags.map((e, i) => <TagComponent key={i} text={e.name} />)}
      </ul>
    );
}