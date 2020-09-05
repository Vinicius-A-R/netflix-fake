import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

html, body, #root{
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  color: #fff;
  font-size: 16px;
  background-color: #111;
}

button{ 
  cursor: pointer;
}
`;
