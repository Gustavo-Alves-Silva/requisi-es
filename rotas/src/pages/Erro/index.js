import { Link } from "react-router-dom";

function Erro(){
    return(
        <div>
            <h2>Ops parece que essa página não existe</h2>
            <span>Encontramos essas paginas aqui</span>
            <br/>
            <br/>
            <Link to="/sobre">Sobre</Link>
            <br/>
            <Link to="/contato">Contato</Link>
            <br/>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Erro;