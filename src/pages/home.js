import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";

export default function Home() {
  return (
    <React.Fragment>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </React.Fragment>
  );
}
