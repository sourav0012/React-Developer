"use client";
import React, { useEffect, useRef } from "react";
import { Orbitron } from "next/font/google";
import { gsap } from "gsap";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

const Hero = () => {
  const cornerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const lineRefs = useRef<Array<HTMLDivElement | null>>([]);
  const developerRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null); // New ref for the image

  const cornerItems = ["Eat.", "Sleep.", "Code.", "Repeat."];

  useEffect(() => {
    // Create a master timeline for coordinated animations
    const tl = gsap.timeline();

    // First animate the image in the center
    tl.fromTo(imageRef.current, 
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
        rotation: -5
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)"
      }
    );

    // Then animate the image moving up slightly
    tl.to(imageRef.current, {
      y: -20,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.out"
    }, "+=0.3");

    // Animate DEVELOPER text with staggered animation
    tl.to(developerRefs.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.08,
      ease: "back.out(1.7)"
    }, "-=0.4");

    // Animate lines with a cool draw effect
    tl.to(lineRefs.current, {
      scaleX: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.4");

    // Animate corner text with a bounce effect
    tl.to(cornerRefs.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.15,
      ease: "elastic.out(1, 0.75)"
    }, "-=0.6");

    // Add continuous subtle animations
    developerRefs.current.forEach((letter, i) => {
      if (letter) {
        // Add hover animation
        letter.addEventListener('mouseenter', () => {
          gsap.to(letter, {
            y: -10,
            color: i % 2 === 0 ? '#FFD700' : '#00FFFF',
            duration: 0.3
          });
        });
        
        letter.addEventListener('mouseleave', () => {
          gsap.to(letter, {
            y: 0,
            color: i % 2 === 0 ? 'white' : 'transparent',
            duration: 0.5
          });
        });
      }
    });

    // Add a subtle pulse animation to the background
    gsap.to(containerRef.current, {
      backgroundPosition: '100% 50%',
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Add continuous floating animation to the image
    gsap.to(imageRef.current, {
      y: "+=10",
      rotation: "+=1",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Clean up
    return () => {
      // Kill all animations on unmount
      tl.kill();
    };
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
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white cursor-default"
      style={{
        background: "linear-gradient(45deg, #1CB5E0 0%, #000046 100%)",
        backgroundSize: "200% 200%"
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-900 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern"></div>

      {/* Background removed image */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <Image
          ref={imageRef}
          src="/image2.png" // Update with your image path
          alt="Profile"
          width={500}
          height={500}
          className="w-80 h-80 md:w-64 md:h-64 object-contain opacity-0"
          style={{
            filter: "drop-shadow(0 0 15px rgba(0, 255, 255, 0.5))"
          }}
        />
      </div>

      {/* Responsive DEVELOPER text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="flex flex-wrap justify-center gap-1 md:gap-2 px-4">
          {"DEVELOPER".split("").map((char, index) => {
            const isEven = index % 2 === 0;
            return (
              <span
                key={index}
                ref={(el) => (developerRefs.current[index] = el)}
                className={`${orbitron.className} ${
                  isEven ? "text-white" : "text-transparent"
                } text-[8vw] md:text-[9.5vw] leading-none tracking-[0.3vw] transition-all duration-300 cursor-pointer`}
                style={
                  isEven
                    ? { 
                        opacity: 0, 
                        transform: "scale(0.8)",
                        WebkitTextStroke: "none",
                        textShadow: "0 0 10px rgba(255,255,255,0.5)"
                      }
                    : { 
                        opacity: 0,
                        transform: "scale(0.8)",
                        WebkitTextStroke: "1px white",
                        textShadow: "0 0 15px rgba(0,255,255,0.7)"
                      }
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
            } gap-2 z-10`}
          >
            {/* Animated line */}
            <div
              ref={(el) => (lineRefs.current[index] = el)}
              className={`h-[2px] md:h-[3px] w-16 md:w-24 bg-white/80 transition-transform duration-500 ease-out ${
                lineDirection === 'left' ? 'origin-left' : 'origin-right'
              }`}
              style={{ transform: 'scaleX(0)' }}
            />

            {/* Text with number */}
            <div 
              ref={(el) => (cornerRefs.current[index] = el)}
              className={`${orbitron.className} flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } items-end gap-2 transition-all duration-700 ease-out opacity-0 translate-y-5 scale-95`}
            >
              <span className="text-sm md:text-xl opacity-70 mb-1 md:mb-2">
                0{index + 1}
              </span>
              <span className="text-xl md:text-5xl lg:text-6xl font-bold hover:text-cyan-300 transition-colors duration-300">
                {word}
              </span>
            </div>
          </div>
        );
      })}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Hero;