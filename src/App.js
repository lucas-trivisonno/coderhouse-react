import './App.css';
import Header from './componentes/Header';
import Titulo from './componentes/titulo';
import Itemlistcontainer from './componentes/Itemlistcontainer';
import Itemdetailcontainer from './componentes/Itemdetailcontainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Provider from './componentes/Context';
import Cart from './componentes/Cart';
import Checkout from './componentes/Checkout';


function App() {
  return (
<Provider>
    <BrowserRouter>
    <div className='container-fluid fondo-amarillo' >
      <Header />
      
      <Titulo titulo="Lo mejor de burguer king"/>
      
      
    </div>
    <Routes>
    <Route exact path='/productos' element={<Itemlistcontainer/>}/>
    <Route exact path='/producto/:id' element={<Itemdetailcontainer/>}/>
    <Route path={"/cart"} element={<Cart />} />
    <Route path={"/checkout"} element={<Checkout />} />

    </Routes>

    
    </BrowserRouter>
    </Provider>
  );
}

export default App;
