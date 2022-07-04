import { useContext, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

import Container from "./style";
import UserContext from "../../../contexts/userContext";

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const navigator = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            //pelo amor de Deus, funcione!
            const response = await axios.post("http://localhost:5000/sign-in", {email, password});

            const {token,name} = response.data;
            setUser({name,token});
            alert("Succesfully Logged");
            navigator("/home");
            
        } catch (error) {
            alert("Login attempt failed");
            console.log(error);
        }
    
    }

    return(<Container>
            <header>
                <h1>MyWallet</h1>   
            </header>
            <form>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                <button type="submit" onClick={handleSubmit}>Entrar</button>
            </form>
            <Link to="/sign-up">Primeira vez? Cadastre-se</Link>

        </Container>)
}