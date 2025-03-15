import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';

function App() {  
  const url = "https://nekos.best/api/v2/husbando";
  const data = useFetch(url);

  return (
    <>
      <div>
        {data.isLoading ? (<></>) : (<h1>artist name: {data.results[0].artist_name}</h1>)}
        {data.isLoading ? (<></>) : (<img src={data.results[0].url}/>)}
      </div>
      
    </>
  )
}

export default App
