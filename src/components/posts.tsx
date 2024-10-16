"use client";

import React from 'react';
import { useQuery, gql } from '@apollo/client';

const BLOCK_A_QUERY = gql`
  query BlockAQuery($slug: String!) {
    postBy(slug: $slug) {
      content {
        heading
        subtext1
        subtext2
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
  const postSlug = 'blok-b'; // De slug voor deze specifieke post
  const { loading, error, data } = useQuery(BLOCK_A_QUERY, {
    variables: { slug: postSlug },
  });

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{data.postBy.content.heading}</h2>
      <p className="text-gray-600 mb-2">{data.postBy.content.subtext1}</p>
      <p className="text-gray-600 mb-4">{data.postBy.content.subtext2}</p>
      {data.postBy.content.image1?.node && (
        <img
          className="w-full h-auto rounded-md"
          src={data.postBy.content.image1.node.sourceUrl}
          srcSet={data.postBy.content.image1.node.srcSet}
          alt="Post image"
        />
      )}
    </div>
  );
};

export default BlockA;
