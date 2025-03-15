import React, { useEffect, useState } from 'react'

export const useFetch = (url="https://nekos.best/api/v2/neko") => {
    const [data,setData] = useState({
        isLoading: true
    });

    const getFetch = async () => {
        setData({...data});
        const response = await fetch(url)
        setData({...await response.json(), isLoading: false})
    }

    useEffect(() => {
      getFetch();
    
      return () => {
      }
    }, [url])
    
  return (data)
}
