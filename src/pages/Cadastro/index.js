import './index.css';
import Sidebar from "../../components/Sidebar/index"
import { useContext,useState } from 'react';
import Pesquisa from '../../components/Pesquisa';
import Axios from '../../Axios';
import { Context } from '../../Provider';
import PopupAviso from "../../popups/PopupAviso"
import PopupConexao from "../../popups/PopupConexao"
import PopupOk from '../../popups/PopupOk';
import Popup from '../../popups/Popup';
import PopupOrdem from '../../popups/PopupOrdem';

function Cadastro() {
  const [nome, setnome] = useState("")
  const [pos_x, setpos_x] = useState(0)
  const [pos_y, setpos_y] = useState(0)
  const [email, setemail] = useState("")
  const [telefone, settelefone] = useState()
  const {setpopup_ok, setpopup, setpopup_conexao, setloading} = useContext(Context)

  function cadastrar(){
    if(nome=== "" &&pos_x ===0 &&pos_y===0 && email === "" && telefone === ""){

    }
    else{
      setloading(true)
      Axios.post("/api/cadastro_cliente", {nome:nome, email:email ,telefone:telefone, x:-parseInt(pos_x, 10), y:-parseInt(pos_y, 10)})
      .then(res => {
        setloading(false)
        if(res.data.result.status === "EXIST"){
          setpopup_ok(true)
        }
        else{
          setpopup(true)
        }
      })
      .catch(err =>{
        setloading(false)
        setpopup_conexao(true)
      })
    }
  }
  function position(e){
    let valorFormatado = e.replace(/[^-0-9]/g, '');
    valorFormatado = valorFormatado.replace(/^(-?)0+(\d)/, '$1$2');
    return  valorFormatado
  }

  function numero(value){
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value  
  }
  return (
    <div className="App">
      <PopupAviso></PopupAviso>
      <PopupConexao></PopupConexao>
      <PopupOk></PopupOk>
      <Popup></Popup>
      <PopupOrdem></PopupOrdem>
      <Sidebar></Sidebar>
      <div className='content'>
        <Pesquisa></Pesquisa>
        <div className='cad'>
          <div className='form'>
            <div className='cadastro-input'>
              <p>Nome</p>
              <input onChange={(e) => setnome(e.target.value)} ></input>
            </div>
            <div className='cadastro-input'>
              <p>Email</p>
              <input onChange={(e) => setemail(e.target.value)} ></input>
            </div>
            <div className='cadastro-input'>
              <p>Telefone</p>
              <input value={telefone} onChange={(e) => settelefone(numero(e.target.value))}></input>
            </div>
            <div className='positions'>
              <div className='cadastro-input'>
                <p>Posicão X</p>
                <input value={pos_x} onChange={(e) => setpos_x(position(e.target.value))} ></input>
              </div>
              <div className='cadastro-input'>
                <p>Posição Y</p>
                <input value={pos_y} onChange={(e) => setpos_y(position(e.target.value))} ></input>
              </div>
            </div>
            <button onClick={() => cadastrar()} >Cadastro</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
