import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({theme}) => theme.colors.azulClaro};
    box-sizing: border-box;
    font-family: ${({theme}) => theme.fontFamily}
  }
`

export default GlobalStyle
