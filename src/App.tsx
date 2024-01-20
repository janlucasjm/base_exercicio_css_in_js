import { ThemeProvider } from 'styled-components'

import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container, EstiloGlobal } from './styles'

import Variaveis from './themes/original'

function App() {
  return (
    <ThemeProvider theme={Variaveis}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
