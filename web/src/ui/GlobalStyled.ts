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
`

export default GlobalStyled
