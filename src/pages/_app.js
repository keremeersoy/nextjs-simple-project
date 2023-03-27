import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  return (
    <div style={poppins.style}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
