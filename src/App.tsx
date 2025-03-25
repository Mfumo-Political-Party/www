import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MissionStatement from "./components/MissionStatement";
import About from "./components/About";
import Policies from "./components/Policies";
import Leadership from "./components/Leadership";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <MissionStatement />
      <About />
      <Policies />
      <Leadership />
      <Footer />
    </div>
  );
}

export default App;
