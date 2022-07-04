import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginScreen from "./pages/LoginScreen/LoginScreen.js";

export default function App() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />}/>
            </Routes>
        </BrowserRouter>
        </>)

    
}