"use client";

import { ApolloWrapper } from "../../apollo";
import BlockG from "../../posts/BlockG";
import BlockF from "../../posts/BlockF";
import Header from "../../posts/Header";
import Footer from "../../posts/footer";

const HomePage: React.FC = () => {
  return (
    <ApolloWrapper>
      <Header />
      <BlockF />
      <BlockG />
      <Footer />
    </ApolloWrapper>
  );
};

export default HomePage;
