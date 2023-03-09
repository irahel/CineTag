import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "pages/Main"
import Favorites from "pages/Favorites"
import Player from "pages/Player"
import Erro from "pages/Erro"
import DefaultPage from "pages/DefaultPage"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage/>}>
          <Route index element={<Main />} />
          <Route path="/favoritos" element={<Favorites/>}/>
          <Route path="/:id" element={<Player/>}/>
          <Route path="/*" element={<Erro/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes