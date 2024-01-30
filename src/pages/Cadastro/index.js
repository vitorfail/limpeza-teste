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

function Cadastro() {
  const [nome, setnome] = useState("")
  const [pos_x, setpos_x] = useState(0)
  const [pos_y, setpos_y] = useState(0)
  const [email, setemail] = useState("")
  const [telefone, settelefone] = useState()
  const {setpopup_ok, setpopup, setpopup_conexao} = useContext(Context)

  function cadastrar(){
    if(nome=== "" &&pos_x ===0 &&pos_y===0 && email === "" && telefone === ""){

    }
    else{
      Axios.post("/api/cadastro_cliente", {nome:nome, email:email ,telefone:telefone, x:-parseInt(pos_x, 10), y:-parseInt(pos_y, 10)})
      .then(res => {
        if(res.data.result.status === "EXIST"){
          setpopup_ok(true)
        }
        else{
          setpopup(true)
        }
      })
      .catch(err =>{
        setpopup_conexao(true)
      })
    }
  }
  function position(e){
    console.log(e)
    let valorFormatado = e.replace(/[^-0-9]/g, '');

    // Remover zeros à esquerda, exceto o caso em que é um número decimal (ex: "-0.5")
    valorFormatado = valorFormatado.replace(/^(-?)0+(\d)/, '$1$2');

    // Atualizar o valor do input
    return  valorFormatado
  }
  return (
    <div className="App">
      <PopupAviso></PopupAviso>
      <PopupConexao></PopupConexao>
      <PopupOk></PopupOk>
      <Popup></Popup>
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
              <input onChange={(e) => settelefone(e.target.value)}></input>
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
