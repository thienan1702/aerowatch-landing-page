import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Specs from "./components/Specs";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Newsletter from "./components/Newsletter";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

function App() {

  const [dark, setDark] = useState(
    localStorage.getItem("theme") !== "light"
  );

  useEffect(() => {
    localStorage.setItem(
      "theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  return (
    <div className={dark ? "bg-[#050816] text-white" : "bg-white text-black"}>

      <Navbar
        dark={dark}
        setDark={setDark}
      />

      <Hero />
      <Features />
      <Specs />
      <Gallery />
      <Reviews />
      <Newsletter />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;