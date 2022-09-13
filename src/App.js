import './App.css';
import Header from './componentes/Header';
import Itemcount from './componentes/Itemcount';
import Titulo from './componentes/titulo';
import Itemlistcontainer from './componentes/Itemlistcontainer';
import Itemdetailcontainer from './componentes/Itemdetailcontainer';



function App() {
  return (
    <div className='container-fluid fondo-amarillo' >
      <Header />
      
      
      <Titulo titulo="Lo mejor de burguer king"/>
      
      
      <Itemlistcontainer />
      <Itemdetailcontainer />
      
    </div>
  );
}

export default App;
