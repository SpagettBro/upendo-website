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

const BlockD3: React.FC = () => {
  const postSlug = "blok-d3";
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
    <div className="pt-24 pb-24 bg-lime px-[20px] md:px-[120px]">
      {/* Dit is het blok, niet aanpassen. Alleen kleur aanpassen */}
      <div className="grid grid-cols-12 gap-[20px]">
        {/* Dit is de grid, niet aanpassen. */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-between items-start text-left">
          {/* Dit is de div met content, aanpassen op basis van de grootte. */}
          <h2 className="font-heading text-heading text-darkgreen">
            {heading}
          </h2>
          {/* Dit is de heading. */}
          <p className="font-body text-body text-darkgreen mb-4">
            {/* Dit is de body. */}
            {body1}
          </p>

          <p className="font-body text-body text-darkgreen">
            {/* Dit is de body. */}
            {body2}
            <br></br>
            <br></br>
            {body3}
          </p>

          <div className="mt-10 flex justify-center md:justify-start">
            {/* Dit is de button, tekst aanpassen, styling niet. */}
            <button className="font-button bg-green text-darkgreen px-6 h-[40px] rounded-full">
              {button} {/* Using dynamic button content */}
            </button>
          </div>
        </div>

        {/* Afbeelding kolom op desktop, alleen hier */}
        <div className="hidden md:col-start-8 md:col-span-5 md:flex justify-end h-full">
          {image1?.node && (
            <img
              src={image1.node.sourceUrl}
              srcSet={image1.node.srcSet}
              alt="image"
              className="object-cover h-full w-auto rounded-[15px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockD3;
