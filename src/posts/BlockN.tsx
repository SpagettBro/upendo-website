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

const BlockN: React.FC = () => {
  const postSlug = "blok-n";
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

  return (
    <div className="pt-20 pb-28 bg-darkgreen px-[20px] md:px-[120px]">
      <div className="flex flex-col mb-8">
        {/* Nieuwe sectie voor "Contact Us" en "Any questions? Let's talk" */}
        <h2 className="text-lime font-heading text-heading mb-2">{heading}</h2>
        <p className="text-white text-subtext font-subtext mb-6">{subtext1}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Linker sectie met tekst en contactinformatie */}
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row md:justify-between mb-6">
            <p className="text-white font-subtext md:w-3/5 md:mr-4">{body1}</p>

            {/* Contact Details */}
            <div className="mt-4 md:mt-0 md:w-2/5 text-right">
              <h3 className="text-lg font-heading text-white">
                Contact Details
              </h3>
              <p className="text-sm text-white">Upendo@mail.gov</p>
              <p className="text-sm text-white">+31 6 48484042</p>
              <p className="text-sm text-white">Parkstraat 3A, Haren</p>
              <p className="text-sm text-white">VAT: 85859</p>
            </div>
          </div>

          {/* Formulier */}
          <form className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-white">
              Name*
            </label>
            <input
              type="text"
              id="name"
              className="mb-4 p-2 bg-white text-black rounded-[15px]"
              required
            />

            <label htmlFor="company" className="mb-2 text-white">
              Company*
            </label>
            <input
              type="text"
              id="company"
              className="mb-4 p-2 bg-white text-black rounded-[15px]"
              required
            />

            <label htmlFor="email" className="mb-2 text-white">
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="mb-4 p-2 bg-white text-black rounded-[15px]"
              required
            />

            <label htmlFor="message" className="mb-2 text-white">
              Message
            </label>
            <textarea
              id="message"
              className="mb-4 p-2 bg-white text-black rounded-[15px]"
              rows={4}
              required
            />

            <button className="font-button bg-green text-darkgreen px-6 h-[40px] rounded-full">
              {button}
            </button>
          </form>
        </div>

        {/* Rechter sectie met afbeelding */}
        <div className="flex justify-center">
          {image1?.node && (
            <img
              src={image1.node.sourceUrl}
              srcSet={image1.node.srcSet}
              alt="Contact Us"
              className="rounded-lg object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockN;
