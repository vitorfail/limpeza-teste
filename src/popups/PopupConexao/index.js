import { useContext } from "react"
import "./index.css"
import { Context } from "../../Provider"
import Erro from "../../img/erro.png"
import { useHistory } from 'react-router-dom';
export default function PopupAvisoConexao(){
    const {popup_conexao, setpopup_conexao} = useContext(Context)
    const history = useHistory()
    function voltar(){
        setpopup_conexao(false)
        history.push("/")
    }
    return(
        <div id="erro" className={popup_conexao?"popup show": "popup"} >
            <div className={popup_conexao? "modal show": "modal"} >
                <img alt="err" src={Erro} ></img>
                <p>Houve Algúm problema na conexão. Verifique sua internet e tente denovo</p>
                <button onClick={() => voltar()}>Voltar</button>
            </div>
        </div>
    )
}