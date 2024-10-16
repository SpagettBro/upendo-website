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

const BlockL: React.FC = () => {
  const postSlug = "blok-l";
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
    <div className="pt-20 pb-24 bg-white px-[20px] md:px-[120px]">
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-4 col-start-5 mt- flex flex-col w-full justify-center place-items-center">
          <div className="font-heading text-heading text-darkgreen">
            {heading}
          </div>
          <div className="mt-10 flex justify-center md:justify-start">
            <button className="font-button bg-green text-darkgreen px-6 h-[40px] rounded-full">
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockL;
