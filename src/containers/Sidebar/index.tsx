import Titulo from '../../components/Titulo'

//CRIAMOS O COMPONENTE HTML DA BARRA LATERAL
const Sidebar = () => (
  <aside>
    <img src="https://github.com/aarielmartins.png" alt="Imagem de perfil" />
    <Titulo fontSize={20}>Ariel Martins</Titulo>
  </aside>
)

//EXPORTAMOS O COMPONENTE
export default Sidebar
