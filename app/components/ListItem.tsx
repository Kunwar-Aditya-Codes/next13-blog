import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
  post: Blog;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, author } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <Link href={`/posts/${id}`} className="text-center md:text-start ">
      <li className="hover:bg-[#4fd1c5]/20 transition ease-out duration-[250ms] px-4 rounded-md py-3 mb-6 space-y-1">
        <h1 className="text-lg md:text-xl font-light underline underline-offset-4 decoration-[#4fd1c5]">
          {title}
        </h1>
        <p className="text-slate-400 font-extralight">
          {formattedDate} | {author}
        </p>
      </li>
    </Link>
  );
}
