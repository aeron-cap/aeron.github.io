import Navbar from "./components/Navbar";
import Me from "./aboutme/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Spotlight, { SpotlightCard } from "./components/spotlight";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div className="select-none flex">
      <div className="flex flex-col">
        <Spotlight>
          <SpotlightCard>
            {/* <Navbar /> */}
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
