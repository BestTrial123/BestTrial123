import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlanVisit from "./components/PlanVisit";
import Beliefs from "./components/Beliefs";
import Leadership from "./components/Leadership";
import Sermons from "./components/Sermons";
import Events from "./components/Events";
import Donate from "./components/Donate";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-navy-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <PlanVisit />
        <Beliefs />
        <Leadership />
        <Sermons />
        <Events />
        <Donate />
        <Blog />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
