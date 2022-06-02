import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //custom hook
    const { data:images, loading} = useFetchGifs( category );


    return (
        <>
        <h3 className='animate__animated animate__fadeInDown'>{category}</h3>

        { loading && <p className='animate__animated flash'>Cargando...</p> }

        <div className='card-grid'>
            {
                images.map( img => (
                    // <li key={ id }>{ title }</li>
                    <GifGridItem 
                        key={img.id }
                        {...img}
                    />
                ))
            }
        </div>
    </>
  )
}
