import './index.css';
import Sidebar from "../../components/Sidebar/index"
import { useContext,useEffect,useState } from 'react';
import Pesquisa from '../../components/Pesquisa';
import Axios from '../../Axios';
import { Context } from '../../Provider';
import PopupAviso from "../../popups/PopupAviso"
import PopupConexao from "../../popups/PopupConexao"
import PopupOk from '../../popups/PopupOk';
import Popup from '../../popups/Popup';
import PopupOrdem from '../../popups/PopupOrdem';

function Pesquisa_Resultados() {
  const {pesquisa} = useContext(Context)
  const [qtd, setqtd] = useState(0) 
  useEffect(() => {
    if(pesquisa.length> 0){
      console.log(pesquisa)
      setqtd(pesquisa.length)
    }
    else{
      setqtd("Nenhum")
    }
  }, [pesquisa.length,qtd])
  return (
    <div className="App">
      <PopupAviso></PopupAviso>
      <PopupConexao></PopupConexao>
      <PopupOk></PopupOk>
      <Popup></Popup>
      <PopupOrdem></PopupOrdem>
      <Sidebar></Sidebar>
      <div className='content'>
        <Pesquisa></Pesquisa>
        <div className='resultado-pesquisa'>
          <p className='qtd'>{qtd + ((qtd==0)?" cliente encontrado": " clientes encontrados")}</p>
          <div className='resultado'>
            <div className='titulos'>
              <p className='nome'>Nome</p>
              <p className='emal'>Email</p>
              <p className='numero'>Numero</p>
            </div>
            {pesquisa.map((item, key) =>(
              <div key={key} className='linha'>
                <p className='nome'>{item.nome}</p>
                <p className='emal'>{item.email}</p>
                <p className='numero'>{item.numero}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pesquisa_Resultados;
