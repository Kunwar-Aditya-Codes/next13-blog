import { getSortedPostData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostData();

  return (
    <section className="space-y-6">
      <h2 className=" px-4 text-center md:text-start text-2xl md:text-3xl font-light uppercase tracking-widest">
        Blogs
      </h2>
      <ul>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
