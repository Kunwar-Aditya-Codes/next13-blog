import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const posts = getSortedPostData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

// metadata
export function generateMetadata({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const posts = getSortedPostData();
  const { postId } = params;

  const post = posts.find((post) => postId === post.id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post?.title,
  };
}

// main function
export default async function Post({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const posts = getSortedPostData();
  const { postId } = params;

  if (!posts.find((post) => postId === post.id)) {
    return notFound();
  }

  const { title, date, contentHtml, author } = await getPostData(postId);
  const formattedDate = getFormattedDate(date);

  return (
    <main className="py-4">
      <h1 className="text-center px-4 md:text-start font-medium text-xl md:text-2xl underline underline-offset-4 decoration-[#4fd1c5]">
        {title}
      </h1>
      <p className="text-center px-4 md:text-start text-slate-400 mt-1">
        {formattedDate} | {author}
      </p>
      <article className="mt-6 prose prose-full dark:prose-invert  prose-2xl">
        <section
          className="text-justify px-6 md:px-4 font-light text-lg"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
      <p className="mt-4 px-4  text-center md:text-start font-medium text-[#4fd1c5] text-lg">
        <Link href="/">← Back to home</Link>
      </p>
    </main>
  );
}
