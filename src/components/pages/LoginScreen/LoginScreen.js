import { Link } from "react-router-dom"

export default function LoginScreen() {
    return (<>
        <h1>Digite o seu login</h1>
        <Link to="/sign-up">Primeira vez? Cadastre-se</Link>
    </>)
}