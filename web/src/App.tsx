import React from "react"
import Router from "./router"
import GlobalStyled from "./ui/GlobalStyled"
import { ThemeProvider } from 'styled-components'
import light from "./ui/theme/light"
import Header from "./components/Header"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyled />
      <Header />
      <Router />
    </ThemeProvider>
  )
}

export default App
