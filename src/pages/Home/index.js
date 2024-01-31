import './index.css';
import Sidebar from "../../components/Sidebar/index"
import { useContext, useEffect, useState } from 'react';
import Cli from "../../img/client.png"
import Pesquisa from '../../components/Pesquisa';
import Axios from '../../Axios';
import { Context } from '../../Provider';
import PopupAviso from '../../popups/PopupAviso';
import PopupConexao from '../../popups/PopupConexao';
import PopupOrdem from '../../popups/PopupOrdem';


function Home() {
  const [cliente, setclientes] = useState(13)
  const [cliente_prox, setcliente_prox] = useState("José")
  const [cliente_long, setcliente_log] = useState("Gilberto")
  const [maior_ponto,setmaior_ponto] = useState(200)
  const {setpopup_conexao, setloading} = useContext(Context)
  const [pontos, setpontos] = useState([])

  useEffect( () =>{

    async function inicio(){
      setloading(true)
      await Axios.post("api/home").then(
        res =>{
          setloading(false)
          if(res.data.result.status === 0){
            setpopup_conexao(true)
          }
          if(res.data.result.status === "ok"){
            setclientes(res.data.result.result.total)
            setcliente_prox(res.data.result.result.cliente_prox)
            setcliente_log(res.data.result.result.cliente_long)
            setpontos(res.data.result.result.pontos)
            var lista_pontos = [
              Math.abs(res.data.result.result.x1) , 
              Math.abs(res.data.result.result.x2), 
              Math.abs(res.data.result.result.y1), 
              Math.abs(res.data.result.result.y2) ]
              if(Math.max(...lista_pontos) < 100 ){
                setmaior_ponto(100)
              }
              else{
                setmaior_ponto(Math.max(...lista_pontos))
              }

            const percentageA = 40;
            const percentageB = 60;
        
            // Calcula o ângulo com base nas porcentagens
            const angleA = (percentageA / 100) * 360;
            const angleB = (percentageB / 100) * 360;
        
            // Atualiza o tamanho das fatias
            const sliceA = document.getElementById('slicea');
            sliceA.setAttribute('d', calculateSlicePath(0, angleA));
        
            const sliceB = document.getElementById('sliceb');
            sliceB.setAttribute('d', calculateSlicePath(angleA, angleB));
        
          }
        }
      ).catch(err => {
        setloading(false)
        setpopup_conexao(true)
      })
  
    }
  // Função para calcular o caminho da fatia
  inicio()
  }, [])
  const calculateSlicePath = (startAngle, endAngle) => {
    const radius = 50;
    const startX = Math.cos((startAngle - 90) * (Math.PI / 180)) * radius;
    const startY = Math.sin((startAngle - 90) * (Math.PI / 180)) * radius;
    const endX = Math.cos((endAngle - 90) * (Math.PI / 180)) * radius;
    const endY = Math.sin((endAngle - 90) * (Math.PI / 180)) * radius;
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    return `M0,0 L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;  }
  return (
    <div className="App">
      <PopupAviso></PopupAviso>
      <PopupConexao></PopupConexao>
      <PopupOrdem></PopupOrdem>
      <Sidebar></Sidebar>
      <div className='content'>
        <Pesquisa></Pesquisa>
        <div className='cards'>
          <div className='card'>
            <div className='titulo'>
              <p>{cliente}</p>
              <p>Clientes</p>
            </div>
            <img alt='img' src={Cli}></img>
          </div>
          <div className='card'>
            <div className='titulo'>
              <p>{cliente_prox}</p>
              <p>É o cliente mais próximo</p>
            </div>
            <img alt='img' src={Cli}></img>
          </div>
          <div className='card'>
            <div className='titulo'>
              <p>{cliente_long}</p>
              <p>É o cliente mais distante</p>
            </div>
            <img alt='img' src={Cli}></img>
          </div>

        </div>
        <div className='analise'>
          <div className='mapa'>
            <p>Distribuição de clientes pela distância</p>
            <svg className="chart" width={maior_ponto} height={maior_ponto} viewBox={(maior_ponto*-1) + " "+(maior_ponto*-1)+" "+(maior_ponto*2)+" "+(maior_ponto*2)} xmlns="http://www.w3.org/2000/svg">
              <line x1={maior_ponto*-1} y1="0" x2={maior_ponto} y2="0"></line>
              <line x1="0" y1={maior_ponto*-1} x2="0" y2={maior_ponto}></line>
              
              <foreignObject x={maior_ponto*-1} y={maior_ponto*-1} width="100%" height="100%" viewBox={(maior_ponto*-1) + " "+(maior_ponto*-1)+" "+(maior_ponto*2)+" "+(maior_ponto*2)}>
                <svg width="100%" height="100%" viewBox="-100 -50 200 100">
                  <line className='fina' x1= "-100" y1="20" x2="100" y2="20"></line>
                  <line className='fina' x1="-100" y1="40" x2="100" y2="40"></line>
                  <line className='fina' x1="-100" y1="60" x2="100" y2="60"></line>
                  <line className='fina' x1="-100" y1="80" x2="100" y2="80"></line>
                  <line className='fina' x1="-100" y1="100" x2="100" y2="100"></line>
                  <line className='fina' x1="-100" y1="-20" x2="100" y2="-20"></line>
                  <line className='fina' x1="-100" y1="-40" x2="100" y2="-40"></line>
                  <line className='fina' x1="-100" y1="-60" x2="100" y2="-60"></line>
                  <line className='fina' x1="-100" y1="-80" x2="100" y2="-80"></line>
                  <line className='fina' x1="-100" y1="-100" x2="100" y2="-100"></line>

                  <line className='fina' x1="0" y1="-100" x2="0" y2="100"></line>
                  <line className='fina' x1="20" y1="-100" x2="20" y2="100"></line>
                  <line className='fina' x1="40" y1="-100" x2="40" y2="100"></line>
                  <line className='fina' x1="60" y1="-100" x2="60" y2="100"></line>
                  <line className='fina' x1="80" y1="-100" x2="80" y2="100"></line>
                  <line className='fina' x1="100" y1="-100" x2="100" y2="100"></line>
                  <line className='fina' x1="0" y1="-100" x2="0" y2="100"></line>
                  <line className='fina' x1="-20" y1="-100" x2="-20" y2="100"></line>
                  <line className='fina' x1="-40" y1="-100" x2="-40" y2="100"></line>
                  <line className='fina' x1="-60" y1="-100" x2="-60" y2="100"></line>
                  <line className='fina' x1="-80" y1="-100" x2="-80" y2="100"></line>
                  <line className='fina' x1="-100" y1="-100" x2="-100" y2="100"></line>
                </svg>
              </foreignObject>


              <text x="2" y={((maior_ponto/9)*1)*-1}>{Math.round((maior_ponto/9)*1)}</text>
              <text x="2" y={((maior_ponto/9)*3)*-1}>{Math.round((maior_ponto/9)*3)}</text>
              <text x="2" y={((maior_ponto/9)*5)*-1}>{Math.round((maior_ponto/9)*5)}</text>
              <text x="2" y={((maior_ponto/9)*7)*-1}>{Math.round((maior_ponto/9)*7)}</text>
              <text x="210" y={((maior_ponto/9)*9)*-1}>{Math.round((maior_ponto/9)*9)}</text>
              <text x="0" y={(maior_ponto/9)*1}>{Math.round((maior_ponto/9)*1)*-1}</text>
              <text x="0" y={(maior_ponto/9)*3}>{Math.round((maior_ponto/9)*3)*-1}</text>
              <text x="0" y={(maior_ponto/9)*5}>{Math.round((maior_ponto/9)*5)*-1}</text>
              <text x="0" y={(maior_ponto/9)*7}>{Math.round((maior_ponto/9)*7)*-1}</text>
              <text x="0" y={(maior_ponto/9)*9}>{Math.round((maior_ponto/9)*9)*-1}</text>
              {pontos.map((item, key) => (
                     <circle key={key} cx={(item.x).toString()} cy={(item.y).toString()} r="4" />
                  ))}
            </svg>        
          </div>
          <div className='pizza'>
            <p>Resumo</p>
            <div className="chart-container">
              <svg className="chart2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(50,50)">
                  <path className="slice" id="slicea" d="M0,0 L0,-50 A50,50 0 0,1 0,50 Z" fill="#4CAF50"></path>
                  <text className="label" x="0" y="-25">Categoria A</text>

                  <path className="slice" id="sliceb"  d="M0,0 L0,50 A50,50 0 0,1 0,-50 Z" fill="#2196F3"></path>
                  <text className="label" x="0" y="25">Categoria B</text>    
                </g>
              </svg>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
