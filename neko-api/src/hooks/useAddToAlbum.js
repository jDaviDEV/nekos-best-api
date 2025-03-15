import { useState } from "react"

export const useAddToAlbum = () => {
    const [album, setAlbum] = useState([])

    const addToAlbum = (image) => {
        setAlbum([...album, image])
    };

    return { album, addToAlbum }
};