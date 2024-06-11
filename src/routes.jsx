import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx"
import GameMode from "./pages/GameMode/GameMode.jsx"
import CardPersonPage from "./pages/CardPage/CardPersonPage.jsx"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gamemode" element={<GameMode />} />
                <Route path="/personcard" element={<CardPersonPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;