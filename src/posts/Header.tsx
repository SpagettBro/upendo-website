"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import arrow from "../images/arrow.png";
import logo from "../images/logo.png";
import configuration from "../images/configuration-icon.png";
import visualisation from "../images/visualisation-icon.png";
import optimization from "../images/optimization-icon.png";
import analysis from "../images/analysis-icon.png";
import training from "../images/training-icon.png";
import configurationHover from "../images/configuration-icon-hover.png";
import visualisationHover from "../images/visualisation-icon-hover.png";
import optimizationHover from "../images/optimization-icon-hover.png";
import analysisHover from "../images/analysis-icon-hover.png";
import trainingHover from "../images/training-icon-hover.png";
import hamburgerIcon from "../images/hamburger-icon.png"; // Voeg hier je hamburgermenu-icoon toe

const Header: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownAnimation, setDropdownAnimation] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false); // Voor mobiel menu

  const toggleDropdown = () => {
    if (isDropdownVisible) {
      setDropdownAnimation(true); // Start slide-out animatie
      setTimeout(() => {
        setDropdownVisible(false); // Verberg dropdown na animatie
        setDropdownAnimation(false); // Reset animatiestatus
      }, 300); // Animatie duur moet overeenkomen met CSS
    } else {
      setDropdownVisible(true);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible((prev) => !prev); // Toggle mobiel menu
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY) {
        setHeaderVisible(false); // Scrolling down
      } else {
        setHeaderVisible(true); // Scrolling up
      }

      setLastScrollY(scrollY); // Update last scroll position
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white flex z-1 justify-between items-center py-5 px-[20px] md:px-[120px] transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* UPENDO LOGO */}
      <div className="flex items-center">
        <a href="/">
          <Image src={logo} alt="Upendo Logo" className="h-8 w-auto" />
        </a>
      </div>

      {/* Hamburger Menu (Mobiel) */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          <Image
            src={hamburgerIcon}
            alt="Hamburger Menu"
            width={30}
            height={30}
          />
        </button>
      </div>

      {isMobileMenuVisible && (
        <div
          className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-8"
          style={{ backgroundColor: "white", minHeight: "100vh" }}
        >
          <div className="absolute top-5 left-5">
            <a href="/">
              <Image src={logo} alt="Upendo Logo" className="h-8 w-auto" />
            </a>
          </div>

          <button className="absolute top-5 right-5" onClick={toggleMobileMenu}>
            <Image
              src={hamburgerIcon}
              alt="Close Menu"
              width={30}
              height={30}
            />
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col items-center justify-center space-y-6">
            <a
              href="/configuration"
              className="text-xl text-darkgreen hover:text-green"
            >
              Configuration
            </a>
            <a
              href="/visualization"
              className="text-xl text-darkgreen hover:text-green"
            >
              Visualization
            </a>
            <a
              href="/optimization"
              className="text-xl text-darkgreen hover:text-green"
            >
              Optimization
            </a>
            <a
              href="/analysis"
              className="text-xl text-darkgreen hover:text-green"
            >
              Analysis
            </a>
            <a
              href="/training"
              className="text-xl text-darkgreen hover:text-green"
            >
              Training
            </a>
            <a
              href="/pricing"
              className="text-xl text-darkgreen hover:text-green"
            >
              Pricing
            </a>
            <a
              href="/company"
              className="text-xl text-darkgreen hover:text-green"
            >
              Company
            </a>

            {/* Contact Button in Mobile Menu */}
            <a href="/contact" className="w-full">
              <button className="font-button bg-green text-darkgreen px-10 py-3 w-full rounded-full">
                Contact
              </button>
            </a>
          </nav>
        </div>
      )}

      {/* SERVICES PRICING COMPANY (Desktop) */}
      <nav className="hidden md:flex flex-1 justify-center space-x-24 items-center">
        {/* SERVICES */}
        <div className="relative left-0">
          <button
            className={`flex items-center space-x-1 text-lg font-medium text-gray-700 hover:text-gray-900 focus:outline-none ${
              isDropdownVisible ? "opacity-50" : "opacity-100"
            }`}
            onClick={toggleDropdown}
          >
            <span className="mx-2">Services</span>
            <span className="transform">
              <Image
                src={arrow}
                alt="Arrow Icon"
                className={`transition-transform duration-500 ease-in-out ${
                  isDropdownVisible ? "rotate-0" : "rotate-180"
                }`}
                width={14}
                height={14}
              />
            </span>
          </button>
        </div>

        {/* PRICING */}
        <a
          href="/pricing"
          className="text-lg font-medium text-gray-700 hover:text-gray-900"
        >
          Pricing
        </a>

        {/* COMPANY */}
        <a
          href="/company"
          className="text-lg font-medium text-gray-700 hover:text-gray-900"
        >
          Company
        </a>
      </nav>

      {/* CONTACT (Desktop) */}
      <div className="hidden md:flex items-center">
        <button className="font-button bg-green text-darkgreen px-6 h-[40px] rounded-full">
          <a href="/contact">Contact</a>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div
          className={`absolute top-full border-t border-1 left-0 w-full z-10 bg-white transition-transform duration-300 ease-in-out ${
            dropdownAnimation ? "animate-slideOut" : "animate-slideIn"
          }`}
          style={{
            transform: "translateY(-100%)", // Start het menu boven de nav
          }}
        >
          <div className="flex flex-grow px-[20px] md:px-[120px] justify-between py-4 bg-white">
            {/* CONFIGURATION */}
            <a
              href="/configuration"
              className="grid items-center px-4 mx-2 py-2 bg-darkgreen hover:bg-lime transition-all duration-500 ease-in-out group rounded-lg"
            >
              <div className="grid grid-cols-[15%_85%] items-center space-x-2 pt-2">
                <span className="text-center">
                  <Image
                    src={configuration}
                    alt="Configuration Icon"
                    width={30}
                    height={30}
                    className="transition-all duration-500 ease-in-out group-hover:hidden"
                  />
                  <Image
                    src={configurationHover}
                    alt="Configuration Icon Hover"
                    width={30}
                    height={30}
                    className="transition-all duration-500 ease-in-out hidden group-hover:block"
                  />
                </span>
                <span className="text-left text-dropdown text-white group-hover:text-black font-heading transition-colors duration-500 ease-in-out">
                  Configuration
                </span>
              </div>
              <p className="text-[14px] text-white/70 mt-1 group-hover:text-[#002626]/70">
                Set up your platform efficiently
              </p>
            </a>

            {/* VISUALISATION */}
            <a
              href="/visualization"
              className="grid items-center px-4 mx-2 py-2 bg-darkgreen hover:bg-lime transition-all duration-500 ease-in-out group rounded-lg"
            >
              <div className="grid grid-cols-[15%_85%] items-center space-x-2 pt-2">
                <span className="text-center">
                  <Image
                    src={visualisation}
                    alt="Visualisation Icon"
                    width={30}
                    height={30}
                    className="transition-all duration-500 ease-in-out group-hover:hidden"
                  />
                  <Image
                    src={visualisationHover}
                    alt="Visualisation Icon Hover"
                    width={30}
                    height={30}
                    className="transition-all duration-500 ease-in-out hidden group-hover:block"
                  />
                </span>
                <span className="text-left text-dropdown text-white group-hover:text-black font-heading transition-colors duration-500 ease-in-out">
                  Visualization
                </span>
              </div>
              <p className="text-[14px] text-white/70 mt-1 group-hover:text-[#002626]/70">
                Bring data to life with visuals
              </p>
            </a>

            {/* OPTIMIZATION */}
            <a
              href="/optimization"
              className="grid items-center px-4 mx-2 py-2 bg-darkgreen hover:bg-lime transition-all duration-500 ease-in-out group rounded-lg"
            >
              <div className="grid grid-cols-[15%_85%] items-center space-x-2 pt-2">
                <span className="text-center">
                  <Image
                    src={optimization}
                    alt="Optimization Icon"
                    width={30}
                    height={30}
                    className="transition-all duration-500 ease-in-out group-hover:hidden"
                  />
                  <Image
                    src={optimizationHover}
                    alt="Optimization Icon Hover"
                    width={30}
                    height={30}
                    className="transition-all duration-500 ease-in-out hidden group-hover:block"
                  />
                </span>
                <span className="text-left text-dropdown text-white group-hover:text-black font-heading transition-colors duration-500 ease-in-out">
                  Optimization
                </span>
              </div>
              <p className="text-[14px] text-white/70 mt-1 group-hover:text-[#002626]/70">
                Enhance performance with ease
              </p>
            </a>

            {/* ANALYSIS */}
            <a
              href="/analysis"
              className="grid items-center px-4 mx-2 py-2 bg-darkgreen hover:bg-lime transition-all duration-500 ease-in-out group rounded-lg"
            >
              <div className="grid grid-cols-[15%_85%] items-center space-x-2 pt-2">
                <span className="text-center">
                  <Image
                    src={analysis}
                    alt="Analysis Icon"
                    width={30}
                    height={30}
                    className="transition-all duration-500 ease-in-out group-hover:hidden"
                  />
                  <Image
                    src={analysisHover}
                    alt="Analysis Icon Hover"
                    width={30}
                    height={30}
                    className="transition-all duration-500 ease-in-out hidden group-hover:block"
                  />
                </span>
                <span className="text-left text-dropdown text-white group-hover:text-black font-heading transition-colors duration-500 ease-in-out">
                  Analysis
                </span>
              </div>
              <p className="text-[14px] text-white/70 mt-1 group-hover:text-[#002626]/70">
                Analyze your data thoroughly
              </p>
            </a>

            {/* TRAINING */}
            <a
              href="/training"
              className="grid items-center px-4 mx-2 py-2 bg-darkgreen hover:bg-lime transition-all duration-500 ease-in-out group rounded-lg"
            >
              <div className="grid grid-cols-[15%_85%] items-center space-x-2 pt-2">
                <span className="text-center">
                  <Image
                    src={training}
                    alt="Training Icon"
                    width={30}
                    height={30}
                    className="transition-all duration-500 ease-in-out group-hover:hidden"
                  />
                  <Image
                    src={trainingHover}
                    alt="Training Icon Hover"
                    width={30}
                    height={30}
                    className="transition-all duration-500 ease-in-out hidden group-hover:block"
                  />
                </span>
                <span className="text-left text-dropdown text-white group-hover:text-black font-heading transition-colors duration-500 ease-in-out">
                  Training
                </span>
              </div>
              <p className="text-[14px] text-white/70 mt-1 group-hover:text-[#002626]/70">
                Learn from experts in the field
              </p>
            </a>
          </div>
        </div>
      )}

      {/* Slide-in Animation CSS */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes slideOut {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s forwards;
        }

        .animate-slideOut {
          animation: slideOut 0.3s forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
