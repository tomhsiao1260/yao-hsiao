import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </div>
  );
}
