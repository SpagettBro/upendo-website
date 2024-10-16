"use client";

import { useQuery, gql } from "@apollo/client";
import React, { useState } from "react";

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

const BlockK: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const postSlug = "blok-k";
  const { loading, error, data } = useQuery(BLOCK_A_QUERY, {
    variables: { slug: postSlug },
  });

  if (loading) return <p className="text-center text-white">Loading...</p>;
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
    <div className="pt-[5rem] pb-[5rem] bg-white px-[20px] md:px-[120px]">
      <div className="grid grid-cols-12">
        <h2 className="font-heading text-heading text-darkgreen mb-4 col-start-1">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-[20px] w-full items-stretch">
        <div className="col-span-12 md:col-start-1 md:col-span-12 bg-darkgreen pl-6 pr-6 pt-9 pb-9 rounded-xl">
          <div className="grid grid-cols-1 gap-[20px]">
            {/* Question 1 */}
            <div
              className="p-3 rounded-xl cursor-pointer transition-all duration-300 bg-lime"
              onClick={() => toggleFAQ(0)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-body text-body2">
                  Why is Upendo the best tool?
                </h3>
                <span className="font-body text-body2 text-2xl">
                  {activeIndex === 0 ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === 0 ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <p
                  className={`mt-2 font-body2 text-body2 bg-black/15 p-3 rounded-lg ${
                    activeIndex === 0 ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  dolor.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div
              className="p-3 rounded-xl cursor-pointer transition-all duration-300 bg-lime"
              onClick={() => toggleFAQ(1)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-body text-body2">How to use Upendo?</h3>
                <span className="font-body text-body2 text-2xl">
                  {activeIndex === 1 ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === 1 ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <p
                  className={`mt-2 font-body2 text-body2 bg-black/15 p-3 rounded-lg ${
                    activeIndex === 1 ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  dolor.
                </p>
              </div>
            </div>

            {/* Question 3 */}
            <div
              className="p-3 rounded-xl cursor-pointer transition-all duration-300 bg-lime"
              onClick={() => toggleFAQ(2)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-body text-body2">What are the prices?</h3>
                <span className="font-body text-body2 text-2xl">
                  {activeIndex === 2 ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === 2 ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <p
                  className={`mt-2 font-body2 text-body2 bg-black/15 p-3 rounded-lg ${
                    activeIndex === 2 ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  dolor.
                </p>
              </div>
            </div>

            {/* Question 4 */}
            <div
              className="p-3 rounded-xl cursor-pointer transition-all duration-300 bg-lime"
              onClick={() => toggleFAQ(3)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-body text-body2">
                  Who are the Upendo founders?
                </h3>
                <span className="font-body text-body2 text-2xl">
                  {activeIndex === 3 ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === 3 ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <p
                  className={`mt-2 font-body2 text-body2 bg-black/15 p-3 rounded-lg ${
                    activeIndex === 3 ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  dolor.
                </p>
              </div>
            </div>

            {/* Question 5 */}
            <div
              className="p-3 rounded-xl cursor-pointer transition-all duration-300 bg-lime"
              onClick={() => toggleFAQ(4)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-body text-body2">
                  When was Upendo founded?
                </h3>
                <span className="font-body text-body2 text-2xl">
                  {activeIndex === 4 ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === 4 ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <p
                  className={`mt-2 font-body2 text-body2 bg-black/15 p-3 rounded-lg ${
                    activeIndex === 4 ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  dolor.
                </p>
              </div>
            </div>

            {/* Question 6 */}
            <div
              className="p-3 rounded-xl cursor-pointer transition-all duration-300 bg-lime"
              onClick={() => toggleFAQ(5)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-body text-body2">Is Upendo the future?</h3>
                <span className="font-body text-body2 text-2xl">
                  {activeIndex === 5 ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === 5 ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <p
                  className={`mt-2 font-body2 text-body2 bg-black/15 p-3 rounded-lg ${
                    activeIndex === 5 ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockK;
