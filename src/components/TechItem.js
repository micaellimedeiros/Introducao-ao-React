import React from 'react';
import propTypes from 'prop-types';

function TechItem({ tech, onDelete}){
  return(
    <li>
        {tech}
        <button onClick={onDelete} 
        type="button">Remover</button>
    </li>
  )
}

TechItem.defaultProps = {
  tech: 'Oculto',
}

TechItem.propTypes = {
  tech: propTypes.string,
  onDelete: propTypes.func.isRequired
}
export default TechItem;