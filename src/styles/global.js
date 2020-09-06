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

html{
  --color-primary: #F40C14;
  --color-secondary: #54AC4B;
  --color-dark: #040404;
  --color-dark-light: #3c4144;
  --color-light: #fff;
  --color-light-dark: #ACACAC;

}

body{
  color: var(--color-light);
  font-size: 16px;
  background-color: var(--color-dark);
}


button{ 
  cursor: pointer;
}
`;
