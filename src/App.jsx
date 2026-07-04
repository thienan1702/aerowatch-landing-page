import {
  useEffect,
  useState,
  lazy,
  Suspense
} from "react";
import toast from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
const Features = lazy(() =>
  import("./components/Features")
);
const Specs = lazy(() =>
  import("./components/Specs")
);
const Gallery = lazy(() =>
  import("./components/Gallery")
);

const Reviews = lazy(() =>
  import("./components/Reviews")
);

const Newsletter = lazy(() =>
  import("./components/Newsletter")
);

const Chatbot = lazy(() =>
  import("./components/Chatbot")
);
import Footer from "./components/Footer";
const Products = lazy(() =>
  import("./components/Products")
);
const RecentlyViewed = lazy(() =>
  import("./components/RecentlyViewed")
);

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
  className={`
    min-h-screen
    ${
      dark
        ? "bg-[#050816] text-white"
        : "bg-white text-black"
    }
    `}
    >

      <Navbar
        dark={dark}
        setDark={setDark}
      />

      <Hero dark={dark} />

<Suspense fallback={null}>
    <Features />
</Suspense>

<Suspense fallback={null}>
    <Products />
</Suspense>

<Suspense fallback={null}>
    <Specs />
</Suspense>

<Suspense fallback={null}>
    <RecentlyViewed />
</Suspense>
      <Suspense fallback={null}>
  <Gallery />
</Suspense>

<Suspense fallback={null}>
  <Reviews />
</Suspense>

<Suspense fallback={null}>
  <Newsletter />
</Suspense>

<Suspense fallback={null}>
  <Chatbot />
</Suspense>
      <Footer />

    </div>
  );
}

export default App;