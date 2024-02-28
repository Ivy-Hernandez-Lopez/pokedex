import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonName } from '../store/pokemonName.slice';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedexPage/PokeCard';
import SelectType from '../components/pokedexPage/SelectType';
import './styles/pokedexPage.css';
import Pagination from '../components/Pagination';

const PokedexPage = () => {

  const [selectValue, setSelectValue] = useState('allPokemons');
  const trainerName = useSelector(store => store.trainerName);
  const pokemonName = useSelector(store => store.pokemonName);
  const dispatch = useDispatch();
  const [pokemons, getPokemons, getPerType] = useFetch ();
  
  useEffect(() => {
    if (selectValue==='allPokemons'){
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=450';
      getPokemons(url);
    } else {
      getPerType(selectValue);
    }
  }, [selectValue]);  

  const textInput = useRef();  

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()));
    textInput.current.value = '';
  }
  
  const [currentPage, setCurrentPage] = useState(1);

  const cbFilter = () => {
    if (pokemonName) {
      return pokemons?.results.filter(element => element.name.includes(pokemonName));
    } else {
      return pokemons?.results;
    }
  }

  const quantity = 15;
  const second = currentPage * quantity;
  const first = second - quantity;
  const pokePart = cbFilter() && cbFilter().slice(first, second);
  const total = cbFilter() && Math.floor(cbFilter().length / quantity) +1;
  console.log(total);

  return (
    <div className='pokedex'>
      <section className='poke_h_container'>
        <hr />
        <img className='poke_header_img' src="./assets/pokedexPageHeader.svg" alt="POKEDEXpage" />
        <img className='poke_pokedex' src="./assets/pokedex.svg" alt="POKEDEX"/>
      </section>
      <section className='poke_header'>
        <h3><span>Bienvenido {trainerName}, </span>Aqui podrás encontrar tu pokemon favorito</h3>
        <div className='poke_search'>
          <form onSubmit={handleSubmit}>
            <input type="text" ref={textInput}/>
            <button>Buscar</button>
          </form>
          <SelectType 
            setSelectValue={setSelectValue}
            />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            total={total}
          />
        </div>
      </section>
      <section className='poke_container'>
        {
          pokePart?.map(poke => (
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
          ))
        }
      </section>
      <div className='pagination_bottom'>
        <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            total={total}
         />
      </div>
    </div>
  )
}

export default PokedexPage;