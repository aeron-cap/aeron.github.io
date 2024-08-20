import Navbar from "./components/Navbar";
import Me from "./aboutme/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Spotlight, { SpotlightCard } from "./components/spotlight";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div className="select-none flex bg-slate-900">
      {/* <aside className="basis-64">
        <Navbar />
      </aside> */}

      <div className="flex flex-col">
        <Spotlight>
          <SpotlightCard>
            <Me />
            <Experience />
            <Projects />
            <Footer />
          </SpotlightCard>
        </Spotlight>
      </div>
    </div>
  );
}
