import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginScreen from "./pages/LoginScreen/LoginScreen.js";
import SignUpScreen from "./pages/SignUpScreen/SignUp.js";
import HomePage from "./pages/HomePage/HomePage.js"

import UserContext from "../contexts/userContext.js";
import { useState } from "react";

export default function App() {
    const [user,setUser] = useState(null);
    return (<>
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen/>}/>
                    <Route path="/sign-up" element={<SignUpScreen />} />
                    <Route path="/home" element={<HomePage />} />
                    {/* <Route path="/deposit" element={<DepositPage />} />
                    <Route path="/withdraw" element={<WithdrawPage />} /> */}
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </>)

    
}