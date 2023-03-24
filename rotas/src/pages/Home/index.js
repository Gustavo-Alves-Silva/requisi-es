import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>Pagina Home</h1>
        <span>Sujeito Programador</span>

        <br/>
        <br/>

        <Link to="/sobre">Sobre</Link>
        <br/>
        <Link to="/contato">Contato</Link>

        <hr/>

        <Link to="/produto/123121">Acessar Produto 123121</Link>

      </div>
    );
  }
  
  export default Home;
  