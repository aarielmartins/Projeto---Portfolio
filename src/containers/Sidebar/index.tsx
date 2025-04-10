import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

//ESSA PROPS VAZIA SERVE PARA QUE POSSAMOS ACESSAR NO ARQUIVO APP
//A FUNÇÃO DA TROCA DE TEMA DO BOTÃO QUE FICA NO SIDEBAR
//(OLHA NO ARQUIVO APP)
type Props = {
  trocaTema: () => void
}

//CRIAMOS O COMPONENTE HTML DA BARRA LATERAL
const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Ariel Martins</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        aarielmartins
      </Paragrafo>
      <Descricao fontSize={12} tipo="principal">
        Endenheira Front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

//EXPORTAMOS O COMPONENTE
export default Sidebar
