import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: 'Gyeonggi_Batang_Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-3@1.0/Batang_Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
  html,
  body {
    font-family:'Gyeonggi_Batang_Regular';
    overflow: hidden;
    }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
