import Navbar from "./components/Navbar";
import Me from "./aboutme/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Spotlight, { SpotlightCard } from "./components/spotlight";
import Footer from "./footer/page";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <div className="select-none flex">
      <Analytics />
      <SpeedInsights />
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
