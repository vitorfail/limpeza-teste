import { useContext } from "react"
import "./index.css"
import { Context } from "../../Provider"
import Erro from "../../img/erro.png"
import { useHistory } from 'react-router-dom';
export default function PopupAvisoConexao(){
    const {popup_conexao, setpopup_conexao} = useContext(Context)
    const history = useHistory()
    function exit(){
        setpopup_conexao(false)
        localStorage.removeItem("token_jwt")
        history.push("/login")
    }
    return(
        <div id="erro" className={popup_conexao?"popup show": "popup"} >
            <div className={popup_conexao? "modal show": "modal"} >
                <img alt="err" src={Erro} ></img>
                <p>Houve Algúm problema na conexão. Verifique sua internet e tente denovo</p>
                <button onClick={() => exit()}>Voltar</button>
            </div>
        </div>
    )
}