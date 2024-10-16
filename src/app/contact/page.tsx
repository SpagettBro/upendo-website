"use client";

import { ApolloWrapper } from "../../apollo";
import BlockN from "../../posts/BlockN";
import Header from "../../posts/Header";
import Footer from "../../posts/footer";

const HomePage: React.FC = () => {
  return (
    <ApolloWrapper>
      <Header />
      <BlockN />
      <Footer />
    </ApolloWrapper>
  );
};

export default HomePage;
