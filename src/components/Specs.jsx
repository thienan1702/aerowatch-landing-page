import { motion } from "framer-motion";
import {
  Monitor,
  Cpu,
  Battery,
  Bluetooth,
  Shield,
  Weight,
  Smartphone,
  Zap
} from "lucide-react";

export default function Specs() {

  const specs = [
    {
      icon: Monitor,
      title: "Display",
      value: "1.96-inch AMOLED"
    },
    {
      icon: Smartphone,
      title: "Resolution",
      value: "466 × 466"
    },
    {
      icon: Cpu,
      title: "Processor",
      value: "Snapdragon Wear"
    },
    {
      icon: Battery,
      title: "Battery",
      value: "500mAh"
    },
    {
      icon: Zap,
      title: "Battery Life",
      value: "Up to 14 days"
    },
    {
      icon: Bluetooth,
      title: "Connectivity",
      value: "Bluetooth 5.4"
    },
    {
      icon: Shield,
      title: "Water Resistance",
      value: "IP68"
    },
    {
      icon: Weight,
      title: "Weight",
      value: "39g"
    }
  ];

  return (
    <section
      id="specs"
      className="py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-5xl
            font-bold
            text-center
            mb-20"
        >
          Technical Specifications
        </motion.h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8"
        >

          {specs.map((spec, index) => {

            const Icon = spec.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03
                }}
                className="
                  bg-slate-900/70
                  backdrop-blur-lg
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  transition-all
                  duration-300"
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-600/20
                    flex
                    items-center
                    justify-center
                    mb-6"
                >
                  <Icon
                    size={28}
                    className="text-blue-400"
                  />
                </div>

                <p
                  className="
                    text-gray-400
                    mb-2"
                >
                  {spec.title}
                </p>

                <h3
                  className="
                    text-xl
                    font-bold"
                >
                  {spec.value}
                </h3>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}