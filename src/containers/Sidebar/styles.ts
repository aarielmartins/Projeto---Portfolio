import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'
import { Theme } from '../../themes/light'

//O "STYLED(P)" É UMA FUNÇÃO QUE SERVE PARA ESTILIZAR
//UM COMPONENTE JÁ CRIADO. NO CASO,
// O "P" QUE USAMOS NO PARAGRAFO
export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => (props.theme as Theme).corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => (props.theme as Theme).corPrincipal};
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
