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

const BlockH: React.FC = () => {
  const postSlug = "blok-h";
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

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const { heading, subtext1, subtext2, body1, body2, image1 } =
    data.postBy.content;

  return (
    <div className="pt-28 pb-24 bg-lime px-[20px] md:px-[120px]">
      {/* Container met flex voor centreren van elementen */}
      <div className="grid grid-cols-12 gap-[20px]">
        {/* Dit is de grid, niet aanpassen. */}
        <div className="col-span-12 md:col-span-12 flex flex-col items-center text-center">
          {/* Heading gecentreerd bovenaan */}
          <h2
            className="font-heading text-heading text-darkgreen mb-8"
            data-aos="fade-up"
          >
            {heading}
          </h2>
          {/* Afbeelding gecentreerd onder de heading */}
          <div className="mb-8 flex justify-center w-full h-[600px]">
            {image1?.node && (
              <img
                src={image1.node.sourceUrl}
                srcSet={image1.node.srcSet}
                alt="image"
                className="object-cover rounded-[15px]"
                data-aos="fade-up"
              />
            )}
          </div>
        </div>
      </div>

      {/* Grid voor de tweede heading en tekst */}
      <div className="grid grid-cols-12 gap-[20px]">
        {/* Tweede heading links */}
        <div
          className="col-span-12 md:col-span-6 flex items-start justify-start"
          data-aos="fade-up"
        >
          <h3 className="font-heading text-subtext text-darkgreen">
            {subtext1}, <br></br>
            {subtext2}
          </h3>
        </div>

        {/* Tekst rechts */}
        <div
          className="col-span-12 md:col-span-6 flex items-start justify-end text-left"
          data-aos="fade-up"
        >
          <p className="font-subtext text-body text-darkgreen">
            {body1}
            <br></br>
            <br></br>
            {body2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockH;
