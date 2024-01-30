import './index.css';
import Sidebar from "../../components/Sidebar/index"
import { useContext, useEffect, useState } from 'react';
import Cli from "../../img/client.png"
import Pesquisa from '../../components/Pesquisa';
import Axios from '../../Axios';
import { Context } from '../../Provider';

function Cadastro() {
  const [cliente, setclientes] = useState(13)
  const [cliente_prox, setcliente_prox] = useState("José")
  const [cliente_long, setcliente_log] = useState("Gilberto")
  const {setpopup_aviso} = useContext(Context)
  const [pontos, setpontos] = useState([])

  function cadastrar(){
    
  }
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className='content'>
        <Pesquisa></Pesquisa>
        <div className='cad'>
          <div className='form'>
            <div className='cadastro-input'>
              <p>Nome</p>
              <input></input>
            </div>
            <div className='cadastro-input'>
              <p>Email</p>
              <input></input>
            </div>
            <div className='cadastro-input'>
              <p>Telefone</p>
              <input></input>
            </div>
            <div className='positions'>
              <div className='cadastro-input'>
                <p>Posicão X</p>
                <input></input>
              </div>
              <div className='cadastro-input'>
                <p>Posição Y</p>
                <input></input>
              </div>
            </div>
            <button>Cadastro</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
