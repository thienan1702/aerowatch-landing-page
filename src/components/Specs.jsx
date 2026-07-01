export default function Specs() {

  const specs = [
    ["Display", "1.96-inch AMOLED"],
    ["Resolution", "466 × 466"],
    ["Processor", "Snapdragon Wear"],
    ["Battery", "500mAh"],
    ["Battery Life", "Up to 14 days"],
    ["Connectivity", "Bluetooth 5.4"],
    ["Water Resistance", "IP68"],
    ["Weight", "39g"]
  ];

  return (
    <section
      id="specs"
      className="py-32 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Specifications
        </h2>

        <div className="
          bg-slate-900
          rounded-3xl
          overflow-hidden
          border
          border-white/10
        ">

          {specs.map((item, index) => (
            <div
              key={index}
              className="
                flex
                justify-between
                p-6
                border-b
                border-white/10
              "
            >
              <span className="font-semibold">
                {item[0]}
              </span>

              <span className="text-gray-400">
                {item[1]}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}