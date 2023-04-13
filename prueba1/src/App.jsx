// llama a una API y solo muestra el nombre y la imagen


import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(()  => {
  async function getCharacter(){
    try{
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      const charactersData = response.data.results.map(character => ({...character}));
      setCharacters(charactersData);
    } catch(error) {
      console.log(error);
    }

  }
  getCharacter();
  }, []);

  return (
    <main>
            <h1 className='m-5 min-w-360 max-w-1440 uppercase font-bold text-center'>Rick and morty app</h1>
            <section className='flex  min-w-360 max-w-1440 flex-wrap justify-center align-center'>
                { characters.map((character, index) => (
                <div key={index} className='w-200 h-200 m-2 rounded-md border-2 hover:shadow-2xl hover:scale-125 ease-in-out transition-all bg-white'> 
                  <img src={character.image} alt={`imagen de ${character.name}`} className='w-full rounded-md'  />
                  <h1 className="uppercase font-medium mt-15 text-xl p-2 pl-1" >{character.name}</h1>
                </div>
                ))}
            </section>
    </main>
  )
}



export default App
