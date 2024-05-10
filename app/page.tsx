import Image from "next/image";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <AboutPage/> */}
      <HomePage /> 
      </main>
  );
}
