"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/lab", label: "Lab" },
];
const Navbar2 = () => {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">sourav</Link>
        </div>
        <div className="menu-open">
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">sourav</Link>
          </div>
          <div className="menu-close">
            <p>Close</p>
          </div>
        </div>
        <div className="menu-close-icon">
          <p>&#2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder">
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div classname="menu-info-col">
              <a href="#">X &#8599;</a>
            <a href="#">Instagram &#8599;</a>
              <a href="#">LinkedIn &#8599;</a>
               <a href="#">Behance &#8599; </a>
              <a href="#">Dribbble &#8599; </a>
            </div>
          </div>
        </div>
        <div className="menu-preview"></div>
      </div>
    </div>
  );
};

export default Navbar2;
