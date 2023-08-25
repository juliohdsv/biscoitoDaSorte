import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/index";

const RoutesApp = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;