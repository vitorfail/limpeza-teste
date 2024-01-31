import "./index.css"
import Lupa from "../../img/lupa.png"
import Axios from "../../Axios"
import { useContext, useState } from "react"
import { Context } from "../../Provider"
import { useHistory } from "react-router-dom"
import Lista from "../../img/list.png"
export default function Pesquisa(){
    const history = useHistory()
    const {setpopup_conexao, setpesquisa, setpopup_ordem, setordem, setloading} = useContext(Context)
    const [valor_pesquisa, setvalor_pesquisa] = useState("")
    const [show_menu, setshow_menu]= useState(false)
    const [option, setoption] = useState("nome")
    function pesquisa(){
        setloading(true)
        Axios.post("api/pesquisa", {valor:valor_pesquisa, op: option})
        .then(res => {
            setloading(false)
            console.log(res.data.result)
            if(res.data.result.status === 0){
                setpopup_conexao(true)
              }
              if(res.data.result.status === "ok"){
                setpesquisa(res.data.result.result)
                history.push("/pesquisa")
              }
        })
        .catch( err => {
            console.log(err)
            setpopup_conexao(true)
        })

    }
    function abrirpopup(){
        setloading(true)
        Axios.post("api/ordem")
        .then( res => {
            setloading(false)
            if(res.data.result.status === "ok"){
                setordem(res.data.result.result)
                setpopup_ordem(true)
            }
            else{

            }
        })
        .catch( err => {
            setloading(false)
            setpopup_conexao(true)
        })
    }
    return(
        <div className="pesquisa">
            <div className={show_menu?"mini-menu show": "mini-menu"}>
                <p onClick={() => history.push("/")}>Home</p>
                <p onClick={() => history.push("/cadastro")}>Cadastro</p>
                <p onClick={() => history.push("/")}>Sair</p>
            </div>
            <img onClick={() => show_menu?setshow_menu(false): setshow_menu(true)} className="lista" alt="lista" src={Lista}></img>
            <div className="input">
                <select onChange={(e) => setoption(e.target.value)}>
                    <option value="nome" >Nome</option>
                    <option value="email">Email</option>
                    <option value="numero">Numero</option>
                </select>
                <input onChange={(e) => setvalor_pesquisa(e.target.value)} placeholder="Pesquisa"></input>
                <button onClick={() => pesquisa()}>
                    <img src={Lupa} alt="pesquisa"></img>
                </button>
            </div>
            <button className="visita" onClick={() => abrirpopup()}></button>
        </div>
    )
}