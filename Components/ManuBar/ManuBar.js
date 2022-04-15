import Link from "next/link";
import Layout from "../layout/Layout";

const ManuBar = () => {
  return (
    <div className="flex  mb-1 w-full text-2xl bg-black text-white py-5">
      <span className="grow">
        <Link href="/">
          <a className="m-2 py-3 ">Home</a>
        </Link>
      </span>

      <span>
        <Link href="/about">
          <a className="m-2 py-3 ">About</a>
        </Link>
        <Link href="/contact">
          <a className="m-2 py-3 ">Contact</a>
        </Link>
        <Link href="/blog">
          <a className="m-2 py-3 ">Blog</a>
        </Link>
      </span>
    </div>
  );
};

export default ManuBar;
