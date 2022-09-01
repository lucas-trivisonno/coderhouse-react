import './App.css';

import Header from './componentes/Header';
import ItemListContainer from './componentes/Main';
import Titulo from './componentes/titulo';


function App() {
  return (
    <div className='container-fluid fondo-amarillo' >
      <Header />
      
      
      <Titulo />
      <ItemListContainer />
    </div>
  );
}

export default App;
