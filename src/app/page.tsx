"use client";

import { ApolloWrapper } from "../apollo";
import Header from "../posts/Header";
import BlockC from "../posts/BlockC";
import BlockB from "../posts/BlockB";
import BlockD3 from "../posts/BlockD3";
import BlockA from "../posts/BlockA";
import BlockL from "../posts/BlockL";
import Footer from "../posts/footer";

const HomePage: React.FC = () => {
  return (
    <ApolloWrapper>
      <Header />
      <BlockA />
      <BlockB />
      <BlockC />
      <BlockD3 />
      <BlockL />
      <Footer />
    </ApolloWrapper>
  );
};

export default HomePage;
