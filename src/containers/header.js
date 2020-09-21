import React from "react";
import Header from "../components";

export function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo />
        <Header.Button />
      </Header.Frame>
    </Header>
  );
}
