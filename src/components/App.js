import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginScreen from "./pages/LoginScreen/LoginScreen.js";
import SignUpScreen from "./pages/SignUpScreen/SignUp.js";

export default function App() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen/>}/>
                <Route path="/sign-up" element={<SignUpScreen />} />
            </Routes>
        </BrowserRouter>
        </>)

    
}