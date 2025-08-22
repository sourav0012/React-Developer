"use client";
import React, { useEffect, useRef } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

const Hero = () => {
  const cornerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const lineRefs = useRef<Array<HTMLDivElement | null>>([]);

  const cornerItems = ["Eat.", "Sleep.", "Code.", "Repeat."];

  useEffect(() => {
    // Animate lines first
    lineRefs.current.forEach((line, i) => {
      if (line) {
        setTimeout(() => {
          line.style.transform = "scaleX(1)";
        }, i * 200);
      }
    });

    // Then animate text
    cornerRefs.current.forEach((corner, i) => {
      if (corner) {
        setTimeout(() => {
          corner.style.opacity = "1";
          corner.style.transform = "translateY(0) scale(1)";
        }, i * 200 + 300);
      }
    });
  }, []);

  const getCornerPosition = (index: number) => {
    const positions = [
      "top-[25%] left-[10%]", // Top-left
      "top-[25%] right-[10%]", // Top-right
      "bottom-[25%] left-[10%]", // Bottom-left
      "bottom-[25%] right-[10%]", // Bottom-right
    ];
    return positions[index];
  };

  const getLineDirection = (index: number) => {
    const directions = ["left", "right", "left", "right"];
    return directions[index];
  };

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
                  isEven ? "text-white opacity-50" : "text-transparent"
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

      {/* Corner Elements */}
      {cornerItems.map((word, index) => {
        const lineDirection = getLineDirection(index);
        
        return (
          <div
            key={index}
            className={`absolute ${getCornerPosition(index)} flex ${
              index % 2 === 0 ? 'flex-col items-start' : 'flex-col items-end'
            } gap-2`}
          >
            {/* Animated line */}
            <div
              ref={(el) => (lineRefs.current[index] = el)}
              className={`h-[3px] w-24 bg-white transition-transform duration-500 ease-out ${
                lineDirection === 'left' ? 'origin-left' : 'origin-right'
              }`}
              style={{ transform: 'scaleX(0)' }}
            />

            {/* Text with number */}
            <div 
              ref={(el) => (cornerRefs.current[index] = el)}
              className={`${orbitron.className} flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } items-end gap-2 transition-all duration-700 ease-out`}
              style={{ 
                opacity: 0, 
                transform: 'translateY(20px) scale(0.95)' 
              }}
            >
              <span className="text-xl opacity-70 mb-2">
                0{index + 1}
              </span>
              <span className="text-2xl md:text-5xl lg:text-6xl font-bold">
                {word}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Hero;