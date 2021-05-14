import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';
import { getGift } from '../helpers/getGifs'

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGift( category )
            //img => setImages(img) recibe un json que se agregaran a la imagen
            .then(setImages);
    }, [ category ])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map( (img) => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ))}
            </div>
        </>
    )
}
