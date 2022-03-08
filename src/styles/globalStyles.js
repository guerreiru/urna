import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
