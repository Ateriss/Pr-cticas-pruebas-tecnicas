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
  const [facts, setFacts] = useState();
  
  useEffect(() => {
// CON AXIOS 
    async function getFact(){
      try{
        const response = await axios.get(EndpointRandomFact);
        const factData = response.data.fact;
        setFacts(factData);
        console.log(factData)
      } catch(error){
        console.log(error)
      }
    }
    getFact();


  }, []);



  

  return (
    <main>
      <h1 className='uppercase font-bold'>App de gatitos</h1>
    </main>
  )
}

export default App
