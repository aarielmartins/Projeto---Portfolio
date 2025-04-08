import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

//CRIAMOS O COMPONENTE HTML DA BARRA LATERAL
const Sidebar = () => (
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
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

//EXPORTAMOS O COMPONENTE
export default Sidebar
