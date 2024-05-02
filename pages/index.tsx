import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
//@ts-ignore
import articles from "../blogs/articles.json";
import SwitchDarkmode from "@/components/SwitchDarkmode";

interface ItemProps {
  title: string;
  date: string;
}

export default function Home() {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 px-[20px] sm:px-[60px] md:px-[150px] lg:px-[240px] py-[20px]"
    >
      <SwitchDarkmode />
      {articles?.map((article) => (
        <Item key={uuidv4()} {...article} />
      ))}
    </ul>
  );
}

function Item({ title, date }: ItemProps) {
  const router = useRouter();
  const [year, month, day] = date.split(".");

  return (
    <li
      className="flex px-10 justify-between gap-x-6 py-5 hover:bg-gray-100 dark:hover:text-black rounded-md cursor-pointer"
      onClick={() => router.push(`/${month}-${day}-${year}`)}
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
