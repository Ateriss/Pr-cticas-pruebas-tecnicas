// Usando 2 APIs: recupera un hecho aleatroio de gatos y muestra una imagen de un gato con la primera palabra del hecho
// - Facts remdom: https://catfact.ninja/fact
// - imagen ramrom: https://cataas.com/cat/says/hello
//    -endpoint para imagen: `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
//const EndpointImgUrl = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const EndpointRandomFact = 'https://catfact.ninja/fact'
function App() {
  const [facts, setFacts] = useState("");
  const [img, setImg] = useState("");
  useEffect(() => {
// CON AXIOS 
    async function getFact(){
      try{
        const factResponse = await axios.get(EndpointRandomFact);
        const factData = factResponse.data.fact;
        setFacts(factData);

        const firstWord = factData.split(" ", 1).toString();
        const ImgResponse = await axios.get(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        const imgUrl = `https://cataas.com/${ImgResponse.data.url}`;
        setImg(imgUrl)


      } catch(error){
        console.log(error)
      }
    }
    getFact();
    }, []);

 return (
    <main className='min-w-360 max-w-1440 flex flex-col justify-center items-center m-3'>
      <h1 className='uppercase font-bold text-pink '>App de gatitos</h1>
      <div>
      <p>{facts}</p>
      <img src={img} alt="cats" />
      </div>
    </main>
  )
}
export default App
