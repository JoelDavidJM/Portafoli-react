
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashborad from './pages/Dashborad'
import Abaut from './pages/Abaut'
import Comment from './pages/Comment'
import Analytics from './pages/Analytics'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Sidebar from './components/Sidebar'
import ProyectDos from './pages/ProyectDos'
import './style/styleColors.css'
import { useEffect, useState } from 'react'

function App() {

  const [isLoading, setIsLoading] = useState(true); 

  const fetchData = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <img className='loading' src="https://media4.giphy.com/media/MydKZ8HdiPWALc0Lqf/giphy.gif?cid=6c09b952r6rjdlgatfuw1v92n00tqa9zrfhxujqc0u2cgdlv&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" alt="" />;
  }

  return (
    <>
    <BrowserRouter>
      <Sidebar>
        <Routes>
        <Route path='/' element={<Dashborad/>}/>
        <Route path='/inicio' element={<Dashborad/>}/>
        <Route path='/sobre mi' element={<Abaut/>}/>
        <Route path='/tecnologias' element={<Analytics/>}/>
        <Route path='/proyectos' element={<Comment/>}/>
        <Route path='/tecnologiasDos' element={<ProyectDos/>}/>
        <Route path='/contacto' element={<Product/>}/>
        <Route path='/productList' element={<ProductList/>}/>
      </Routes>
      </Sidebar>
      </BrowserRouter>
    </>
      
     
  )
}

export default App
