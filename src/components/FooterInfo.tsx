export default function FooterInfo() {
  return (
    <div className="text-white px-6 py-10 text-sm space-y-6 lg:flex lg:text-xs gap-8">
      {/* Top links */}
      <div className="flex flex-wrap justify-start gap-8">
        {["Terms", "Privacy", "Kids under 6 are not advised."].map(
          (text, idx) => (
            <span
              key={idx}
              className={`${
                text !== "Kids under 6 are not advised."
                  ? "border-b border-transparent hover:border-white transition-[border-color] duration-300 ease-linear cursor-pointer"
                  : ""
              }`}
            >
              {text}
            </span>
          )
        )}
      </div>

      {/* Copyright */}
      <div>
        © 2024–2025 Two Moons Studio for ulamanbali.com. All Rights Reserved
      </div>

      {/* Credit */}
      <div>
        <span className="border-b border-transparent hover:border-white transition duration-300 cursor-pointer">
          Made With ❤︎ By Two Moons Studio
        </span>
      </div>
    </div>
  );
}
