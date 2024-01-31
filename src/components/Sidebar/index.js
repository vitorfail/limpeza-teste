import "./index.css"
import Logo from "../../img/icon.png"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
export default function Sidebar(){
    const history = useHistory()
    return(
        <div className="sidebar">
            <div className="logo">
                <p>Limpeza</p>
            </div>
            <div className="ops">
                <div className="li">
                    <div className="icon"></div>
                    <p onClick={() =>history.push("/")}>Home</p>
                </div>
                <div className="li">
                    <div className="icon"></div>
                    <p onClick={() =>history.push("/cadastro")}>Cadastrar</p>
                </div>
                <div className="li">
                    <div className="icon"></div>
                    <p>Localização</p>
                </div>
                <div className="li">
                    <div className="icon"></div>
                    <p>Exit</p>
                </div>
            </div>
        </div>
    )
}