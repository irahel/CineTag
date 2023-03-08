import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "pages/Main"
import Favorites from "pages/Favorites"
import Header from "components/Header"
import Footer from "components/Footer"
import Container from "components/Container"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/favoritos" element={<Favorites/>}/>
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes