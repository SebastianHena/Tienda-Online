//Components
import { Header } from '../components/UI.components/header/Header.jsx'
import { Footer } from '../components/UI.components/footer/Footer.jsx'

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import { Catalogo } from '../pages/Catalogo.Page.jsx';
import { Home } from '../pages/Home.Page.jsx';
import { Contact } from '../pages/Contact.Page.jsx'
import { ProductInfo } from '../pages/ProductInfo.Page.jsx';

//alerts
import { Toaster } from 'react-hot-toast';

export function App() {
  return (
    <>
      <Header />

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/productInfo" element={<ProductInfo />} />
          </Routes>
        </BrowserRouter>

        <Home />
        <Catalogo />
        <Contact />
      </main>

      <Footer />

      <Toaster position='top center' reverseOrder={false}/>
    </>
  )
}
