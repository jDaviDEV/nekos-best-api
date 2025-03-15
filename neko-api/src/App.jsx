import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';
import { useAddToAlbum } from './hooks/useAddToAlbum';


function App() {
  const category = ["neko","husbando"];
  const [url,setUrl] = useState("https://nekos.best/api/v2/husbando");
  const data = useFetch(url);
  const { album, addToAlbum } = useAddToAlbum();

  const onButtonClick = () => {
    setUrl("https://nekos.best/api/v2/"+ category[Math.floor(Math.random()*2)])
  }

  const handleAddToAlbum = () => {
    if (!data.isLoading) {
      addToAlbum({
        artist_name: data.results[0].artist_name,
        url: data.results[0].url
      });
    }
  };


  return (
    <>
      <div>
        <button onClick={onButtonClick}>Randomizar imagen</button>
        {data.isLoading ? (<></>) : (<h1>artist name: {data.results[0].artist_name}</h1>)}
        {data.isLoading ? (<></>) : (<img src={data.results[0].url} width="500px" height="500px"/>)}
        <br />
        <br />
        <br />
        <button onClick={handleAddToAlbum}>Añadir al Album</button>
      </div>


      <div>
        <h1>Album</h1>
        <div>
          {album.map((image, index) => (
            <div key={index}>
              <h3>{image.artist_name}</h3>
              <img src={image.url} width="500px" height="500px" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
