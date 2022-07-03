import React from 'react'

import { Button } from 'semantic-ui-react'


function Search({search, handleInput}) {

  function handleSubmit(e){
    e.preventDefault()
  }

 
  return (
      <div className='searchbar'>
        <form onSubmit={handleSubmit}>
        <input type="search" value={search} placeholder="Enter pokemon name..." onChange={handleInput}/>
        <Button primary>Search</Button>
        </form>
    </div>
   )
}

export default Search
