import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="min-h-screen flex items-center justify-center">

      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold"
        >
          AeroWatch X1
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-gray-300"
        >
          The Future On Your Wrist
        </motion.p>

        <div className="mt-10 flex justify-center gap-5">

          <button className="bg-blue-600 px-8 py-4 rounded-xl hover:scale-105 duration-300">
            Buy Now
          </button>

          <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black duration-300">
            Watch Demo
          </button>

        </div>

      </div>

    </section>
  );
}