import { useState,useEffect } from 'react'
import { getGifs } from '../helper/getGifs'


export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [state, setstate] = useState({
        data: [],
        loading: true
      });

      useEffect( ()=>{
        getGifs(category)
        .then (imgs =>{
            setstate({
                data: imgs,
                loading:false    
            });
        });
    },[ category ])

return state //data:[], loading: true;
    }


