import React from "react"
import { QueryClientProvider } from 'react-query'
import Router from "./router"
import GlobalStyled from "./ui/GlobalStyled"
import { ThemeProvider } from 'styled-components'
import light from "./ui/theme/light"
import Header from "./components/Header"
import queryClient from "./services/queryClient"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyled />
        <Header />
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
