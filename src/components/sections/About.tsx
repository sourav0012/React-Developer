"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);
  const skillRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the main heading
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animation for the image
    gsap.fromTo(imageRef.current,
      { opacity: 0, x: -100, rotation: -5 },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animation for text paragraphs
    textRefs.current.forEach((text, i) => {
      if (!text) return;
      gsap.fromTo(text,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animation for skill bars
    skillRefs.current.forEach((skill, i) => {
      if (!skill) return;
      const bar = skill.querySelector('.skill-bar');
      const percent = skill.querySelector('.skill-percent');
      
      gsap.fromTo(bar,
        { width: "0%" },
        {
          width: bar.dataset.percent,
          duration: 1.5,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skill,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          onUpdate: function() {
            if (percent) {
              percent.textContent = `${Math.round(this.progress() * parseInt(bar.dataset.percent))}%`;
            }
          }
        }
      );
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const skills = [
    { name: "Web Development", percent: "90%" },
    { name: "UI/UX Design", percent: "85%" },
    { name: "React/Next.js", percent: "95%" },
    { name: "Backend Development", percent: "80%" }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white opacity-0"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:w-2/5">
            <div ref={imageRef} className="opacity-0">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full overflow-hidden shadow-2xl">
                  {/* Placeholder for image */}
                  <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                    <svg className="w-24 h-24 text-slate-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-400/20 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-400/20 rounded-full -z-10"></div>
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-cyan-400/10 rounded-full -z-10"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/5">
            <p 
              ref={el => textRefs.current[0] = el}
              className="text-lg text-slate-300 mb-6 leading-relaxed opacity-0"
            >
              I'm a passionate full-stack developer with over 5 years of experience creating digital 
              solutions that make a difference. I specialize in modern web technologies and enjoy 
              turning complex problems into simple, beautiful designs.
            </p>
            
            <p 
              ref={el => textRefs.current[1] = el}
              className="text-lg text-slate-300 mb-8 leading-relaxed opacity-0"
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open 
              source projects, or sharing knowledge through technical blogs and workshops. I believe 
              in continuous learning and pushing the boundaries of what's possible on the web.
            </p>

            {/* Skills */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  ref={el => skillRefs.current[index] = el}
                  className="opacity-100"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-200">{skill.name}</span>
                    <span className="text-sm text-cyan-400 skill-percent">0%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="skill-bar h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                      data-percent={skill.percent}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div 
              ref={el => textRefs.current[2] = el}
              className="mt-10 flex flex-wrap gap-4 opacity-0"
            >
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/30">
                Download Resume
              </button>
              <button className="px-6 py-3 border border-slate-500 text-slate-300 rounded-full font-medium hover:bg-slate-800/50 transition-all duration-300">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;