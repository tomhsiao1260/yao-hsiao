import { useRouter } from "next/router";
import SwitchDarkmode from "@/components/SwitchDarkmode";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="bg-secondary bg-gray-100/70 dark:bg-gray-800/55 w-full h-[56px] flex items-center justify-between p-10 md:pl-10 md:pr-10 lg:pl-15 lg:pr-15">
      <div>
        <h1
          className="text-2xl text-slate-600 dark:text-slate-100 font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Yao Hsiao
        </h1>
      </div>
      <SwitchDarkmode />
    </nav>
  );
}
