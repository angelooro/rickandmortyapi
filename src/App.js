 import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar'
import Characters from './components/Characters';

function App() {
  
  const [characters, setCharacters] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {
    fetch(url)
    .then(Response => Response.json())
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchCharacters(url);
  }, [])
  return (
    <>
       <Navbar brand="Rick and Morty" />
        
     <div className='container mt-5'>
     <Characters  characters= {characters} />
     </div>
    </>

  );
}

export default App;
