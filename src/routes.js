import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "pages/Main"
import Favorites from "pages/Favorites"
import Header from "components/Header"
import Footer from "components/Footer"
import Container from "components/Container"
import { FavoritesProvider } from "contexts/FavoritesContext"
import Player from "pages/Player"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoritesProvider>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/favoritos" element={<Favorites/>}/>
              <Route path="/:id" element={<Player/>}/>
          </Routes>
        </FavoritesProvider>
      </Container>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes