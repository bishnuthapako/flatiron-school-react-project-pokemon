import React from 'react'

 function CardImg({id,image, like, type,name, key,height,weight,stat1,stat2,stat3,stat4,stat5,stat6,bs1,bs2,bs3,bs4,bs5,bs6}) {


  return (
    
    <div className='pokedex-grid'>
            <div className='pokemon-card'>
                <img src={image} alt={name} className="pokemon-img" />
                <div className='pokeman-card-inside'>
                      <h3 style={{textTransform:"capitalize"}}>{name}</h3>
                      <div>#{id}</div>
                        <button style={{fontWight:"bold"}}>❤ {like}</button>
                      <div className='pokeman-display'>
                        <div>height: {height}</div>
                        <div>weight: {weight}</div>
                        <div>stat: {stat1}</div>
                        <div> {stat2}</div>
                        <div> {stat3}</div>
                        <div> {stat4}</div>
                        <div> {stat5}</div>
                        <div> {stat6}</div>
                        <div> {bs1}</div>
                        <div> {bs2}</div>
                        <div> {bs3}</div>
                        <div> {bs4}</div>
                        <div> {bs5}</div>
                        <div> {bs6}</div>
                      </div>
                      
                </div>
            </div>
            
        

    </div>
      
  )


  
}

export default CardImg;
