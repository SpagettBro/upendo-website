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

const BlockI: React.FC = () => {
  const postSlug = "blok-i";
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
    <div className="hidden md:block pt-24 pb-12 bg-darkgreen px-[20px] md:px-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        {/* Center the cards in the middle 8 columns on larger screens */}
        <div className="col-start-3 col-span-8 flex justify-center items-center relative">
          {/* Card 1 - Left card */}
          <div className="w-[450px] h-[450px] bg-lime p-16 rounded-2xl text-center shadow-lg flex flex-col items-center justify-center absolute left-0 -translate-x-10 opacity-70">
            <h2 className="font-heading text-heading text-darkgreen">
              {heading}
            </h2>
            <p className="font-body text-body text-darkgreen mt-4">{body1}</p>
            <button className="mt-6 px-4 py-2 bg-green text-darkgreen font-button rounded-full">
              {button}
            </button>
          </div>

          {/* Card 2 - Center card */}
          <div className="w-[450px] h-[550px] bg-lime p-16 rounded-2xl text-center shadow-lg flex flex-col items-center justify-center z-10">
            <h2 className="font-heading text-heading text-darkgreen">
              {heading}
            </h2>
            <p className="font-body text-body text-darkgreen mt-4">{body2}</p>
            <button className="mt-6 px-4 py-2 bg-green text-darkgreen font-button rounded-full">
              {button}
            </button>
          </div>

          {/* Card 3 - Right card */}
          <div className="w-[450px] h-[450px] bg-lime p-16 rounded-2xl text-center shadow-lg flex flex-col items-center justify-center absolute right-0 translate-x-10 opacity-70">
            <h2 className="font-heading text-heading text-darkgreen">
              {heading}
            </h2>
            <p className="font-body text-body text-darkgreen mt-4">{body3}</p>
            <button className="mt-6 px-4 py-2 bg-green text-darkgreen font-button rounded-full">
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockI;
