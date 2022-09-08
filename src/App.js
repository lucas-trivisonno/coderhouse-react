import './App.css';

import Header from './componentes/Header';
import Item from './componentes/Item';
import Itemcount from './componentes/Itemcount';
import Itemlist from './componentes/Itemlist';
import Main from './componentes/Main';
import ItemListContainer from './componentes/Itemlistcontainer';
import Titulo from './componentes/titulo';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className='container-fluid fondo-amarillo' >
      <Header />
      
      
      <Titulo titulo="Lo mejor de burguer king"/>
      
      <Main />
      <ItemListContainer />
     
      <Itemcount stock={5} initial={1} onadd={0}/>
    </div>
  );
}

export default App;
