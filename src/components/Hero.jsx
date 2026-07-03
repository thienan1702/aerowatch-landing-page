import { motion } from "framer-motion";

export default function Hero({ dark }) {

  return (
   <section
  className={
    dark
      ? `
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-b
        from-[#050816]
        to-black
      `
      : `
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-b
        from-gray-100
        to-white
      `
  }
>

      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=
          {`
            text-4xl
            sm:text-5xl
            md:text-7xl
            lg:text-8xl
            font-bold
            ${dark ? "text-white" : "text-black"}
          `}        >
          AeroWatch X1
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`mt-6 text-xl ${
          dark
              ? "text-gray-300"
              : "text-gray-700"
          }`}
        >
          The Future On Your Wrist
        </motion.p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <button className="bg-blue-600 px-8 py-4 rounded-xl hover:scale-105 duration-300">
            Buy Now
          </button>

          <button
            className={`
              border
              px-8
              py-4
              rounded-xl
              duration-300
              ${
                dark
                  ? "border-white hover:bg-white hover:text-black"
                  : "border-black hover:bg-black hover:text-white"
              }
            `}
>            Watch Demo
          </button>

        </div>

      </div>

    </section>
  );
}