//IMPORTA O ESTILO DE P
import { P } from './styles'

//AQUI ESTAMOS FAZENDO A TIPAGEM EM TYPESCRIPT DA PROPS
//E JA EXPORTANDO ELA
export type Props = {
  //SE USA O "CHILDREN" PARA ACESSAR O FILHO DA TAG
  //POIS O QUE SE ESCREVE DENTRO DA TAG É O FILHO
  //O TIPO É UM COMPONENTE QUE RECEBE EXATAMENTE 2 STRINGS APENAS
  //OU O 'PRINCIPAL' OU O 'SECUNDARIO'
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

//AQUI INDICAMOS QUE AO USAR O COMPONENTE PARAGRAFO VAMOS PRECISAR
//DE UM VALOR, QUE SERA UMA STRING
//QUANDO A FUNÇÃO TEM APENAS UMA LINHA NÃO É NECESSÁRIO O "()"
//NESSE CASO FIZEMOS UMA DESESTRUTURAÇÃO DA PROPS, EM QUE O TIPO INICIAL
//SERA "PRINCIPAL"
const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
