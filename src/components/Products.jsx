import { products } from "../data/products";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import toast from "react-hot-toast";

export default function Products() {

  const addWishlist = (product) => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlist.find(x => x.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
      );
      toast.success("Added to wishlist");
    }
  };

  const addCart = (product) => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    toast.success("Added to cart");
  };

  const addViewed = (product) => {
    let viewed =
      JSON.parse(localStorage.getItem("viewed")) || [];

    viewed = viewed.filter(x => x.id !== product.id);

    viewed.unshift(product);

    viewed = viewed.slice(0,5);

    localStorage.setItem(
      "viewed",
      JSON.stringify(viewed)
    );

    toast("Added to recently viewed");
  };

  return (
    <section
      id="products"
      className="py-20 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map(product => (

            <div
              key={product.id}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >

              <img
                src={product.image}
                className="rounded-xl mb-4"
              />

              <h3 className="text-xl font-bold">
                {product.name}
              </h3>

              <p className="text-gray-400 mb-3">
                {product.description}
              </p>

              <p className="text-2xl font-bold mb-4">
                ${product.price}
              </p>

              <div className="flex gap-3">

                <button
                  onClick={() => addWishlist(product)}
                  className="p-2 bg-pink-500 rounded"
                >
                  <Heart size={18}/>
                </button>

                <button
                  onClick={() => addCart(product)}
                  className="p-2 bg-blue-500 rounded"
                >
                  <ShoppingCart size={18}/>
                </button>

                <button
                  onClick={() => addViewed(product)}
                  className="p-2 bg-green-500 rounded"
                >
                  <Eye size={18}/>
                </button>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}