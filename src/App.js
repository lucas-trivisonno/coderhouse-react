import './App.css';
import Header from './componentes/Header';
import Titulo from './componentes/titulo';
import Itemlistcontainer from './componentes/Itemlistcontainer';
import Itemdetailcontainer from './componentes/Itemdetailcontainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Provider from './componentes/Context';
import Cart from './componentes/Cart';
import Checkout from './componentes/Checkout';
import Main from './componentes/Main';
import Promos from './componentes/Promos';
import Novedades from './componentes/Novedades';


function App() {
  return (
<Provider>
    <BrowserRouter>
    <div className='container-fluid fondo-amarillo' >
      <Header />
      
      <Titulo titulo="Lo mejor de burguer king"/>
      
      
    </div>
    <Routes>
    <Route exact path='/' element={<Main/>}/>
    <Route exact path='/productos' element={<Itemlistcontainer/>}/>
    <Route exact path='/producto/:id' element={<Itemdetailcontainer/>}/>
    <Route path={"/cart"} element={<Cart />} />
    <Route path={"/checkout"} element={<Checkout />} />
    <Route exact path='/promos' element={<Promos/>}/>
    <Route exact path='/novedades' element={<Novedades/>}/>

    </Routes>

    
    </BrowserRouter>
    </Provider>
  );
}

export default App;
