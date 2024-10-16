"use client";

import React, { useState } from "react";
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

/* 

in tailwind config toegevoegd:
bij colors
        dropdown: "#FEFFF8",
bij fontSize
        dropdown: "28px",

*/

const Header: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    /*HEADER */

    <header className="relative bg-white flex justify-between items-center py-6 px-[20px] md:px-[120px]">
      {/* Dit is het blok, niet aanpassen. Alleen kleur aanpassen */}
      {isDropdownVisible && (
        <div className="absolute top-full left-0 w-screen z-20 transition ease-in-out delay-150">
          <div className="flex flex-grow left-0 px-[20px] md:px-[120px] justify-between py-4 bg-white">
            {/* CONFIGURATION */}

            <a
              href="/configuration"
              className="grid grid-rows-2 items-center px-4 mx-2 py-2 bg-darkgreen hover:bg-lime transition-all duration-1000 ease-in-out group"
            >
              <div className="-mt-8 grid grid-cols-[15%_85%] items-center space-x-2">
                <span className="text-center">
                  {/* Change image on hover */}
                  <Image
                    src={configuration} // Default image
                    alt="Configuration Icon"
                    width={30}
                    height={30}
                    className="transition-all duration-2000 ease-in-out group-hover:hidden" // Hide on hover
                  />
                  <Image
                    src={configurationHover} // Image to show on hover
                    alt="Configuration Icon Hover"
                    width={30}
                    height={30}
                    className="transition-all duration-2000 ease-in-out hidden group-hover:block" // Show on hover
                  />
                </span>
                {/* Title with group-hover text color change */}
                <span className="text-left text-dropdown text-white group-hover:text-black transition-colors duration-300 ease-in-out">
                  Configuration
                </span>
              </div>
              {/* Sentence with group-hover text color change */}
              <span className="-mt-6 text-left text-body text-white group-hover:text-black transition-colors duration-300 ease-in-out">
                Unlock insights from complex data by transforming it into visual
                reports and dashboards.
              </span>
            </a>

            {/* VISUALISATION */}

            <a
              href="/visualization"
              className="grid grid-rows-2 items-center px-4 mx-2 py-2 bg-darkgreen hover:bg-lime transition-all duration-1000 ease-in-out group"
            >
              <div className="-mt-8 grid grid-cols-[15%_85%] items-center space-x-2">
                <span className="text-center">
                  {/* Change image on hover */}
                  <Image
                    src={visualisation} // Default image
                    alt="Visualisation Icon"
                    width={30}
                    height={30}
                    className="transition-all duration-2000 ease-in-out group-hover:hidden" // Hide on hover
                  />
                  <Image
                    src={visualisationHover} // Image to show on hover
                    alt="Visualisation Icon Hover"
                    width={30}
                    height={30}
                    className="transition-all duration-2000 ease-in-out hidden group-hover:block" // Show on hover
                  />
                </span>
                <span className="text-left text-dropdown text-white group-hover:text-black transition-colors duration-300 ease-in-out">
                  Visualisation
                </span>
              </div>
              <span className="-mt-6 text-left text-body text-white group-hover:text-black transition-colors duration-300 ease-in-out">
                Unlock insights from complex data by transforming it into visual
                reports and dashboards.
              </span>
            </a>

            {/* OPTIMIZATION */}

            <a
              href="/optimization"
              className="grid grid-rows-2 items-center px-4 mx-2 py-2 bg-darkgreen hover:bg-lime transition-all duration-1000 ease-in-out group"
            >
              <div className="-mt-8 grid grid-cols-[15%_85%] items-center space-x-2">
                <span className="text-center">
                  {/* Change image on hover */}
                  <Image
                    src={optimization} // Default image
                    alt="Optimization Icon"
                    width={30}
                    height={30}
                    className="transition-all duration-2000 ease-in-out group-hover:hidden" // Hide on hover
                  />
                  <Image
                    src={optimizationHover} // Image to show on hover
                    alt="Optimization Icon Hover"
                    width={30}
                    height={30}
                    className="transition-all duration-2000 ease-in-out hidden group-hover:block" // Show on hover
                  />
                </span>
                <span className="text-left text-dropdown text-white group-hover:text-black transition-colors duration-300 ease-in-out">
                  Optimization
                </span>
              </div>
              <span className="-mt-6 text-left text-body text-white group-hover:text-black transition-colors duration-300 ease-in-out">
                Unlock insights from complex data by transforming it into visual
                reports and dashboards.
              </span>
            </a>

            {/* ANALYSIS */}

            <a
              href="/analysis"
              className="grid grid-rows-2 items-center px-4 mx-2 py-2 bg-darkgreen hover:bg-lime transition-all duration-1000 ease-in-out group"
            >
              <div className="-mt-8 grid grid-cols-[15%_85%] items-center space-x-2">
                <span className="text-center">
                  {/* Change image on hover */}
                  <Image
                    src={analysis} // Default image
                    alt="Analysis Icon"
                    width={30}
                    height={30}
                    className="transition-all duration-2000 ease-in-out group-hover:hidden" // Hide on hover
                  />
                  <Image
                    src={analysisHover} // Image to show on hover
                    alt="Analysis Icon Hover"
                    width={30}
                    height={30}
                    className="transition-all duration-2000 ease-in-out hidden group-hover:block" // Show on hover
                  />
                </span>
                <span className="text-left text-dropdown text-white group-hover:text-black transition-colors duration-300 ease-in-out">
                  Analysis
                </span>
              </div>
              <span className="-mt-6 text-left text-body text-white group-hover:text-black transition-colors duration-300 ease-in-out">
                Unlock insights from complex data by transforming it into visual
                reports and dashboards.
              </span>
            </a>

            {/* TRAINING */}

            <a
              href="/training"
              className="grid grid-rows-2 items-center px-4 mx-2 py-2 bg-darkgreen hover:bg-lime transition-all duration-1000 ease-in-out group"
            >
              <div className="-mt-8 grid grid-cols-[15%_85%] items-center space-x-2">
                <span className="text-center">
                  {/* Change image on hover */}
                  <Image
                    src={training} // Default image
                    alt="Training Icon"
                    width={30}
                    height={30}
                    className="transition-all duration-2000 ease-in-out group-hover:hidden" // Hide on hover
                  />
                  <Image
                    src={trainingHover} // Image to show on hover
                    alt="Training Icon Hover"
                    width={30}
                    height={30}
                    className="transition-all duration-2000 ease-in-out hidden group-hover:block" // Show on hover
                  />
                </span>
                <span className="text-left text-dropdown text-white group-hover:text-black transition-colors duration-300 ease-in-out">
                  Training
                </span>
              </div>
              <span className="-mt-6 text-left text-body text-white group-hover:text-black transition-colors duration-300 ease-in-out">
                Unlock insights from complex data by transforming it into visual
                reports and dashboards.
              </span>
            </a>
          </div>
        </div>
      )}

      {/* UPENDO LOGO */}

      <div className="flex items-center">
        <a href="/">
          <Image src={logo} alt="Upendo Logo" className="h-8 w-auto" />
        </a>
      </div>

      {/* SERVICES PRICING COMPANY */}
      <nav className="flex-1 flex justify-center space-x-24 items-center">
        {/* SERVICES  */}
        <div className="relative left-0">
          <button
            className="flex items-center space-x-1 text-lg font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleDropdown}
          >
            <span className="mx-2">Services</span>

            <span className="transform rotate-[135deg]">
              <Image
                src={arrow}
                alt="Arrow Icon"
                className={`transform transition-transform ${
                  isDropdownVisible ? "rotate-180" : "rotate-0"
                }`}
                width={12}
                height={12}
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

      {/* CONTACT */}

      <div className="flex items-center">
        <button className="font-button bg-green text-darkgreen px-6 h-[40px] rounded-full">
          <a href="/contact">Contact</a> {/* Using dynamic button content */}
        </button>
      </div>
    </header>
  );
};

export default Header;
