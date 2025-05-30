//IMPORTA O ESTILO GLOBAL E O STYLED COMPONENTS DE UMA VEZ SÓ
import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './themes/light'

//CRIA O ESTILO GLOBAL
const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    list-style: none;
  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${(props) => (props.theme as Theme).corDeFundo};

    @media (max-width: 768px) {
    padding-top: 16px;
    }

  }
`
//EXPORTA ELE
export default EstiloGlobal

//CRIA E JA EXPORTA O COMPONENTE DE ESTILO "CONTAINER"
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
