import './App.css';
import Header from './componentes/Header';
import Itemcount from './componentes/Itemcount';
import Titulo from './componentes/titulo';
import Itemlistcontainer from './componentes/Itemlistcontainer';



function App() {
  return (
    <div className='container-fluid fondo-amarillo' >
      <Header />
      
      
      <Titulo titulo="Lo mejor de burguer king"/>
      
      
      <Itemlistcontainer />
     
      <Itemcount stock={5} initial={1} onadd={0}/>
    </div>
  );
}

export default App;
