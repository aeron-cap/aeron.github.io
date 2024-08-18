import Image from "next/image";
import Experience from "./components/Experience";
import Me from "./components/Me";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="select-none flex bg-blue-950">
      <aside className="basis-64">
        <Navbar />
      </aside>
      <div>
        <Me />
        <Experience />
      </div>
    </div>
  );
}
