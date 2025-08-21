// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { Menu, X, Download, Github, Linkedin } from 'lucide-react'
// import clsx from 'clsx'

// const NAV_LINKS = [
//   { name: 'Home', href: '#home' },
//   { name: 'About', href: '#about' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Skills', href: '#skills' },
//   { name: 'Contact', href: '#contact' },
// ]

// const SOCIAL_LINKS = [
//   { href: 'https://github.com/sourav0012', icon: Github, label: 'GitHub' },
//   { href: 'https://www.linkedin.com/in/sourav-mondal-5b4283214/', icon: Linkedin, label: 'LinkedIn' },
// ]

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isNavVisible, setIsNavVisible] = useState(true)
//   const [lastScrollY, setLastScrollY] = useState(0)
//   const [isScrolled, setIsScrolled] = useState(false)

//   const mobileMenuRef = useRef<HTMLDivElement | null>(null)

//   // Handle scroll behavior
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY

//       if (currentScrollY === 0) {
//         setIsNavVisible(true)
//         setIsScrolled(false)
//       } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setIsNavVisible(false)
//         setIsScrolled(true)
//       } else if (currentScrollY < lastScrollY) {
//         setIsNavVisible(true)
//         setIsScrolled(true)
//       }

//       setLastScrollY(currentScrollY)
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [lastScrollY])

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target as Node)
//       ) {
//         setIsMobileMenuOpen(false)
//       }
//     }

//     if (isMobileMenuOpen) {
//       document.addEventListener('mousedown', handleClickOutside)
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [isMobileMenuOpen])

//   return (
//     <>
//       <div
//         className={clsx(
//           'fixed inset-x-4 sm:inset-x-6 top-4 z-50 transition-all duration-500',
//           isNavVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
//         )}
//       >
//         <nav
//           role="navigation"
//           className={clsx(
//             'w-full rounded-2xl transition-all duration-300',
//             isScrolled
//               ? 'bg-white/90 backdrop-blur-md shadow-lg border border-white/20'
//               : 'bg-transparent'
//           )}
//         >
//           <div className="flex items-center justify-between p-4">
//             {/* Logo + Resume */}
//             <div className="flex items-center gap-3 sm:gap-6">
//               <a
//                 href="#home"
//                 className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
//               >
//                 Portfolio
//               </a>
//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hidden xs:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
//               >
//                 <Download size={16} />
//                 <span className="hidden sm:inline">Resume</span>
//                 <span className="sm:hidden">CV</span>
//               </a>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-8">
//               <div className="flex items-center gap-1">
//                 {NAV_LINKS.map((link) => (
//                   <a
//                     key={link.name}
//                     href={link.href}
//                     className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
//                   >
//                     {link.name}
//                     <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
//                   </a>
//                 ))}
//               </div>

//               {/* Social Links */}
//               <div className="flex items-center gap-3">
//                 {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
//                   <a
//                     key={label}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={label}
//                     className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
//                   >
//                     <Icon size={18} />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="lg:hidden flex items-center gap-2">
//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="xs:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
//               >
//                 CV<Download size={20} />
//               </a>
//               <button
//                 onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//                 aria-label="Toggle mobile menu"
//                 aria-expanded={isMobileMenuOpen}
//                 aria-controls="mobile-menu"
//                 className="p-2 text-gray-900 hover:text-blue-600 transition-colors"
//               >
//                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-40 lg:hidden">
//           {/* Backdrop */}
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />
//           {/* Menu Content */}
//           <div
//             id="mobile-menu"
//             ref={mobileMenuRef}
//             className="fixed top-24 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300"
//           >
//             <div className="p-6">
//               <div className="flex flex-col space-y-4">
//                 {NAV_LINKS.map((link, index) => (
//                   <a
//                     key={link.name}
//                     href={link.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="block py-3 px-4 text-gray-900 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
//                     style={{ animationDelay: `${index * 0.05}s` }}
//                   >
//                     {link.name}
//                   </a>
//                 ))}

//                 {/* Mobile Social Links */}
//                 <div className="flex justify-center gap-6 pt-4 border-t border-gray-200">
//                   {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
//                     <a
//                       key={label}
//                       href={href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={label}
//                       className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
//                     >
//                       <Icon size={20} />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Navbar

"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, Download, Github, Linkedin } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/yourgithub", icon: Github, label: "GitHub" },
  {
    href: "https://linkedin.com/in/yourlinkedin",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed inset-x-4 sm:inset-x-6 top-4 z-50 flex justify-between items-center gap-4">
        {/* Left: Logo + Resume */}
        <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border bg-white/10 backdrop-blur-xl border-white/20 shadow-lg">
          <a href="#home" className="text-lg font-bold text-white">
            SM
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-sm transition-colors"
          >
            <Download size={14} />
            <span>cv</span>
          </a>
        </div>

        {/* Middle: Nav Links (desktop only) */}
        <div className="hidden lg:flex items-center gap-4 px-6 py-3 rounded-2xl border bg-white/10 backdrop-blur-xl border-white/20 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`relative text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                activeLink === link.name
                  ? "bg-black text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Social Icons (desktop only) */}
        <div className="hidden lg:flex items-center gap-3 px-5 py-3 rounded-2xl border bg-white/10 backdrop-blur-xl border-white/20 shadow-lg">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 text-white hover:text-gray-300 transition-colors rounded-lg hover:bg-white/10"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="p-2 text-white hover:text-gray-300 transition-colors rounded-xl bg-white/10"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className="fixed top-24 left-4 right-4 bg-black text-white rounded-2xl shadow-xl border border-white/10 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300"
          >
            <div className="p-6">
              <div className="flex flex-col space-y-4">
                {NAV_LINKS.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full py-3 px-4 rounded-lg transition-all font-medium ${
                      activeLink === link.name
                        ? "bg-white/20 text-white"
                        : "hover:bg-white/5 hover:text-gray-300"
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {link.name}
                  </a>
                ))}

                <div className="flex justify-center gap-6 pt-4 border-t border-white/10">
                  {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 text-white hover:text-gray-300 hover:bg-white/5 rounded-lg transition-all"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
