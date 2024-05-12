//Components
import { Header } from '../components/UI.components/header/Header.jsx'
import { Footer } from '../components/UI.components/footer/Footer.jsx'

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import { BodyProduct } from '../pages/Product.Page.jsx';
import { Home } from '../pages/Home.Page.jsx';
import { Blog } from '../pages/Blog.Page.jsx'
import { Contact } from '../pages/Contact.Page.jsx'
import { ProductInfo } from '../pages/ProductInfo.Page.jsx';

export function App() {
  return (
    <main className="overflow-y-auto">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<BodyProduct />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productInfo" element={<ProductInfo />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  )
}
