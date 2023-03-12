import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
ol,
li {
    list-style: none;
}
a {
    color: #191919;
    text-decoration: none;
}
img {
    vertical-align: middle;
    border: 0;
}
html {  font-size: 16px;
}

body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.64px;
    color: #191919;
    word-break: keep-all;
    overflow-x: hidden;
}
`;

export default GlobalStyle;
