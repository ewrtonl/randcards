import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx"
import GameMode from "./pages/GameMode/GameMode.jsx"
import CardPersonPage from "./pages/CardPersonPage/CardPersonPage.jsx"
import CardThingPage from "./pages/CardThingPage/CardThingPage.jsx";
import CardPlacePage from "./pages/CardPlacePage/CardPlacePage.jsx";
import CardMoviePage from "./pages/CardMoviePage/CardMoviePage.jsx";
import Instrc from "./pages/Info/Info.jsx";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gamemode" element={<GameMode />} />
                <Route path="/howtoplay" element={<Instrc />} />
                <Route path="/personcard" element={<CardPersonPage />} />
                <Route path="/thingcard" element={<CardThingPage />} />
                <Route path="/placecard" element={<CardPlacePage />} />
                <Route path="/moviecard" element={<CardMoviePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;