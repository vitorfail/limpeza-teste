import "./index.css"
import Lupa from "../../img/lupa.png"
import Axios from "../../Axios"
import { useContext, useState } from "react"
import { Context } from "../../Provider"
import { useHistory } from "react-router-dom"
export default function Pesquisa(){
    const history = useHistory()
    const {setpopup_conexao, setpesquisa, setpopup_ordem, setordem} = useContext(Context)
    const [valor_pesquisa, setvalor_pesquisa] = useState("")
    const [option, setoption] = useState("nome")
    function pesquisa(){
        Axios.post("api/pesquisa", {valor:valor_pesquisa, op: option})
        .then(res => {
            if(res.data.result.status === 0){
                setpopup_conexao(true)
              }
              if(res.data.result.status === "ok"){
                console.log(res.data.result.result)
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
        Axios.post("api/ordem")
        .then( res => {
            if(res.data.result.status == "ok"){
                setordem(res.data.result.result)
                setpopup_ordem(true)
            }
            else{

            }
        })
        .catch( err => {
            setpopup_conexao(true)
        })
    }
    return(
        <div className="pesquisa">
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
            <button className="visita" onClick={() => abrirpopup()}>Ordem de Visita</button>
        </div>
    )
}