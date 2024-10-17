"use client"; // Mark the file as a Client Component

import React, { useEffect, useRef } from "react";
import { useQuery, gql } from "@apollo/client";
import '../app/globals.css';

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

const BlockC: React.FC = () => {
  const postSlug = "blok-c";
  const { loading, error, data } = useQuery(BLOCK_A_QUERY, {
    variables: { slug: postSlug },
  });

  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      // Willekeurige scrollpositie instellen
      const maxScrollLeft =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      const randomScrollPosition = Math.floor(Math.random() * maxScrollLeft);
      sliderRef.current.scrollLeft = randomScrollPosition;
    }
  }, [data]); // Scroll alleen instellen als data is geladen

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
    <div className="pt-16 pb-24 bg-darkgreen">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="font-heading text-heading text-lime">{heading}</h1>
        <p className="mx-96 font-body text-body text-white">{body1}</p>
      </div>

      {/* Cards Section */}
      <div ref={sliderRef} className="pt-4 flex overflow-x-auto space-x-4 hide-scrollbar">
        {/* Create cards */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-white p-4 rounded-lg text-black h-full"
          >
            <p className="font-body text-body text-pink">06-12-2023</p>
            <p className="font-body text-body text-darkgreen mt-2 pr-6">
              {body2}
            </p>
            <div className="flex items-center mt-4">
              {image1?.node && (
                <img
                  src={image1.node.sourceUrl}
                  srcSet={image1.node.srcSet}
                  width={48}
                  height={48}
                  alt="image"
                  className="rounded-full"
                />
              )}
              <p className="ml-4 font-body text-body text-darkgreen">{body3}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cards Section */}
      <div ref={sliderRef} className="pt-4 flex overflow-x-auto space-x-4 hide-scrollbar">
        {/* Create cards */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-white p-4 rounded-lg text-black h-full"
          >
            <p className="font-body text-body text-pink">06-12-2023</p>
            <p className="font-body text-body text-darkgreen mt-2 pr-6">
              {body2}
            </p>
            <div className="flex items-center mt-4">
              {image1?.node && (
                <img
                  src={image1.node.sourceUrl}
                  srcSet={image1.node.srcSet}
                  width={48}
                  height={48}
                  alt="image"
                  className="rounded-full"
                />
              )}
              <p className="ml-4 font-body text-body text-darkgreen">{body3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockC;
