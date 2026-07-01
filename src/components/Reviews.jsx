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

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="
                bg-slate-900
                p-8
                rounded-3xl
                border
                border-white/10
                hover:-translate-y-2
                duration-300
              "
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
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}