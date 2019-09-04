import React, { Component }  from 'react'
import IngredientsList from './IngredientsList'
import Instructions from './Instructions'

const Recipe = ({ name, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>

        <IngredientsList list={ingredients} />
        <Instructions title="Cooking Instructions"
            steps={steps} />
    </section>
    
export default Recipe