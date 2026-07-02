import { useState } from "react";
import toast from "react-hot-toast";

export default function Newsletter() {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {

  e.preventDefault();

  // validation
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {

    toast.error(
      "Please enter a valid email!"
    );

    return;
  }

  try {

    const response = await fetch(
      "https://webhook.site/0da2d937-e09d-4953-b2be-19a60e1773fe",
      {
        method: "POST",
        mode: "no-cors",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

          email,

          action:
            "newsletter_subscription",

          timestamp:
            new Date()
              .toISOString(),

          currentPage:
            window.location.href,

          userAgent:
            navigator.userAgent,

          screen:
            `${window.innerWidth}x${window.innerHeight}`,

          theme:
            localStorage.getItem(
              "theme"
            ),

          lastViewed:
            JSON.parse(
              localStorage.getItem(
                "recentlyViewed"
              ) || "[]"
            )

        })
      }
    );

     {

        toast.success(
        "Successfully subscribed!"
      );

      setEmail("");

      console.log(
        "Webhook sent"
      );
    }
    

  }
  catch (error) {

    console.error(error);

    toast.error(
      "Failed to submit."
    );

  }
};

  return (
    <section
      id="contact"
      className="py-32 px-8"
    >

      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-8">
          Stay Updated
        </h2>

        <p className="text-gray-400 mb-10">
          Subscribe to receive the latest news and updates.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              flex-1
              p-4
              rounded-xl
              bg-slate-900
              border
              border-white/10
              outline-none
            "
          />

          <button
            type="submit"
            className="
              bg-blue-600
              px-8
              py-4
              rounded-xl
              hover:bg-blue-700
              duration-300
            "
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
}