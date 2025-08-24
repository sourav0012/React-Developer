"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);
  const skillRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Main section animation
    gsap.fromTo(sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Heading animation with split text effect
    const headingText = headingRef.current;
    const headingChars = headingText.querySelectorAll('.char');
    
    gsap.fromTo(headingChars,
      { opacity: 0, y: 20, rotationX: 90 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Image animation with floating effect
    gsap.fromTo(imageRef.current,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Continuous floating animation
    gsap.to(imageRef.current, {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Text animation with staggered effect
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
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Skill bars animation
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

    // Feature cards animation
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const skills = [
    { name: "Web Development", percent: "90%" },
    { name: "UI/UX Design", percent: "85%" },
    { name: "React/Next.js", percent: "85%" },
    { name: "Backend Development", percent: "80%" }
  ];

  const features = [
    { title: "Clean Code", icon: "💻", desc: "Writing maintainable and efficient code" },
    { title: "Responsive Design", icon: "📱", desc: "Creating experiences for all devices" },
    { title: "Performance", icon: "⚡", desc: "Optimized and fast loading applications" },
    { title: "Innovation", icon: "✨", desc: "Staying ahead with latest technologies" }
  ];

  // Helper function to split text into spans
  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block">{char}</span>
    ));
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-slate-950 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-10% left-5% w-64 h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10% right-5% w-80 h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow delay-1000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <h2 
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold text-center mb-12 text-white"
        >
          {splitText("About ")}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            {splitText("Me")}
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          {/* Image - Centered on mobile, on side for desktop */}
          <div className="w-full lg:w-2/5 flex justify-center mb-8 lg:mb-2">
            <div ref={imageRef} className="relative opacity-0">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-1.5 backdrop-blur-sm">
                <div className="relative w-full h-full bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-700/50 flex items-center justify-center">
                  {/* Placeholder for image with gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10"></div>
                  {/* <svg className="w-36 h-36 text-slate-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg> */}
                  <Image
                  src = "/image1.jpg"
                  alt="About Me"
                  fill
                  className="object-cover"
                  />
                  
                  {/* Status indicator */}
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-500/30">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-cyan-400">Available for work</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements - Adjusted positioning for larger image */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-400/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-purple-400/10 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Content - Full width on mobile, 3/5 for desktop */}
          <div className="w-full lg:w-3/5">
            <p 
              ref={el => textRefs.current[0] = el}
              className="text-lg md:text-xl text-slate-300 mb-5 leading-relaxed opacity-0"
            >
              I'm a passionate <span className="text-cyan-400 font-medium">full-stack developer</span> with over 5 years of experience creating digital 
              solutions that make a difference. I specialize in modern web technologies and enjoy 
              turning complex problems into simple, beautiful designs.
            </p>
            
            <p 
              ref={el => textRefs.current[1] = el}
              className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed opacity-0"
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open 
              source projects, or sharing knowledge through technical blogs and workshops. I believe 
              in continuous learning and pushing the boundaries of what's possible on the web.
            </p>

            {/* Feature cards - Made more compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={el => cardRefs.current[index] = el}
                  className="bg-slate-900/50 backdrop-blur-sm p-3 rounded-xl border border-slate-700/30 hover:border-cyan-500/30 transition-colors duration-300 opacity-0"
                >
                  <div className="text-xl mb-1">{feature.icon}</div>
                  <h3 className="font-semibold text-slate-200 text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-slate-400">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <h3 className="text-xl font-bold text-slate-200 mb-4">Skills & Expertise</h3>
            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  ref={el => skillRefs.current[index] = el}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-slate-200 text-sm">{skill.name}</span>
                    <span className="text-xs text-cyan-400 skill-percent">0%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="skill-bar h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                      data-percent={skill.percent}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action - Made more compact */}
            <div 
              ref={el => textRefs.current[2] = el}
              className="flex flex-wrap gap-3 justify-center sm:justify-start opacity-0"
            >
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;