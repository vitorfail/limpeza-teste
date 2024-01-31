import { useContext } from "react"
import "./index.css"
import { Context } from "../../Provider"
export default function PopupOrdem(){
    const {popup_ordem, setpopup_ordem, ordem} = useContext(Context)
    return(
        <div id="erro" className={popup_ordem?"popup show": "popup"} >
            <div id="ordem" className={popup_ordem?"modal show": "modal"}>
                <div className='resultado-pesquisa'>
                    <div className='resultado'>
                        <div className='titulos'>
                        <p className='nome'>Nome</p>
                        <p className='emal'>Distancia</p>
                        </div>
                        {ordem.map((item, key) =>(
                        <div key={key} className='linha'>
                            <p className='nome'>{item.nome}</p>
                            <p className='emal'>{item.dist}</p>
                        </div>
                        ))}
                    </div>
                </div>

                <button onClick={() => setpopup_ordem(false)}>Fechar</button>
            </div>
        </div>
    )
}