import styled from 'styled-components'

//IMPORTA A TIPAGEM PROPS
import { Props } from '.'

//O TITULO PRECISA DA TIPAGEM PORPS PARA DEFINIR O FONTSIZE
//O FONTSIZE SE ADEQUA. CASO EXISTA UM VALOR DEFINIDO VIRA UMA
//CONCATENAÇÃO DO VALOR + PX, CASO NÃO SERÁ DE 14PX
export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
