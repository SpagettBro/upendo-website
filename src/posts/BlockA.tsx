"use client"; // Voeg deze regel toe om het bestand als een Client Component te markeren

import React from "react";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import image9 from "../images/image-9.png";
import image2 from "../images/image-2.png";
import image3 from "../images/image-3.png";
import image4 from "../images/image-4.png";
import image5 from "../images/image-5.png";
import image6 from "../images/image-6.png";
import image7 from "../images/image-7.png";
import image8 from "../images/image-8.png";

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

  if (loading) return <p className="text-center text-white">Loading...</p>;
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

  const images = [
    image9,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <section className="bg-background">
      <div className="pt-24 bg-darkgreen px-[20px] md:px-[120px]">
        {/* Dit is het blok, niet aanpassen. Alleen kleur aanpassen */}
        <div className="grid grid-cols-12 gap-[20px]">
          {/* Dit is de grid, niet aanpassen. */}
          <div className="col-span-12 md:col-span-6 flex flex-col items-start text-left">
            {/* Dit is de div met content, aanpassen op basis van de grootte. */}
            <h2 className="font-heading text-heading text-lime mb-2">
              {heading}
            </h2>
            {/* Dit is de heading. */}
            <p className="font-body text-body text-white mb-4">
              {/* Dit is de body. */}
              {body1}
            </p>

            <div className="mt-4 flex justify-center md:justify-start">
              {/* Dit is de button, tekst aanpassen, styling niet. */}
              <button className="font-button bg-green text-darkgreen px-6 h-[40px] rounded-full">
                {button}
              </button>
            </div>
          </div>

          {/* Afbeelding kolom op desktop, alleen hier */}
          <div className="hidden md:col-start-8 md:col-span-5 md:flex justify-end h-[100vh]">
            {image1?.node && (
              <img
                src={image1.node.sourceUrl}
                srcSet={image1.node.srcSet}
                alt="image"
                className="object-cover w-full h-full -mt-[6rem]" // Gebruik object-cover voor inzoomen en h-full voor volledige hoogte
              />
            )}
          </div>
        </div>
      </div>

      {/* 8 column grid met afbeeldingen */}
      <div className="bg-darkgreen relative overflow-hidden pb-10 -m-12">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex">
            {/* Dupliceren van de afbeeldingen om een eindeloze scroll te creëren */}
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ marginRight: "60px" }} // Ruimte tussen de logo's
              >
                <Image
                  src={src}
                  alt={`image-${index + 2}`} // Alt text voor de afbeeldingen
                  width={110} // Breedte van de afbeelding
                  height={64.35} // Hoogte van de afbeelding
                  className="object-cover" // Zorg ervoor dat de afbeelding goed wordt weergegeven
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS voor animatie */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite; /* tijd aanpassen om de snelheid te wijzigen */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0); /* start positie */
          }
          100% {
            transform: translateX(
              -${images.length * 170}px
            ); /* Verschuift tot het einde van de afbeeldingen */
          }
        }
      `}</style>
    </section>
  );
};

export default BlockA;
