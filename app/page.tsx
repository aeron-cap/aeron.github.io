import Image from "next/image";
import Experience from "./components/Experience";
import Me from "./components/Me";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="select-none flex bg-gradient-to-r from-blue-950 to-blue-500">
      <aside className="basis-64">
        <Navbar />
      </aside>
      <main>
        <Me />
        <Experience />
      </main>
    </div>
  );
}
