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

const BlockD: React.FC = () => {
  const postSlug = "blok-d";
  const { loading, error, data } = useQuery(BLOCK_A_QUERY, {
    variables: { slug: postSlug },
  });

  useEffect(() => {
    // Initialiseer AOS
    AOS.init();
  }, []);

  useEffect(() => {
    // Zorg ervoor dat AOS opnieuw wordt geladen wanneer de component opnieuw wordt weergegeven
    AOS.refresh();
  }, [data]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const { heading, body1, body2, body3, button, image1 } = data.postBy.content;

  return (
    <div className="pt-24 pb-24 bg-white px-[20px] md:px-[120px]">
      <div className="grid grid-cols-4 md:grid-cols-12 gap-[20px] md:gap-[100px]">
        {/* Afbeelding kolom op desktop en mobiel */}
        <div
          className="col-span-4 md:col-span-6 flex justify-center md:justify-start h-full"
          data-aos="fade-right"
        >
          {image1?.node && (
            <img
              src={image1.node.sourceUrl}
              srcSet={image1.node.srcSet}
              alt="image"
              className="object-cover h-full w-auto rounded-[15px]"
            />
          )}
        </div>

        {/* Content kolom met heading, tekst en button */}
        <div
          className="col-span-4 md:col-start-7 md:col-span-6 flex flex-col justify-between items-start text-left"
          data-aos="fade-left"
        >
          <h2 className="font-heading text-heading text-darkgreen">
            {heading}
          </h2>

          <p className="font-body text-body text-darkgreen mb-4">{body1}</p>

          <p className="font-body text-body text-darkgreen">
            {body2}
            <br />
            <br />
            {body3}
          </p>

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

export default BlockD;
