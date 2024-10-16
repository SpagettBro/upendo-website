"use client";

import { ApolloWrapper } from "../../apollo";
import BlockJ from "../../posts/BlockJ";
import BlockI from "../../posts/BlockI";
import BlockK from "../../posts/BlockK";
import BlockH from "../../posts/BlockH";
import BlockM from "../../posts/BlockM";
import Header from "../../posts/Header";
import Footer from "../../posts/footer";

const HomePage: React.FC = () => {
  return (
    <ApolloWrapper>
      <Header />
      <BlockH />
      <BlockI />
      <BlockJ />
      <BlockK />
      <BlockM />
      <Footer />
    </ApolloWrapper>
  );
};

export default HomePage;
