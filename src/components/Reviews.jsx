import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Reviews() {

  const reviews = [
    {
      name: "Michael Chen",
      review: "Amazing battery life and beautiful display."
    },
    {
      name: "Sarah Johnson",
      review: "The AI health tracking features are impressive."
    },
    {
      name: "David Wilson",
      review: "Best smartwatch experience I've ever had."
    }
  ];

  return (
    <section
      id="reviews"
      className="py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2
              }}
            >
              <div className="flex gap-1 mb-5">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>

              <p className="text-gray-300 mb-6">
                "{item.review}"
              </p>

              <h3 className="font-bold">
                {item.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}