import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import './styles/pokeCard.css'

const PokeCard = ({url}) => {

    const [pokemon, getPokemon] = useFetch();

    const navigate = useNavigate();

    useEffect(() => {
      getPokemon(url);
    }, []);

    const handleClick = () => {
      navigate(`/pokedex/${pokemon.id}`);
    }

    const type = [pokemon?.types[0].type.name]
    const typePokeCard = type + 'PokeCard'
    console.log(typePokeCard)
    
  return (
    <article onClick={handleClick} className='poke_card' >
      <div className={pokemon?.types[0].type.name}></div>
      <figure>
        <img className='img_poke_card' src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon photo" />
      </figure>
      <h3 className={typePokeCard}>{pokemon?.name}</h3>
      <ul className='poke_types'>
        {
          pokemon?.types.map(type => (
            <li key={type.type.url} className={`slot${type.slot}`}>
              {type.type.name}</li>
          ))
        }
      </ul>
      <p>type</p>
      <hr />
      <ul className='poke_stats'>
        {
          pokemon?.stats.map(stat => (
            !stat.stat.name.includes('special') && 
            <li key={stat.stat.url}>{stat.stat.name}<span className={typePokeCard}>{stat.base_stat}</span></li>
          ))
        }
      </ul>
    </article>
  )
}

export default PokeCard;