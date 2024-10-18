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

const BlockJ: React.FC = () => {
  const postSlug = "blok-j";
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="text-left" data-aos="fade-up">
          <h3 className="font-heading text-teal mb-4 text-subtext">
            {subtext1}
          </h3>
          <p className="font-subtext text-darkgreen">{body1}</p>
        </div>
        <div className="text-left" data-aos="fade-up">
          <h3 className="font-heading text-teal mb-4 text-subtext">
            {subtext2}
          </h3>
          <p className="font-subtext text-darkgreen">{body2}</p>
        </div>
        <div className="text-left" data-aos="fade-up">
          <h3 className="font-heading text-teal mb-4 text-subtext">
            {subtext3}
          </h3>
          <p className="font-subtext text-darkgreen">{body3}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-center" data-aos="fade-up">
        <button className="font-button bg-green text-darkgreen px-6 h-[40px] rounded-full">
          {button}
        </button>
      </div>
    </div>
  );
};

export default BlockJ;
