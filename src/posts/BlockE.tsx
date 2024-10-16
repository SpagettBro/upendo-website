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

const BlockE: React.FC = () => {
  const postSlug = "blok-e";
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
    <div className="pt-24 pb-24 bg-white px-[20px] md:px-[120px]">
      {/* Dit is het blok, niet aanpassen. Alleen kleur aanpassen */}
      <div className="grid grid-cols-12 gap-[20px]">
        {/* Tekst kolom aan de linkerkant, links uitgelijnd */}
        <div className="col-span-12 md:col-start-1 md:col-span-6 flex flex-col items-start text-left">
          <h2 className="font-heading text-heading text-darkgreen mb-1">
            {heading}
          </h2>
          <p className="font-subtext text-body text-darkgreen mb-4">{body1}</p>
          <div className="mt-4 mb-[5rem]">
            <button className="font-button bg-green text-darkgreen px-6 h-[40px] rounded-full">
              {button} {/* Using dynamic button content */}
            </button>
          </div>
        </div>

        {/* Afbeelding kolom aan de rechterkant, rechts uitgelijnd */}
        <div className="col-span-12 md:col-start-9 md:col-span-4 flex justify-end items-end">
          <div className="relative w-full h-80 flex items-end">
            {" "}
            {/* Pas hier de hoogte aan */}
            {image1?.node && (
              <img
                src={image1.node.sourceUrl}
                srcSet={image1.node.srcSet}
                alt="image"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockE;
