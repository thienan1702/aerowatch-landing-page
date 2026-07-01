export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold">
          AeroWatch X1
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#features" className="hover:text-blue-400 duration-300">
            Features
          </a>

          <a href="#specs" className="hover:text-blue-400 duration-300">
            Specs
          </a>

          <a href="#reviews" className="hover:text-blue-400 duration-300">
            Reviews
          </a>

          <a href="#contact" className="hover:text-blue-400 duration-300">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}