//IMPORTAÇÃO PARA PODER UTILIZAR OS TEMAS COM O STYLED COMPONENTS
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import TemaLight from './themes/light'
import TemaDark from './themes/dark'

function App() {
  //USESTATE PARA CRIAR A TROCA DE BOTÃO
  const [usandoDark, setUsandoDark] = useState(false)

  //FUNÇÃO PARA TROCAR O TRUE POR FALSE
  //O "!" NEGA O BOLEANO, OU SEJA:
  //UM TRUE NEGATIVO É FALSE
  //UM FALSE NEGATIVO É TRUE
  function trocaTema() {
    setUsandoDark(!usandoDark)
  }

  return (
    <body>
      <ThemeProvider theme={usandoDark ? TemaDark : TemaLight}>
        <EstiloGlobal />
        <Container>
          <Sidebar trocaTema={trocaTema} />
          <main>
            <Sobre />
            <Projetos />
          </main>
        </Container>
      </ThemeProvider>
    </body>
  )
}

export default App
