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

const BlockG: React.FC = () => {
  const postSlug = "blok-g";
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
    <div className="pt-16 pb-16 bg-lime px-[20px] md:px-[120px]">
      <div className="grid grid-cols-12 gap-[20px]">
        {/* Left Column */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-start text-left">
          <h2 className="font-subtext text-subtext text-darkgreen leading-tight mb-2">
            {subtext1}
          </h2>
          <p className="font-body text-body text-darkgreen mb-4">{body1}</p>
          <div className="mb-4">
            <div className="flex items-center">
              <span className="mr-2">✔️</span>
              <span className="font-body text-body text-darkgreen">
                Protect your data
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✔️</span>
              <span className="font-body text-body text-darkgreen">
                Datasharing
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 opacity-0">✔️</span>
              <span className="font-body text-body text-darkgreen/50">
                Connecting
              </span>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-start text-left">
          <h2 className="font-subtext text-subtext text-darkgreen leading-tight mb-2">
            {subtext2}
          </h2>
          <p className="font-body text-body text-darkgreen mb-4">{body2}</p>
          <div className="mb-4">
            <div className="flex items-center">
              <span className="mr-2">✔️</span>
              <span className="font-body text-body text-darkgreen">
                Visualize
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✔️</span>
              <span className="font-body text-body text-darkgreen">
                Dashboards
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✔️</span>
              <span className="font-body text-body text-darkgreen">
                Statistics
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 opacity-0">✔️</span>
              <span className="font-body text-body text-darkgreen/50">
                Marketing
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 opacity-0">✔️</span>
              <span className="font-body text-body text-darkgreen/50">
                Personal Assistance
              </span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-start text-left">
          <h2 className="font-subtext text-subtext text-darkgreen leading-tight mb-2">
            {subtext3}
          </h2>
          <p className="font-body text-body text-darkgreen mb-4">{body3}</p>
          <div className="mb-4">
            <div className="flex items-center">
              <span className="mr-2">✔️</span>
              <span className="font-body text-body text-darkgreen">
                Data Analytics
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✔️</span>
              <span className="font-body text-body text-darkgreen">
                Integrations
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✔️</span>
              <span className="font-body text-body text-darkgreen">
                Real-time Updates
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 opacity-0">✔️</span>
              <span className="font-body text-body text-darkgreen/50">
                Visualizations
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockG;
