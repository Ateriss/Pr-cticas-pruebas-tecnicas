// Usando 2 APIs: recupera un hecho aleatroio de gatos y muestra una imagen de un gato con la primera palabra del hecho
// - Facts remdom: https://catfact.ninja/fact
// - imagen ramrom: https://cataas.com/cat/says/hello
//    -endpoint para imagen: `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

import { useEffect, useState } from 'react';


const EndpointRandomFact = 'https://catfact.ninja/fact'
//const EndpointImgUrl = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const preUrl = 'https://cataas.com'

export function App() {
  const [facts, setFacts] = useState();
  const [imgUrl, setIgmUrl] = useState();

  
  useEffect(() => {
// CON FETCH 
    fetch(EndpointRandomFact)
    .then(res => res.json())
    .then(data => {
        const { fact } = data
        setFacts(fact)

        const firstWord = fact.split(" ", 1).join(' ')
        console.log(firstWord)

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const { url } = response
            setIgmUrl(url)
        })

        
    })


}, [])

  return (
    <main className='min-w-360 max-w-1440 flex flex-col justify-center items-center m-3'>
      <h1 className='uppercase font-bold text-pink '>App de gatitos</h1>
      <div className='min-w-350  max-w-500 h-4/5 bg-transparent p-4 rounded-md shadow-xl flex'>
       {facts && <p className='w-full  p-2'>{facts}</p>}
       {imgUrl && <img src={`${preUrl}${imgUrl}`} alt={`image extracted using the first word for ${facts}`} className='w-full rounded-md object-cover'/>}
      </div>
    </main>
  )
}

