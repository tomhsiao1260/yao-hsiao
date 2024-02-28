import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <button type="button" onClick={() => router.push("/01-31-24")}>
        一月
      </button>
      <button type="button" onClick={() => router.push("/02-29-24")}>
        二月
      </button>
    </>
  );
}
