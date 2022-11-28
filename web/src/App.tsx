import React from "react"
import Router from "./router"
import GlobalStyled from "./ui/GlobalStyled"
import { ThemeProvider } from 'styled-components'
import light from "./ui/theme/light"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyled />
      <Router />
    </ThemeProvider>
  )
}

export default App
