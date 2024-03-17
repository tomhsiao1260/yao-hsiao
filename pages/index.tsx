import { useRouter } from "next/router";

interface ItemProps {
  title: string;
  date: string;
}

function Item({ title, date }: ItemProps) {
  const router = useRouter();
  const [year, month, day] = date.split(".");

  return (
    <div className="min-w-0 flex-auto">
      <button
        type="button"
        className="text-lg font-semibold leading-6 text-gray-900"
        onClick={() => router.push(`/${month}-${day}-${year}`)}
      >
        {title}
      </button>
      <p className="mt-1 truncate text-xs leading-5 text-gray-500">{date}</p>
    </div>
  );
}

export default function Home() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      <li className="flex px-10 justify-between gap-x-6 py-5">
        <Item title="那我們開始吧！" date="2024.01.31" />
      </li>
      <li className="flex px-10 justify-between gap-x-6 py-5">
        <Item title="Vesuvius Challenge 一週年的感想" date="2024.02.29" />
      </li>
      <li className="flex px-10 justify-between gap-x-6 py-5">
        <Item title="圖學相關 (標題未定)" date="2024.03.31" />
      </li>
    </ul>
  );
}
