import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
    --bg-primary-color: #DCE2AA;
    --bg-color2: #eceee7;
    --border-primary-color: #B57F50;
    --border-color2: #d2b48c;
    --primary-green: #4B543B;
    --primary-red: #c0392b;
    }

    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Segoe Script', cursive;
    }

  body,html{
    width: 100vw;
    height: 100vh;
    position: relative;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }
`;
