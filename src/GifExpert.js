import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpert = () => {

    const [categories, setCategories] = useState(['one punch', 'Samurai X', 'Black clover'])

    // const handleAdd = ()=> {
    //     setCategories([...categories, 'Hunter x hunter']);
    // }

    return (
        <div>
            <h2>GiftExpert</h2>
            <hr/>
            <AddCategory />
            <ol>
                {categories.map((categoria)=> {
                    return <li key={categoria}>{categoria}</li>
                })}
            </ol>
        </div>
    )
}