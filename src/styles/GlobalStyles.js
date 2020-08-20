import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--white);
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: Lato;
    color: var(--primary);
  }
  ul {
    list-style: none
  }
  :root {
    --white: #fff;
    --black: #333;
    --border: #EAEAEA;
    --primary: #333;
    --secondary: #47525E;
    --tertiary: #666;

    --active: #49AD5B;
    --inactive: #D6323F;
    --waiting: #D2A710;
    --disable: #D2D2D2;

    --main-color: #E29933;
  }
`;
