import React from 'react'

const GifGridItem = ({ id,title,url }) => {
    return (
        <div className="card animate__animated animate__fadeIn animate__delay-1s">
           <li key = {id}> 
           <img src={ url } alt={ title } /></li> 
           <p>{ title }</p> 
        </div>
    )
}

export default GifGridItem
