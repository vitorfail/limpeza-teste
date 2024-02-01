import { useContext } from "react"
import "./index.css"
import { Context } from "../../Provider"
export default function PopupOrdem(){
    const {popup_ordem, setpopup_ordem, ordem} = useContext(Context)
    return(
        <div  className={popup_ordem?"popup show": "popup"} >
            <div id="ordem" className={popup_ordem?"modal show": "modal"}>
                <p className="titulo">Ordem de visita de clientes com base na distância</p>
                <div className='resultado-pesquisa'>
                    <div className='resultado'>
                        <div className='titulos'>
                        <p className='nome'>Nome</p>
                        <p className='emal'>Distancia</p>
                        <p className='emal'>Visita</p>
                        </div>
                        <div className="roll">
                            {ordem.map((item, key) =>(
                                <div id={key%2 ===0?"preto": "branco"} key={key} className='linha'>
                                    <p className='nome'>{item.nome}</p>
                                    <p className='emal'>{Math.round(item.dist)}</p>
                                    <p className='emal'>{(key+1)+"º"}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <button onClick={() => setpopup_ordem(false)}>Fechar</button>
            </div>
        </div>
    )
}