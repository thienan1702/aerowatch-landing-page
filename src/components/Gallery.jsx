export default function Gallery() {

  const images = [
    "/images/watch1.jpg",
    "/images/watch2.jpg",
    "/images/watch3.jpg",
    "/images/watch4.jpg"
  ];

  return (
    <section className="py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Gallery
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl group"
            >
              <img
                src={img}
                alt="watch"
                className="
                  w-full
                  h-[450px]
                  object-cover
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}