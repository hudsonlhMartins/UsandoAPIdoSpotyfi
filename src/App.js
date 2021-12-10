import Rotas from "./rotas";
import {GlobalStyled} from './styles/global'
import Header  from './components/Header'

function App() {
  return (
    <div>
      <Header/>
      <Rotas/>
      <GlobalStyled/>
    </div>
  );
}

export default App;
