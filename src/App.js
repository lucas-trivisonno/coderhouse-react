import './App.css';
import Header from './componentes/Header';
import Itemcount from './componentes/Itemcount';
import Titulo from './componentes/titulo';
import Itemlistcontainer from './componentes/Itemlistcontainer';
import Itemdetailcontainer from './componentes/Itemdetailcontainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Itemlist from './componentes/Itemlist';
import Itemdetail from './componentes/Itemdetail';



function App() {
  return (
    <BrowserRouter>
    <div className='container-fluid fondo-amarillo' >
      <Header />
      
      <Titulo titulo="Lo mejor de burguer king"/>
      
      
    </div>
    <Routes>
    <Route exact path='/productos' element={<Itemlistcontainer/>}/>
    <Route exact path='/producto/:id' element={<Itemdetailcontainer/>}/>
    
    

    </Routes>

    
    </BrowserRouter>
  );
}

export default App;
