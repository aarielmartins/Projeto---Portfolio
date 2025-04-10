import styled from 'styled-components'

//IMPORTA A TIPAGEM PROPS
import { Props } from '.'
import { Theme } from '../../themes/light'

//O TITULO PRECISA DA TIPAGEM PORPS PARA DEFINIR O FONTSIZE
//O FONTSIZE SE ADEQUA. CASO EXISTA UM VALOR DEFINIDO VIRA UMA
//CONCATENAÇÃO DO VALOR + PX, CASO NÃO SERÁ DE 14PX
export const Titulo = styled.h3<Props>`
  color: ${(props) => (props.theme as Theme).corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
