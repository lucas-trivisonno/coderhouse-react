import './App.css';

import Header from './componentes/Header';
import Itemcount from './componentes/Itemcount';
import ItemListContainer from './componentes/Main';
import Titulo from './componentes/titulo';


function App() {
  return (
    <div className='container-fluid fondo-amarillo' >
      <Header />
      
      
      <Titulo titulo="Lo mejor de burguer king"/>
      <ItemListContainer />
      <Itemcount stock={5} initial={1} onadd={0}/>
    </div>
  );
}

export default App;
