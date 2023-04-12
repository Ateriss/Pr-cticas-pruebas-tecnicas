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
    <section className='flex  min-w-360 max-w-1440 flex-wrap justify-center align-center'>
    { characters.map((character, index) => (
    <div key={index} className='w-200 h-200 m-2 rounded-md border-2'>
      <img src={character.image} alt={`imagen de ${character.name}`} className='w-full rounded-md'  />
      <h1 className="uppercase font-medium mt-15 text-xl p-2 pl-1" >{character.name}</h1>
    </div>
    ))}
    </section>
  )
}



export default App
