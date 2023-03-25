import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonBadge } from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-4 py-7 flex flex-col md:flex-row space-y-4 md:space-y-0 md:items-center md:justify-between">
      <div className="text-center">
        <Link href={"/"}>
          <h1 className="text-[#4fd1c5] text-3xl font-bold tracking-wide md:text-4xl">
            Kunwar Aditya
          </h1>
        </Link>
      </div>
      <div className="text-2xl flex items-center space-x-16 text-slate-400 justify-center">
        <Link href={"https://github.com/Kunwar-Aditya-Codes"} target="_blank">
          <FaGithub />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/kunwar-aditya-117633191/"}
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href={"https://kunwar-aditya-portfolio.vercel.app/"}
          target="_blank"
        >
          <BsPersonBadge />
        </Link>
      </div>
    </nav>
  );
}
