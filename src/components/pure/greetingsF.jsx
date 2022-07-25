import React from 'react'
import PropTypes from 'prop-types'


/* USO DE PROPS EN UN COMPONENTE FUNCIONAL */


function greetingsF(props) {
  return (
    <div>
    <h1>¡HOLA {props.name} desde componente funcional</h1>
    
    
    </div>
  )
}

greetingsF.propTypes = {name:PropTypes.string}

export default greetingsF
