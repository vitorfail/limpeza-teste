import "./index.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
export default function Sidebar(){
    const history = useHistory()
    function exit(){
        localStorage.removeItem("token_jwt")
        history.push("/login")
    }
    return(
        <div className="sidebar">
            <div className="logo">
                <p>Limpeza</p>
            </div>
            <div className="ops">
                <div onClick={() =>history.push("/")}className="li">
                    <div className="icon"></div>
                    <p >Home</p>
                </div>
                <div  onClick={() =>history.push("/cadastro")}className="li">
                    <div className="icon"></div>
                    <p >Cadastrar</p>
                </div>
                <div onClick={() =>exit()} className="li">
                    <div className="icon"></div>
                    <p>Exit</p>
                </div>
            </div>
        </div>
    )
}