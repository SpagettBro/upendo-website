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

  const { heading, body1 } = data.postBy.content;

  return (
    <div className="pt-16 pb-16 bg-darkgreen">
      <div className="grid grid-cols-12 gap-4 px-4 md:px-0">
        <div className="col-span-12 md:col-span-6 md:col-start-4 flex flex-col justify-center items-center">
          <h2 className="pb-2 font-heading text-heading text-lime text-center">
            {heading}
          </h2>
          <p className="font-subtext text-body text-white text-center">
            {body1}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockM;
