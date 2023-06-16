import "@styles/global.css";
import Header from "../components/Header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Crypto index",
  description: "A NextJS Cryptot index",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="bg-[#08060B] text-white">
          <div className="main p-4 max-w-[1600px] mx-auto">
            <Header />
            <div className="app">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
