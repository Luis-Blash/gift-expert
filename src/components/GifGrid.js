import React from 'react'
import { useFetchGift } from '../hooks/useFetchGift'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const  {data:images,loading} = useFetchGift(category);

    return (
        <>
            <h3>{category}</h3>
            { loading && <p className="animate__animated animate__heartBeat">Cargando..</p>}
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
