import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Hero from "./sections/Hero";
import Metrics from "./sections/Metrics";
import Services from "./sections/Services";
import Works from "./sections/Works";

function App() {
  return (
    <div className="min-h-screen w-full font-family bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Metrics />
        <Services />
        <Works />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
