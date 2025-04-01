"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop and Mobile Navbar */}
      <nav
        className="w-[90%] ml-5 md:px-10 py-3 md:py-3  bg-white md:rounded-[111px] flex justify-between  items-center relative
                      md:bg-white max-w-full bg-gradient-to-r from-blue-200/4 opacity-90 via-blue-100/5 to-blue-200/60  rounded-[37.33px] backdrop-blur-[130.05px] px-4  md:justify-center md:ml-14 top-2  md:gap-44 md:top-6"
      >
        {/* Hamburger Menu (Mobile) or Logo (Desktop) */}
        <div className="flex items-center">
          <button
            className="md:hidden text-neutral-800 mr-2"
            onClick={toggleMenu}
          >
            <Menu size={24} />
          </button>
          <div className="hidden md:block text-neutral-800 text-3xl font-normal font-['Alata'] leading-normal">
            YuGa
          </div>
        </div>

        {/* Middle Brand Name for Mobile */}
        <div className="md:hidden text-neutral-800 text-xl font-normal font-['Alata'] leading-normal">
          <Image
            src={"/yoga.png"}
            alt="yoga"
            width={400}
            height={100}
            className="w-20 h-6"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex justify-start items-center gap-10 ">
          <div className="text-center justify-center text-neutral-800 text-base font-medium font-['Rethink_Sans'] leading-normal cursor-pointer">
            Features
          </div>
          <div className="text-center justify-center text-neutral-800 text-base font-medium font-['Rethink_Sans'] leading-normal cursor-pointer">
            Solutions
          </div>
          <div className="text-center justify-center text-neutral-800 text-base font-medium font-['Rethink_Sans'] leading-normal cursor-pointer">
            About
          </div>
          <div className="text-center justify-center text-neutral-800 text-base font-medium font-['Rethink_Sans'] leading-normal cursor-pointer">
            Pricing
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="flex justify-start items-center">
          <div className="hidden md:flex gap-6">
            <div className="h-9 px-4 py-2 bg-neutral-800 text-white rounded-full flex justify-center items-center gap-2">
              <button>Talk to sales</button>
            </div>
            <button className="h-9 px-4 py-2 border border-black text-black bg-white rounded-full shadow-[0px_5px_22.7px_0px_rgba(0,0,0,0.15)] flex justify-center items-center gap-2">
              Get Started
            </button>
          </div>

          {/* Mobile Signup Button */}
          <button className="md:hidden h-8 px-3 py-1 bg-neutral-800 text-white rounded-full flex justify-center items-center text-sm">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-white/90 to-white/95 backdrop-blur-md z-50 md:hidden">
          <div className="flex justify-between items-center p-4">
            <div className="text-neutral-800 text-xl font-normal font-['Alata'] leading-normal">
              YuGa
            </div>
            <button className="text-neutral-800" onClick={toggleMenu}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col p-4 gap-6">
            <div className="py-3 text-neutral-800 text-lg font-medium font-['Rethink_Sans']">
              Features
            </div>
            <div className="py-3 text-neutral-800 text-lg font-medium font-['Rethink_Sans']">
              Solutions
            </div>
            <div className="py-3 text-neutral-800 text-lg font-medium font-['Rethink_Sans']">
              About
            </div>
            <div className="py-3 text-neutral-800 text-lg font-medium font-['Rethink_Sans']">
              Pricing
            </div>
            <div className="mt-4">
              <div className="h-10 px-4 py-2 bg-neutral-800 text-white rounded-full flex justify-center items-center gap-2 mb-4">
                Talk to sales
              </div>
              <div className="h-10 px-4 py-2 border border-black text-black bg-white rounded-full shadow-[0px_5px_22.7px_0px_rgba(0,0,0,0.15)] flex justify-center items-center gap-2">
                Get Started
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
