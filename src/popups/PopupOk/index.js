import { useContext } from "react"
import "./index.css"
import { Context } from "../../Provider"
import Erro from "../../img/erro.png"
export default function PopupOk(){
    const {popup_ok, setpopup_ok} = useContext(Context)
    return(
        <div id="erro" className={popup_ok?"popup show": "popup"} >
            <div className={popup_ok?"modal show": "modal"}>
                <img alt="err" src={Erro} ></img>
                <p>Esse Cleinte já está cadsatrado</p>
                <button onClick={() => setpopup_ok(false)}>Ok</button>
            </div>
        </div>
    )
}