import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUpScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigator = useNavigate();

async function handleSubmit(e) {
    e.preventDefault();

    try {
        await axios.post("http://localhost:5000/sign-up", {name,email,password,confirmPassword});     
        navigator("/")
        alert("User created succesfully!")
    } catch (error) {
        console.log(error);
        alert("Error while creating new user");
    }

}

    return (<>
        <div>
            <h1>Digite o seu login</h1>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmação de Senha" />
                <button type="submit" onClick={handleSubmit}>Cadastrar</button>
            </form>
            <Link to="/sign-up">Já possui cadastro? Clique aqui para logar</Link>

        </div>
        

    </>)
}