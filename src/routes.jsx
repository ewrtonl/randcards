import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx"
import GameMode from "./pages/GameMode/GameMode.jsx"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gamemode" element={<GameMode />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;