import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpert = () => {

    const [categories, setCategories] = useState(['One Punch'])

    return (
        <div>
            <h2>GiftExpert</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <ol>
                {categories.map((category)=>  
                    <GifGrid 
                    key={category}
                    category={category}
                    />
                )}
            </ol>
        </div>
    )
}