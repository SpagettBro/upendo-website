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

const BlockM: React.FC = () => {
  const postSlug = "blok-m";
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
    <div className="pt-16 pb-16 bg-darkgreen px-[20px] md:px-[120px]">
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-6 col-start-4 mt- flex flex-col w-full justify-center place-items-center">
          <div className="pb-2 font-heading text-heading text-lime">
            {heading}
          </div>
          <div className="font-subtext text-body text-white">{body1}</div>
        </div>
      </div>
    </div>
  );
};

export default BlockM;
