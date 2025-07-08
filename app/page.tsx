import Me from "./aboutme/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Footer from "./footer/page";

export default function Home() {
  return (
      <div className="select-none">
        <Me />
        <Experience />
        <Projects />
        <Footer />
      </div>
    );
}
