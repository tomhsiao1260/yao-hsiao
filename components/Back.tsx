import { useRouter } from "next/router";

export default function Back() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/")}>
      back
    </button>
  );
}
