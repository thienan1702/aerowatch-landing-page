import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Specs from "./components/Specs";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Newsletter from "./components/Newsletter";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Products from "./components/Products";
import RecentlyViewed from "./components/RecentlyViewed";

function App() {

  const [dark, setDark] = useState(
    localStorage.getItem("theme") !== "light"
  );

  // Dark Mode
  useEffect(() => {

    localStorage.setItem(
      "theme",
      dark ? "dark" : "light"
    );

    // Theo dõi hành vi đổi theme
    console.log(
      "Theme changed:",
      dark ? "Dark" : "Light"
    );

  }, [dark]);

  // Theo dõi hành vi scroll
  useEffect(() => {

    let notified = false;

    const handleScroll = () => {

      const percent =
        (
          window.scrollY /
          (
            document.body.scrollHeight -
            window.innerHeight
          )
        ) * 100;

      console.log(
        "User scroll:",
        percent.toFixed(0) + "%"
      );

      if (
        percent >= 50 &&
        !notified
      ) {

        notified = true;

        toast.success(
          "You've explored over 50% of our website!"
        );
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <div
      className={
        dark
          ? "bg-[#050816] text-white"
          : "bg-white text-black"
      }
    >

      <Navbar
        dark={dark}
        setDark={setDark}
      />

      <Hero />
      <Features />
      <Products />
      <Specs />
      <Gallery />
      <RecentlyViewed />
      <Reviews />
      <Newsletter />
      <Chatbot />
      <Footer />

    </div>
  );
}

export default App;