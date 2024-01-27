import './index.css';
import Sidebar from "../../components/Sidebar/index"
import { useEffect, useState } from 'react';
import Cli from "../../img/client.png"
import Pesquisa from '../../components/Pesquisa';
import Cliente from "../../img/client.png"

function Login() {
  const [lado, setlado] = useState("35%")
  function trocar(){
    if(lado === "35%"){
      setlado("0")
    }
    else{
      setlado("35%")
    }
  }
  return (
    <div className="initial">
      <div className='login'>
        <div className='placa' style={{marginLeft:lado}}>
          <button onClick={() => trocar()}>Trocar</button>
        </div>
        <div className='lado-direto'>
          <p>LOGIN</p>
          <div className='entrada'>
            <img alt='user' src={Cliente}></img>
            <input placeholder='Usuário'></input>
          </div>
        </div>
        <div className='lado-esquerdo'></div>
      </div>
    </div>
  );
}

export default Login;
