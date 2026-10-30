import Link from "next/link";
import Head from "next/head";
import articles from "../blogs/articles.json";
import site from "../site.config.json";
import Navbar from "@/components/Navbar";

interface ItemProps {
  title: string;
  date: string;
  route: string;
  description: string;
}

export default function Home() {
  // Sort articles by date in descending order (newest first)
  const sortedArticles = [...articles].sort((a, b) => {
    const dateA = new Date(a.date.replace(/\./g, '-'));
    const dateB = new Date(b.date.replace(/\./g, '-'));
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
        <link rel="canonical" href={`${site.url}/`} />
        <meta property="og:url" content={`${site.url}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={site.title} key="title" />
        <meta
          property="og:description"
          content={site.description}
          key="description"
        />
      </Head>
      <Navbar />
      <ul
        role="list"
        className="divide-y divide-gray-100 px-[20px] sm:px-[60px] md:px-[150px] lg:px-[240px] py-[20px]"
      >
        {sortedArticles?.map((article) => (
          <Item key={article.route} {...article} />
        ))}
      </ul>
    </>
  );
}

function Item({ title, date, route, description }: ItemProps) {
  return (
    <li>
      <Link
        href={`/${route}`}
        className="block px-10 py-5 hover:bg-gray-100 dark:hover:text-black rounded-md"
      >
        <span className="block text-2xl font-semibold leading-7">{title}</span>
        <p className="mt-1 truncate text-md leading-10">{description}</p>
        <p className="mt-1 truncate text-xs leading-7 text-gray-500">{date}</p>
      </Link>
    </li>
  );
}
