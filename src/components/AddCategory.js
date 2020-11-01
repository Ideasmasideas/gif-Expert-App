import React,{ useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ( { setCategories } ) => {
    const [inputValue, setInputValue] = useState('')


    //Funcion que nos sirve para poner en el campo de texto lo que esta 
    //escribiendo el usuario
    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    //Envia la informacion que esta en el campo de texto
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cats => [inputValue,...cats]);
            setInputValue('');

        }
    }
    return (
        <form onSubmit={ handleSubmit }>
          <input
            type="text"
            value={ inputValue } 
            onChange={ handleInputChange }

          />
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
