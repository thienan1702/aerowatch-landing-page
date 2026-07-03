import { useState } from "react";
import { products } from "../data/products";

let ai = null;
let fuse = null;

async function getAI() {

  if (!ai) {

    const {
      GoogleGenAI
    } = await import(
      "@google/genai"
    );

    ai = new GoogleGenAI({
      apiKey:
        import.meta.env
          .VITE_GEMINI_API_KEY
    });
  }

  return ai;
}

async function getFuse() {

  if (!fuse) {

    const Fuse =
      (await import(
        "fuse.js"
      )).default;

    fuse = new Fuse(
      products,
      {
        keys: [
          "name",
          "description"
        ],
        threshold: 0.4
      }
    );
  }

  return fuse;
}

export default function Chatbot() {

  const [open, setOpen] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [chat, setChat] =
    useState([
      {
        role: "bot",
        text:
          "Hi! I'm AeroWatch AI Assistant."
      }
    ]);

  const handleSend =
    async () => {

      if (!message.trim())
        return;

      const question =
        message;

      setChat(prev => [
        ...prev,
        {
          role: "user",
          text: question
        }
      ]);

      setMessage("");

      try {

        const searcher =
          await getFuse();

        const search =
          searcher.search(
            question
          );

        if (
          search.length > 0
        ) {

          const p =
            search[0].item;

          setChat(prev => [
            ...prev,
            {
              role: "bot",
              text:
`Product: ${p.name}

Price: $${p.price}
Battery: ${p.battery}
Display: ${p.display}
Bluetooth: ${p.bluetooth}
GPS: ${
  p.gps
    ? "Yes"
    : "No"
}

${p.description}`
            }
          ]);

          return;
        }

        setLoading(true);

        const catalog =
          products
            .map(
              p => `
Name: ${p.name}
Price: $${p.price}
Battery: ${p.battery}
Display: ${p.display}
Bluetooth: ${p.bluetooth}
GPS: ${p.gps}
Description: ${p.description}
`
            )
            .join("\n");

        const prompt =
`
You are AeroWatch AI Assistant.

Available products:

${catalog}

Answer professionally.

Question:
${question}
`;

        const gemini =
          await getAI();

        const response =
          await gemini.models.generateContent({
            model:
              "gemini-2.5-flash",
            contents:
              prompt
          });

        setChat(prev => [
          ...prev,
          {
            role: "bot",
            text:
              response.text
          }
        ]);

      }
      catch {

        setChat(prev => [
          ...prev,
          {
            role: "bot",
            text:
              "Sorry, AI service is unavailable."
          }
        ]);

      }
      finally {

        setLoading(
          false
        );

      }
    };

  return (
    <>
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          fixed
          bottom-6
          right-6
          w-16
          h-16
          rounded-full
          bg-blue-600
          text-2xl
          z-50"
      >
        🤖
      </button>

      {open && (

        <div
          className="
            fixed
            bottom-24
            right-6
            w-80
            h-96
            bg-slate-900
            border
            border-white/10
            rounded-2xl
            flex
            flex-col
            z-50"
        >

          <div
            className="
            p-4
            font-bold
            border-b
            border-white/10"
          >
            AeroWatch AI
          </div>

          <div
            className="
            flex-1
            overflow-auto
            p-4"
          >

            {chat.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className={`mb-3 ${
                    item.role ===
                    "user"
                      ? "text-right"
                      : "text-left"
                  }`}
                >

                  <span
                    className="
                    bg-black/30
                    p-2
                    rounded-lg
                    inline-block"
                  >
                    {item.text}
                  </span>

                </div>
              )
            )}

            {loading && (

              <div className="text-gray-400">
                AeroWatch AI
                is typing...
              </div>

            )}

          </div>

          <div
            className="
            p-3
            flex
            gap-2"
          >

            <input
              value={message}
              onChange={e =>
                setMessage(
                  e.target.value
                )
              }
              onKeyDown={e =>
                e.key ===
                  "Enter" &&
                handleSend()
              }
              className="
                flex-1
                p-2
                rounded-lg
                bg-black
                outline-none"
              placeholder="Ask anything..."
            />

            <button
              onClick={
                handleSend
              }
              className="
                bg-blue-600
                px-4
                rounded-lg"
            >
              Send
            </button>

          </div>

        </div>
      )}
    </>
  );
}