import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import logger from "../src/libs/logger";
import "antd/dist/antd.css";

import "../styles/globals.scss";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // useEffect(() => {
  //   typeof document !== undefined
  //     ? require("bootstrap/dist/css/bootstrap.css")
  //     : null;
  // }, []);

  useEffect(() => {
    const handleStart = (url: string) => {
      logger.debug("🚀🚀🚀 ~ file: _app.tsx ~ handleStart ~ url", url);
    };
    const handleStop = () => {
      logger.debug("🚀🚀🚀 ~ file: _app.tsx ~ handleStop", "LoadingStop");
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default MyApp;
