export default function Navbar({
  dark,
  setDark
}) {

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-black/30
      backdrop-blur-lg
      border-b
      border-white/10"
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

          <button
            onClick={() => setDark(!dark)}
            className="
            border
            px-4
            py-2
            rounded-lg
            hover:bg-white
            hover:text-black
            duration-300"
          >
            {dark ? "☀️" : "🌙"}
          </button>

        </div>

      </div>

    </nav>
  );
}