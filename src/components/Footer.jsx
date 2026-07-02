import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-4">
          AeroWatch X1
        </h2>

        <p className="text-gray-400 mb-8">
          The Future On Your Wrist
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <FaGithub
            size={24}
            className="cursor-pointer hover:scale-110 duration-300"
          />

          <FaLinkedin
            size={24}
            className="cursor-pointer hover:scale-110 duration-300"
          />

          <Mail
            size={24}
            className="cursor-pointer hover:scale-110 duration-300"
          />
        </div>

        <p className="text-gray-500">
          © 2026 AeroWatch. All rights reserved.
        </p>

      </div>
    </footer>
  );
}