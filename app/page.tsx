import Navbar from "./components/Navbar";
import Me from "./aboutme/page";
import Experience from "./experience/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="select-none flex bg-blue-950">
      <aside className="basis-64">
        <Navbar />
      </aside>
      <div className="flex flex-col">
        <Me />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
