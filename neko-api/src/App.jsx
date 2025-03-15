import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';
import { useAddToAlbum } from './hooks/useAddToAlbum';

function App() {  
  const category = ["neko","husbando"];
  const [url,setUrl] = useState("https://nekos.best/api/v2/husbando");
  const data = useFetch(url);

  const onButtonClick = () => {
    setUrl("https://nekos.best/api/v2/"+ category[Math.floor(Math.random()*2)])
  }
  


  return (
    <>
      <div>
        <button onClick={onButtonClick}>Randomizar imagen</button>
        {data.isLoading ? (<></>) : (<h1>artist name: {data.results[0].artist_name}</h1>)}
        {data.isLoading ? (<></>) : (<img src={data.results[0].url} width="500px" height="500px"/>)}
      </div>

      <div>
        <h1>ALMBUM</h1>
        <button>Añadir img a album</button>
        <ul>
          <li>{}</li>
        </ul>
      </div>

      
    </>
  )
}

export default App
