import React from 'react'
import { v4 as uuid } from 'uuid';
import CardImg from './CardImg'


 function CardComponent({filterPokemon, bishnuDb}) {


  return (

  <div className='main'>
           
    {
      filterPokemon.map((pokeData)=>
      <CardImg 
              key={uuid()}
              id={pokeData.id}
              name={pokeData.name}
              image={pokeData.sprites.other.dream_world.front_default}
              type={pokeData.types[0].type.name}
              height={pokeData.height}
              like={bishnuDb[pokeData.name]? bishnuDb[pokeData.name].likes : 0 }
              stat1={pokeData.stats[0].stat.name}
              stat2={pokeData.stats[1].stat.name}
              stat3={pokeData.stats[2].stat.name}
              stat4={pokeData.stats[3].stat.name}
              stat5={pokeData.stats[4].stat.name}
              stat6={pokeData.stats[5].stat.name}
              bs1={pokeData.stats[0].base_stat}
              bs2={pokeData.stats[1].base_stat}
              bs3={pokeData.stats[2].base_stat}
              bs4={pokeData.stats[3].base_stat}
              bs5={pokeData.stats[4].base_stat}
              bs6={pokeData.stats[5].base_stat}
      />
      
      )}


  </div> )
}

export default CardComponent


