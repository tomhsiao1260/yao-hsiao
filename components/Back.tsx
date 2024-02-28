import { useRouter } from "next/router";

export default function Back() {
  const router = useRouter();

  return <button onClick={() => router.push("/")}>Back</button>;
}
