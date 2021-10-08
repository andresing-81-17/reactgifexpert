import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItme } from './GifGridItme';

export const GifGrid = ({ category}) => {   

    //const [images, setImages] = useState([]);

    const { data:images, loading }  = useFetchGifs( category );


    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages);
    // }, [ category ]);

    //getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            {/* { loading ? 'Cargando....' : 'Data cargada'} */}
            { loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">              
                {
                    images.map( img => (
                        <GifGridItme 
                            key={ img.id}
                            {...img }                        
                        />
                    ))
                }            
            </div>
        </>
    )
}
