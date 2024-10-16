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

const BlockA: React.FC = () => {
  const postSlug = "blok-a";
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
    <div className=" bg-background p-10 shadow-lg w-full">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6 flex flex-col justify-between">
          <h2 className="font-heading text-heading text-4xl mb-4">{heading}</h2>
          <div className="flex">
            <button className="font-button bg-buttonBackground text-buttonText px-6 py-3 rounded-full">
              {button}
            </button>
          </div>
        </div>
        <div className="col-span-6 flex flex-col justify-between">
          <p className="font-subtext text-heading text-xl mb-4">{subtext1}</p>
          <p className="font-subtext text-subtext">{subtext2}</p>
        </div>
      </div>
      {image1?.node && (
        <img
          className="object-cover w-full h-main shadow-md mt-8 rounded-3xl"
          src={image1.node.sourceUrl}
          srcSet={image1.node.srcSet}
          alt="Post image"
        />
      )}
    </div>
  );
};

export default BlockA;
