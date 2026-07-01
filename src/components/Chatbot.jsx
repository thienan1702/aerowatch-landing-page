import { useState } from "react";

export default function Chatbot() {

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      role: "bot",
      text: "Hi! Ask me anything about AeroWatch X1."
    }
  ]);

  const handleSend = () => {

    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      text: message
    };

    let response =
      "Sorry, I don't understand.";

    const msg = message.toLowerCase();

    if (msg.includes("battery")) {
      response =
        "AeroWatch X1 can last up to 14 days.";
    }
    else if (msg.includes("price")) {
      response =
        "The estimated price is $299.";
    }
    else if (msg.includes("display")) {
      response =
        "It features a 1.96-inch AMOLED display.";
    }
    else if (msg.includes("bluetooth")) {
      response =
        "Bluetooth version 5.4 is supported.";
    }

    setChat([
      ...chat,
      userMessage,
      {
        role: "bot",
        text: response
      }
    ]);

    setMessage("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-6
          right-6
          w-16
          h-16
          rounded-full
          bg-blue-600
          text-2xl
          z-50
        "
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
            z-50
          "
        >
          <div className="p-4 font-bold border-b border-white/10">
            AeroWatch Assistant
          </div>

          <div className="flex-1 overflow-auto p-4">
            {chat.map((item, index) => (
              <div
                key={index}
                className={`mb-3 ${
                  item.role === "user"
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <span className="bg-black/30 p-2 rounded-lg inline-block">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3 flex gap-2">
            <input
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              className="
                flex-1
                p-2
                rounded-lg
                bg-black
                outline-none
              "
              placeholder="Ask..."
            />

            <button
              onClick={handleSend}
              className="
                bg-blue-600
                px-4
                rounded-lg
              "
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}