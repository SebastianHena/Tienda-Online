//Components
import { Header } from '../src/components/header/Header.jsx'
import { SubHeader } from '../src/components/subHeader/SubHeader.jsx'
import { BodyProduct } from '../src/components/bodyProduct/BodyProduct.jsx'
import { Footer } from '../src/components/footer/Footer.jsx'
//Style
import './css/App.css'

export function App() {
  return (
    <main>
      <Header />
      <SubHeader />
      <BodyProduct />
      <Footer />
    </main>
  )
}

