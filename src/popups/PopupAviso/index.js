import { useContext } from "react"
import "./index.css"
import { Context } from "../../Provider"
import Erro from "../../img/erro.png"
export default function PopupAviso(){
    const {popup_aviso, setpopup_aviso} = useContext(Context)
    return(
        <div id="erro" className={popup_aviso?"popup show": "popup"} >
            <div className="modal">
                <img alt="err" src={Erro} ></img>
                <p>Houve Algúm problema na conexão. Não foi possivel cadastrar esse usuário. Tente denovo mais tarde</p>
                <button onClick={() => setpopup_aviso(false)}>Ok</button>
            </div>
        </div>
    )
}