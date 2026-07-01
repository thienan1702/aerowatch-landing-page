import { motion } from "framer-motion";
import { Heart, Battery, Bluetooth } from "lucide-react";
export default function Features() {

  const features = [
    {
      icon: <Heart size={40} />,
      title: "AI Health Monitor",
      desc: "Real-time heart rate, sleep tracking and health analytics."
    },
    {
      icon: <Bluetooth size={40} />,
      title: "Bluetooth 5.4",
      desc: "Fast and stable connectivity across all your devices."
    },
    {
      icon: <Battery size={40} />,
      title: "14 Days Battery",
      desc: "Ultra long-lasting battery life with fast charging."
    }
  ];

  return (
    <section
      id="features"
      className="py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2
              }}
              className="
                bg-slate-900
                p-10
                rounded-3xl
                border
                border-white/10
                hover:scale-105
                duration-300
              "
            >
              <div className="mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}