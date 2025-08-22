import React from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white"
      style={{
        background: "linear-gradient(to right, #1CB5E0, #000046)",
      }}
    >
      {/* Responsive DEVELOPER text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-wrap justify-center gap-2 px-4">
          {"DEVELOPER".split("").map((char, index) => {
            const isEven = index % 2 === 0;
            return (
              <span
                key={index}
                className={`${orbitron.className} ${
                  isEven ? "text-white opacity-25" : "text-transparent"
                } text-[9.5vw] leading-none tracking-[0.3vw]`}
                style={
                  isEven
                    ? {}
                    : { WebkitTextStroke: "1px white", opacity: 0.4 }
                }
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
