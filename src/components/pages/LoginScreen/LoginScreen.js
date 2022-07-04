import { useState } from "react";

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // function handleSubmit(e)

    return(<>
            <h1>MyWallet</h1>
            <form>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                {/* <button type="submit" onClick={handleSubmit}>Cadastrar</button> */}
            </form>

        </>)
};