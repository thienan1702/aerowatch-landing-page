import { useEffect, useState } from "react";

export default function RecentlyViewed() {

  const [items, setItems] = useState([]);

  useEffect(() => {

    const viewed =
      JSON.parse(localStorage.getItem("viewed")) || [];

    setItems(viewed);

  }, []);

  if (items.length === 0)
    return null;

  return (

    <section className="py-20 px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Recently Viewed
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {items.map(item => (

            <div
              key={item.id}
              className="bg-white/5 p-5 rounded-xl"
            >

              <img
                src={item.image}
                className="rounded-lg mb-4"
              />

              <h3 className="font-bold">
                {item.name}
              </h3>

              <p>
                ${item.price}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}