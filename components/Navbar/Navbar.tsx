"use client";

import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { RiMenuLine, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // To change the navbar bg color
      setScrolled(currentScrollPos > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section
      className={`navbar ${visible ? "" : ""} ${scrolled ? "scrolled" : "transparent"}`}
    >
      {/* PC */}
      <nav className="hidden md:flex items-center gap-10 justify-evenly p-4 w-full">
        <div className="navLink">
          <Link href="#">Who we are</Link>
        </div>
        <div className="navLink">
          <Link href="#">Experience</Link>
        </div>
        <div className="mr-12">
          <Link href="/">
            <Image
              src={scrolled ? "/svg/greenlogo.svg" : "/svg/greenlogo.svg"}
              alt="Brand Logo"
              width={0}
              height={0}
              className="w-[55px] h-[55px]"
              priority
            />
          </Link>
        </div>
        <div className="navLink">
          <Link href="#">Brands</Link>
        </div>
        <div className="navLink">
          <Link href="#">Academy</Link>
        </div>
      </nav>
      {/* MOBILE */}
      <nav className="flex md:hidden p-4 items-center justify-between">
        <div>
          <Link href="/">
            <Image
              src={scrolled ? "/svg/greenlogo.svg" : "/svg/greenlogo.svg"}
              alt="Brand Logo"
              width={0}
              height={0}
              className="w-[55px] h-[55px]"
              priority
            />
          </Link>
        </div>
        {sidebarOpen ? (
          <RiCloseFill
            size={32}
            className="block md:hidden cursor-pointer text-[#4A6B7B] z-[999]"
            onClick={toggleSidebar}
          />
        ) : (
          <RiMenuLine
            size={32}
            className="block md:hidden cursor-pointer"
            onClick={toggleSidebar}
          />
        )}
      </nav>
      {/* SIDEBAR */}
      {sidebarOpen && (
        <div className="mSidebar md:hidden flex flex-col items-center justify-center gap-4 p-6">
          <ul>
            <li>
              <Link href="#">Who we are</Link>
            </li>
            <li>
              <Link href="#">Experience</Link>
            </li>
            <li>
              <Link href="#">Brands</Link>
            </li>
            <li>
              <Link href="#">Academy</Link>
            </li>
            {/* <li><Link href='#'>CAREERS</Link></li> */}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
