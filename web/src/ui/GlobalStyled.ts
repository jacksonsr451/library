import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${({theme}) => theme.colors.background};
        color: ${({theme}) => theme.colors.text};
    }

    input {
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove;
        background-color: ${({theme}) => theme.colors.border};
    }

    input:focus {
       outline: none;
    }
`

export default GlobalStyled
