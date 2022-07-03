import React, {useState, useEffect} from 'react'
import CardComponent from './CardComponent'
import Search from './Search'
import Navbars from './Navbars';
import { Container, Header } from 'semantic-ui-react'



function PokemonHome() {
    
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [search, setSearch]=useState("")

  const [bishnuDb, setBishnuDb]=useState({})
  // console.log(bishnuDb, 'bs')

  useEffect(()=>{
    fetch("http://localhost:3001/favorite")
    .then((res)=>res.json())
    .then((data)=>{
      // console.log(data, 'like')
      setBishnuDb(data)
    })

},[])

console.log(allPokemons,'poke')


  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);
  
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, {...data, likes:0}]);
      });
    }
    createPokemonObject(data.results);

  };
  useEffect(() => {
    getAllPokemons();
  }, []);

function handleInput(event){
  setSearch(event.target.value)
 
 
}
const getNewData = allPokemons.filter((value)=>{
  if(search ===""){
    return true;
  } else{

    return value.name.toLowerCase().includes(search.toLowerCase())
  }

})



  return (
    <div className='App'>
              <Container text>
                <Header as='h2'></Header>
                <Navbars />
                <Search search={search} handleInput={handleInput}/>
                <CardComponent bishnuDb={bishnuDb} filterPokemon={getNewData} />  
              </Container>

        </div>
  )
}

export default PokemonHome