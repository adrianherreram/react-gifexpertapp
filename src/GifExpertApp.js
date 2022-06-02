import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories( [...categories,'HunterxHunter'] ); // forma 1 agregar elemento
    //     // setCategories( cats => [...categories,'HunterxHunter']); // forma 2 agregar elemento
    // }

    return (
        <>
            <h2>GifexpertApp</h2>

            <AddCategory setCategories={ setCategories }/>

            <hr/>
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map( category => (
                        // <li key={ categroy }>{ categroy }</li>
                        <GifGrid 
                        key={category}
                        category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}