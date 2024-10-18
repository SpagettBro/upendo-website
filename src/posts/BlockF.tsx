"use client";

import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const BLOCK_A_QUERY = gql`
  query BlockAQuery($slug: String!) {
    postBy(slug: $slug) {
      content {
        heading
        subtext1
        subtext2
        subtext3
        body1
        body2
        body3
        button
        image1 {
          node {
            sourceUrl
            srcSet
          }
        }
      }
    }
  }
`;

const BlockF: React.FC = () => {
  const postSlug = "blok-f";
  const { loading, error, data } = useQuery(BLOCK_A_QUERY, {
    variables: { slug: postSlug },
  });

  const [isMonthly, setIsMonthly] = useState(true); // State to toggle between Monthly/Yearly

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const {
    heading,
    subtext1,
    subtext2,
    subtext3,
    body1,
    body2,
    body3,
    button,
    image1,
  } = data.postBy.content;

  // Dynamic pricing based on Monthly/Yearly toggle
  const pricing = {
    starter: isMonthly ? "$50 / month" : "$500 / year",
    essential: isMonthly ? "$120 / month" : "$1200 / year",
    professional: isMonthly ? "$280 / month" : "$2800 / year",
    businessPlus: isMonthly ? "Custom" : "Custom",
  };

  return (
    <div className="pt-24 pb-24 bg-darkgreen px-[20px] md:px-[120px]">
      <h2 className="font-heading text-heading text-lime text-center mb-4">
        {heading}
      </h2>
      <p className="font-body text-button text-white text-center mb-8">
        {body1}
      </p>

      {/* Toggle for Monthly/Yearly */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center bg-gray-100 p-1 rounded-full">
          <button
            className={`px-3 py-1.5 font-button text-body rounded-full ${isMonthly ? "bg-green text-darkgreen" : "text-gray-500"
              }`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </button>
          <button
            className={`px-3 py-1.5 font-button text-body rounded-full ${!isMonthly ? "bg-green text-darkgreen" : "text-gray-500"
              }`}
            onClick={() => setIsMonthly(false)}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {/* Starter Plan */}
        <div className="bg-white rounded-lg p-6 text-center shadow-md flex flex-col border-4 border-white
        transition-transform duration-300 hover:scale-105">
          <div className="flex-grow">
            <h3 className="font-subtext text-[24px] mb-2">Starter</h3>
            <p className="font-body text-black text-[14px] mb-4">
              Everything you need to kick off your data journey.
            </p>
          </div>
          <div>
            <p className="font-heading text-price mb-4">{pricing.starter}</p>
          </div>
          <button className="font-button text-black border-2 border-black px-6 h-[40px] leading-4 rounded-full mb-4">
            Get Started
          </button>
          <div className="font-body text-body">
            <ul className="list-none font-body text-black text-left">
              <li className="flex items-center">
                ✔ <span className="ml-4">Protect your data</span>
              </li>
              <li className="flex items-center">
                ✔ <span className="ml-4">Datasharing</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="ml-7">Connecting</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="ml-7">Visualize</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="ml-7">Dashboards</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Essential Plan (Highlighted) */}
        <div className="bg-white rounded-lg p-6 text-center shadow-lg border-4 border-[#A8ff1a] flex flex-col
        transition-transform duration-300 hover:scale-105">
          <div className="flex-grow">
            <h3 className="font-subtext text-[24px] mb-2">Essential</h3>
            <p className="font-body text-black text-[14px] mb-4">
              Key features to power your business growth.
            </p>
          </div>
          <div>
            <p className="font-heading text-price mb-4">{pricing.essential}</p>
          </div>
          <button className="font-button text-black bg-green px-6 h-[40px] leading-4 rounded-full mb-4">
            Get Started
          </button>
          <div className="font-body text-body">
            <ul className="list-none font-body text-black text-left">
              <li className="flex items-center">
                ✔ <span className="ml-4">Protect your data</span>
              </li>
              <li className="flex items-center">
                ✔ <span className="ml-4">Datasharing</span>
              </li>
              <li className="flex items-center">
                ✔ <span className="ml-4">Connecting</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="ml-[29px]">Visualize</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="ml-[29px]">Dashboards</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Professional Plan */}
        <div className="bg-white rounded-lg p-6 text-center shadow-md flex flex-col border-4 border-white
        transition-transform duration-300 hover:scale-105">
          <div className="flex-grow">
            <h3 className="font-subtext text-[24px] mb-2">Professional</h3>
            <p className="font-body text-black text-[14px] mb-4">
              Advanced tools for in-depth data insights.
            </p>
          </div>
          <div>
            <p className="font-heading text-price mb-4">{pricing.professional}</p>
          </div>
          <button className="font-button text-black border-2 border-black px-6 h-[40px] leading-4 rounded-full mb-4">
            Get Started
          </button>
          <div className="font-body text-body">
            <ul className="list-none font-body text-black text-left">
              <li className="flex items-center">
                ✔ <span className="ml-4">Protect your data</span>
              </li>
              <li className="flex items-center">
                ✔ <span className="ml-4">Datasharing</span>
              </li>
              <li className="flex items-center">
                ✔ <span className="ml-4">Connecting</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="ml-8">Visualize</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="ml-8">Dashboards</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Business+ Plan */}
        <div className="bg-white rounded-lg p-6 text-center shadow-md flex flex-col border-4 border-white
        transition-transform duration-300 hover:scale-105">
          <div className="flex-grow">
            <h3 className="font-subtext text-[24px] mb-2">Business+</h3>
            <p className="font-body text-black text-[14px] mb-4">
              Top-tier solutions for your most complex challenges.
            </p>
          </div>
          <div>
            <p className="font-heading text-price mb-4">{pricing.businessPlus}</p>
          </div>
          <button className="font-button text-black border-2 border-black px-6 h-[40px] leading-4 rounded-full mb-4">
            Contact Us
          </button>
          <div className="font-body text-body">
            <ul className="list-none font-body text-black text-left">
              <li className="flex items-center">
                ✔ <span className="ml-4">Protect your data</span>
              </li>
              <li className="flex items-center">
                ✔ <span className="ml-4">Datasharing</span>
              </li>
              <li className="flex items-center">
                ✔ <span className="ml-4">Connecting</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="ml-[30px]">Visualize</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="ml-[30px]">Dashboards</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockF;
