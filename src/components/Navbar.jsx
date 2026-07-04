import { Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({
  dark,
  setDark
}) {

  const [wishlistCount, setWishlistCount] =
    useState(0);

  const [cartCount, setCartCount] =
    useState(0);

  useEffect(() => {

    const updateCounts = () => {

      const wishlist =
        JSON.parse(
          localStorage.getItem("wishlist")
        ) || [];

      const cart =
        JSON.parse(
          localStorage.getItem("cart")
        ) || [];

      setWishlistCount(
        wishlist.length
      );

      setCartCount(
        cart.length
      );
    };

    updateCounts();

    window.addEventListener(
      "storageUpdate",
      updateCounts
    );

    return () =>
      window.removeEventListener(
        "storageUpdate",
        updateCounts
      );

  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-lg
        border-b
        ${
          dark
            ? "bg-black/30 border-white/10"
            : "bg-white/80 border-black/10"
        }
      `}
    >

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          justify-between
          items-center
          px-8
          py-5"
      >

        <h1 className="text-2xl font-bold">
          AeroWatch X1
        </h1>

        <div className="hidden md:flex gap-6 items-center">

          <a href="#features">
            Features
          </a>

          <a href="#specs">
            Specs
          </a>

          <a href="#reviews">
            Reviews
          </a>

          {/* Wishlist */}
          <div className="relative">

            <Heart
              size={22}
              className="cursor-pointer"
            />

            {wishlistCount > 0 && (
              <span
                className="
                  absolute
                  -top-2
                  -right-2
                  bg-red-500
                  text-white
                  text-xs
                  rounded-full
                  px-1"
              >
                {wishlistCount}
              </span>
            )}

          </div>

          {/* Cart */}
          <div className="relative">

            <ShoppingCart
              size={22}
              className="cursor-pointer"
            />

            {cartCount > 0 && (
              <span
                className="
                  absolute
                  -top-2
                  -right-2
                  bg-blue-500
                  text-white
                  text-xs
                  rounded-full
                  px-1"
              >
                {cartCount}
              </span>
            )}

          </div>

          {/* Dark mode */}
          <button
          aria-label={
      dark
      ? "Switch to light mode"
      : "Switch to dark mode"
  }
            onClick={() =>
              setDark(!dark)
            }
            className={`
              border
              px-4
              py-2
              rounded-lg
              duration-300
              ${
                dark
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }
            `}
          >
            {dark ? "☀️" : "🌙"}
          </button>

        </div>

      </div>

    </nav>
  );
}