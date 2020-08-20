import React from "react";

import logo from "../../assets/uol-lg.png";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <img src={logo} alt="Uol host" />
    </Container>
  );
}

export default Header;
