import './index.css';
import Sidebar from "../../components/Sidebar/index"
import { useEffect, useState } from 'react';
import Cli from "../../img/client.png"
import Pesquisa from '../../components/Pesquisa';
import Cliente from "../../img/client.png"
import Cadeado from "../../img/senha.png"

function Login() {
  const titulo_log= "Login"
  const titulo_reg= "Cadastrar"
  const log = "Caso já tenha uma conta você pode efetuar seu login para iniciar sua sessão"
  const reg = "Se você ainda não tem uma conta pode criar a sua. Creie um nome de usuário e uma senha. "
  const [lado, setlado] = useState("35%")
  const [ titulo, settitulo] = useState(titulo_reg)
  const [ info, setinfo] = useState(reg)

  function trocar(){
    if(lado === "35%"){
      setlado("0")
      setinfo(log)
      settitulo(titulo_log)

    }
    else{
      setlado("35%")
      setinfo(reg)
      settitulo(titulo_reg)
    }
  }
  return (
    <div className="initial">
      <div className='login'>
        <div className='placa' style={{marginLeft:lado}}>
          <p>{titulo}</p>
          <h4>{info}</h4>

          <button onClick={() => trocar()}>{titulo} </button>
        </div>
        <div className='lado-direto'>
          <p>LOGIN</p>
          <div className='entrada'>
            <img alt='user' src={Cliente}></img>
            <input placeholder='Usuário'></input>
          </div>
          <div className='entrada'>
            <img alt='senha' src={Cadeado}></img>
            <input type="password" placeholder='Senha'></input>
          </div>
          <button>ACESSAR</button>
        </div>
        <div className='lado-esquerdo'>
        <p>CADASTRAR</p>
          <div className='entrada'>
            <img alt='user' src={Cliente}></img>
            <input placeholder='Usuário'></input>
          </div>
          <div className='entrada'>
            <img alt='senha' src={Cadeado}></img>
            <input type="password" placeholder='Senha'></input>
          </div>
          <div className='entrada'>
            <img alt='senha' src={Cadeado}></img>
            <input type="password" placeholder='Confirmar senha'></input>
          </div>
          <button>REGISTRAR</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
