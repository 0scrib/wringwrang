import Markdown from "react-markdown";
import { posts } from "../lib/posts";
import { format} from "date-fns";

function FormatDate(date) {
    const current = new Date()

    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    const utc2 = Date.UTC(current.getFullYear(), current.getMonth(), current.getDate());

    const diff =  Math.floor((utc2 - utc1) / _MS_PER_DAY);
    if (diff === 0) {
        return "vandaag!"
    }
    else if (diff === 1) {
        return "gisteren"
    }
    else {
        return format(date, "DD-MM-YYYY")
    }
}

export function PostsRenderer() {

     return (
        <div>
            {posts.map(post => (
                <article key={post.slug}>
                    <h2 class="post-title">{post.meta.title}</h2> <span class="post-date"> * ({FormatDate(post.meta.date)})</span>
                    <Markdown>{post.content}</Markdown>
                </article>
            ))}
        </div>
    );
}