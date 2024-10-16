"use client";

import React from "react";
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

const BlockO: React.FC = () => {
  const postSlug = "blok-o";
  const { loading, error, data } = useQuery(BLOCK_A_QUERY, {
    variables: { slug: postSlug },
  });

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

  return (
    <div className="pt-[5rem] pb-0 bg-darkgreen px-[20px] md:px-[120px] flex">
      <div className="grid grid-cols-12 gap-[20px] w-full items-stretch">
        {/* Left Text Column */}
        <div className="col-span-12 md:col-start-1 md:col-span-6 flex flex-col items-start text-left">
          <h2 className="font-heading text-heading text-lime mb-1">
            {heading}
          </h2>
          <p className="font-body text-body text-white mb-4">{body1}</p>
          <div className="mt-4 mb-[5rem]">
            <button className="font-button bg-green text-darkgreen px-6 h-[40px] rounded-full">
              {button} {/* Using dynamic button content */}
            </button>
          </div>
        </div>

        {/* Essential Plan (Highlighted) */}
        <div className="col-span-12 md:col-start-9 md:col-span-4 flex justify-end">
          <div className="flex items-center -mt-[40px] h-full">
            {" "}
            {/* Added h-full to ensure it takes the full height */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg border-4 border-[#A8ff1a] flex flex-col justify-between">
              <div>
                <h3 className="font-subtext text-[24px] mb-2">{subtext1}</h3>
                <p className="font-body text-black mb-4">{body2}</p>
                <p className="font-heading text-price mb-4">$120 / month</p>
              </div>
              <button className="font-button text-black bg-green px-6 h-[40px] leading-4 rounded-full mb-4 mx-auto">
                {button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockO;
