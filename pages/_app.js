import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div className="bg-slate-200 min-h-screen">
      <SessionProvider session={session}>
        <Navbar />
        <div className="pt-24 pb-10">
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </div>
  );
}
