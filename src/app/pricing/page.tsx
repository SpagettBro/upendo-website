"use client";

import { ApolloWrapper } from "../../apollo";
import BlockJ from "../../posts/BlockJ";
import BlockF from "../../posts/BlockF";
import Header from "../../posts/Header";
import Footer from "../../posts/footer";

const HomePage: React.FC = () => {
  return (
    <ApolloWrapper>
      <Header />
      <BlockF />
      <BlockJ />
      <Footer />
    </ApolloWrapper>
  );
};

export default HomePage;
