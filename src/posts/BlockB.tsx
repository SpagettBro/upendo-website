"use client";

import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import AOS from "aos";
import "aos/dist/aos.css";

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

const BlockB: React.FC = () => {
  const postSlug = "blok-b";
  const { loading, error, data } = useQuery(BLOCK_A_QUERY, {
    variables: { slug: postSlug },
  });

  // Initialize AOS and reinitialize after data is loaded
  useEffect(() => {
    if (!loading && data) {
      AOS.init({ duration: 1000, once: false }); // 'once: false' ensures it animates every time it scrolls into view
      AOS.refresh(); // Refresh AOS to handle dynamic content
    }
  }, [loading, data]);

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
    <div className="pt-16 pb-24 bg-white px-[20px] md:px-[120px]">
      <div className="grid grid-cols-12 gap-[20px]">
        <div
          className="col-span-12 md:col-span-6 flex flex-col justify-between items-start text-left"
          data-aos="fade-right"
        >
          <h2 className="font-heading text-heading text-darkgreen">
            {heading}
          </h2>
          <p className="font-body text-body text-darkgreen mb-4">{body1}</p>
          <p className="font-body text-body text-darkgreen mb-10">{body2}</p>

          <div
            className="bg-lime border-2 border-green rounded-xl py-[7vh] px-[5vw] flex flex-col items-start justify-between text-left h-full"
            data-aos="fade-up"
          >
            <p className="font-subtext text-subtext text-darkgreen mb-2">
              {subtext1}
            </p>
            <p className="font-body text-body text-darkgreen mb-4">{body3}</p>
            <div className="mt-4 flex justify-start w-full">
              <button className="font-button bg-green text-darkgreen px-6 h-[40px] rounded-full">
                {button}
              </button>
            </div>
          </div>
        </div>

        <div
          className="hidden md:col-start-8 md:col-span-5 md:flex justify-end h-full"
          data-aos="fade-left"
        >
          {image1?.node && (
            <img
              src={image1.node.sourceUrl}
              srcSet={image1.node.srcSet}
              alt="Contact Us"
              className="object-contain h-full w-auto rounded-[15px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockB;
