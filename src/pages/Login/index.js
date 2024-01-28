import './index.css';
import { useState } from 'react';
import Cliente from "../../img/client.png"
import Cadeado from "../../img/senha.png"
import Axios from '../../Axios';
import { Url } from '../../Server';

function Login() {
  const titulo_log= "Login"
  const titulo_reg= "Cadastrar"
  const log = "Caso já tenha uma conta você pode efetuar seu login para iniciar sua sessão"
  const reg = "Se você ainda não tem uma conta pode criar a sua. Creie um nome de usuário e uma senha. "
  const erro_senha_user = "Senha ou usuário errado"
  const erro_exist = "Usuário já existe"
  const [lado, setlado] = useState("35%")
  const [ titulo, settitulo] = useState(titulo_reg)
  const [ info, setinfo] = useState(reg)
  const [mensagem, setmensagem] = useState("")
  const [loading, setloading] = useState(false)

  const [user, setuser] = useState("")
  const [senha, setsenha] = useState("")
  const [senha2, setsenha2] = useState("")

  const [aviso_senha, setaviso_senha] = useState(false)
  const [aviso_user, setaviso_user] = useState(false)

  const [senha_tamanho, setsenha_tamanho] = useState(false)
  const [senha_numero, setsenha_numero] = useState(false)
  const [senha_diferente, setsenha_diferente] = useState(false)

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
  function login(){
    setaviso_senha(false)
    setaviso_user(false)
    if(user === "" || senha ===""){
      if(senha === ""){
        setaviso_senha(true)
      }
      if(user === ""){
        setaviso_user(true)
      }
    }
    else{
      setloading(true)
      setmensagem(erro_exist)
    }
  }
  function senha_1(e){
    setsenha(e)
    if(e != ""){
      if(e.length < 9){
        setsenha_tamanho(true)
      }
      else{
        setsenha_tamanho(false)
      }
      if(/\d/.test(e) === false){
        setsenha_numero(true)
      }
      else{
        setsenha_numero(false)
      }
      if(senha !== senha2){
        setsenha_diferente(true)
      }
      else{
        setsenha_diferente(false)
      }
    }
    else{
      setsenha_tamanho(false)
      setsenha_numero(false)
      setsenha_diferente(false)
    }
  }
  function senha_2(e){
    setsenha2(e)
    console.log(senha + ' ' + senha2)
    if(senha !== e){
      setsenha_diferente(true)
    }
    else{
      setsenha_diferente(false)
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
          <div className={loading?'loading show': 'loading' }>
            <div className="lds-grid">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <p>LOGIN</p>
          <h3 className={ mensagem!==""?"mensagem show":"mensagem"} >{mensagem}</h3>
          <div className='entrada'>
            <img alt='user' src={Cliente}></img>
            <input onChange={(e) => setuser(e.target.value)} placeholder='Usuário'></input>
          </div>
          <p className={aviso_user?"aviso show": "aviso"} >Insira seu usuário</p>
          <div className='entrada'>
            <img alt='senha' src={Cadeado}></img>
            <input onChange={(e) => setsenha(e.target.value)} type="password" placeholder='Senha'></input>
          </div>
          <p className={aviso_senha?"aviso show": "aviso"}>Insira sua senha</p>
          <button onClick={() => login()}>ACESSAR</button>
        </div>
        <div className='lado-esquerdo'>
        <p>CADASTRAR</p>
          <div className='entrada'>
            <img alt='user' src={Cliente}></img>
            <input placeholder='Usuário'></input>
          </div>
          <p>Insira um usuário</p>
          <div className='entrada'>
            <img alt='senha' src={Cadeado}></img>
            <input onChange={(e) => senha_1(e.target.value)} type="password" placeholder='Senha'></input>
          </div>
          <div className='entrada'>
            <img alt='senha' src={Cadeado}></img>
            <input onChange={(e) => senha_2(e.target.value)} type="password" placeholder='Confirmar senha'></input>
          </div>

          <p className={senha_tamanho?'avisos show':'avisos'}><strong>X</strong> A senha deve ter no minimo 9 caracteres</p>
          <p className={senha_numero?'avisos show':'avisos'}><strong>X</strong>A senha deve tem pelo menos um número</p>
          <p className={senha_diferente?'avisos show':'avisos'}><strong>X</strong>As senhas estão diferentes</p>
          <button>REGISTRAR</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
