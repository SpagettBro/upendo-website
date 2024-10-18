"use client";

import { ApolloWrapper } from "../../apollo";
import BlockO from "../../posts/BlockO";
import BlockD2 from "../../posts/BlockD2";
import BlockJ from "../../posts/BlockJ";
import BlockM from "../../posts/BlockM";
import BlockG from "../../posts/BlockG";
import BlockD from "../../posts/BlockD";
import BlockP from "../../posts/BlockP";
import Header from "../../posts/Header";
import Footer from "../../posts/footer";

const HomePage: React.FC = () => {
  return (
    <ApolloWrapper>
      <Header />
      <BlockD2 />
      <BlockM />
      <BlockJ />
      <BlockO />
      <BlockG />
      <BlockP />
      <BlockD />
      <Footer />
    </ApolloWrapper>
  );
};

export default HomePage;
