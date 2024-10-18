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

const BlockD2: React.FC = () => {
  const postSlug = "blok-d2";
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

  const { heading, body1, body2, button, image1 } = data.postBy.content;

  return (
    <div className="pt-24 pb-24 bg-lime px-[20px] md:px-[120px]">
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-12 md:col-span-6 flex flex-col justify-between items-start text-left">
          <h2
            className="font-heading text-heading text-darkgreen"
            data-aos="fade-up"
          >
            {heading}
          </h2>
          <p
            className="font-body text-body text-darkgreen mb-4"
            data-aos="fade-up"
          >
            {body1}
          </p>

          <p className="font-body text-body text-darkgreen" data-aos="fade-up">
            {body2}
          </p>

          <div className="mt-10 flex justify-center md:justify-start">
            <button
              className="font-button bg-green text-darkgreen px-6 h-[40px] rounded-full"
              data-aos="fade-up"
            >
              {button}
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
              data-aos="fade-up"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockD2;
