import { useContext } from "react"
import "./index.css"
import { Context } from "../../Provider"
import Erro from "../../img/erro.png"
import Ok from "../../img/ok.png"
export default function Popup(){
    const {popup, setpopup} = useContext(Context)
    return(
        <div id="ok" className={popup?"popup show": "popup"} >
            <div className={popup?"modal show": "modal"}>
                <img alt="err" src={Ok} ></img>
                <p>Clinte cadsatrado com sucesso!</p>
                <button onClick={() => setpopup(false)}>Ok</button>
            </div>
        </div>
    )
}