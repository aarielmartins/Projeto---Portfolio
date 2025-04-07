//IMPORTA O ESTILO DE TITULO .TS COM OUTRO NOME
//NESSE ARQUIVO SERA "TITULOESTILO"
import { Titulo as TituloEstilo } from './styles'

//AQUI ESTAMOS FAZENDO A TIPAGEM EM TYPESCRIPT DA PROPS
//E JA EXPORTANDO ELA
export type Props = {
  //SE USA O "CHILDREN" PARA ACESSAR O FILHO DA TAG
  //POIS O QUE SE ESCREVE DENTRO DA TAG É O FILHO
  children: string
  fontSize?: number
}

//AQUI INDICAMOS QUE AO USAR O COMPONENTE TITULO VAMOS PRECISAR
//DE UM VALOR, QUE SERA UMA STRING
//QUANDO A FUNÇÃO TEM APENAS UMA LINHA NÃO É NECESSÁRIO O "()"
//O TITULOESTILO ADICIONA O ESTILO DA PASTA AO
const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
