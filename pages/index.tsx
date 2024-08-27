import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
//@ts-ignore
import articles from "../blogs/articles.json";
import Navbar from "@/components/Navbar";

interface ItemProps {
  title: string;
  date: string;
  route: string;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Yao Hsiao</title>
        <meta property="og:title" content="Yao Hsiao" key="title" />
        <meta
          property="og:description"
          content="Love visual things. Working on Vesuvius Challenge."
          key="description"
        />
      </Head>
      <Navbar />
      <ul
        role="list"
        className="divide-y divide-gray-100 px-[20px] sm:px-[60px] md:px-[150px] lg:px-[240px] py-[20px]"
      >
        {articles?.map((article) => (
          <Item key={uuidv4()} {...article} />
        ))}
      </ul>
    </>
  );
}

function Item({ title, date, route }: ItemProps) {
  const router = useRouter();
  const [year, month, day] = date.split(".");

  return (
    <li
      className="flex px-10 justify-between gap-x-6 py-5 hover:bg-gray-100 dark:hover:text-black rounded-md cursor-pointer"
      onClick={() => router.push(route)}
    >
      <div className="min-w-0 flex-auto">
        <button type="button" className="text-lg font-semibold leading-6">
          {title}
        </button>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{date}</p>
      </div>
    </li>
  );
}
