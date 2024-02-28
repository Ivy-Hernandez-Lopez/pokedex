import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom';
import '../components/pokeIdPage/styles/pokeIdPage.css'
import { current } from '@reduxjs/toolkit';

const PokeIdPage = () => {

  const [ pokeData, getPokeData ] = useFetch();
  const param = useParams();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`;
    getPokeData(url);
  }, []);

  const type = [pokeData?.types[0].type.name]
  const type_id = type + 'IdPage'

  const hpStat = [pokeData?.stats[0].base_stat]
  const attackStat = [pokeData?.stats[1].base_stat]
  const defenseStat = [pokeData?.stats[2].base_stat]
  const specialAtStat = [pokeData?.stats[3].base_stat]
  const specialDefStat = [pokeData?.stats[4].base_stat]
  const speedStat = [pokeData?.stats[5].base_stat]

  const calculateHeight = (currentStat) => {
    return(currentStat/250) * 80 + '%';
  };

  console.log(pokeData)
  console.log(type_id)

  return (
    <div className='id_body'>
      <section className='poke_h_container'>
        <hr />
        <img className='poke_header_img' src="./public/assets/pokedexPageHeader.svg" alt="POKEDEXpage" />
        <img className='poke_pokedex' src="./assets/pokedex.svg" alt="POKEDEX"/>
      </section>
      <section className='id_container'>
        <div className='id_div'></div>
        <div className={type_id}>
          <figure className='id_pokemon'>
              <img className='img_poke_page' src={pokeData?.sprites.other['official-artwork'].front_default} alt="pokemon photo" />
          </figure>
          <br />
          <h3 className='id_number'>#{pokeData?.id}</h3>
          <br />
          <h3 className='id_name'> // {pokeData?.name} // </h3>
          <ul className='id_datos'>
            <li>Peso <br /> <strong>{pokeData?.weight}</strong></li>
            <li>Altura <br /><strong>{pokeData?.height}</strong></li>
          </ul>
          <div className='id_type_abilities'>
            <div className='id_types'>
              <h2><strong>Tipo</strong></h2>
              <ul>
                {
                  pokeData?.types.map(type => (
                    <li key={type.type.url} className='id_type'>{type.type.name}</li>
                  ))
                }
              </ul>
            </div>
            <div className='id_abilities'>
              <h2><strong>Habilidades</strong></h2>
              <ul>
                {
                  pokeData?.abilities.map(ability => (
                    <li key={ability.ability.url} className='id_ability'>{ability.ability.name}</li>
                  ))
                }
              </ul>
              </div>
          </div>
          <ul className='id_stats'>
            <h3>Stats</h3>
            <li className='id_stat'> <strong>Hp<span></span> {hpStat}/250</strong>
            <div id='progress'></div>
            <br />
            <div id='hp_stat' style={{width: calculateHeight(hpStat)}}></div>
            </li>
            <li className='id_stat'> <strong>Attact<span></span> {attackStat}/250</strong>
            <div id='progress'></div>
            <br />
            <div id='attack_stat' style={{width: calculateHeight(attackStat)}}></div>
            </li>
            <li className='id_stat'> <strong>Defense<span></span> {defenseStat}/250</strong>
            <div id='progress'></div>
            <br />
            <div id='defense_stat' style={{width: calculateHeight(defenseStat)}}></div>
            </li>
            <li className='id_stat'> <strong>Special attack<span></span> {specialAtStat}/250</strong>
            <div id='progress'></div>
            <br />
            <div id='special_at_stat' style={{width: calculateHeight(specialAtStat)}}></div>
            </li>
            <li className='id_stat'> <strong>Special defense<span></span> {specialDefStat}/250</strong>
            <div id='progress'></div>
            <br />
            <div id='special_def_stat' style={{width: calculateHeight(specialDefStat)}}></div>
            </li>
            <li className='id_stat'> <strong>Speed<span></span> {speedStat}/250</strong>
            <div id='progress'></div>
            <br />
            <div id='speed_stat' style={{width: calculateHeight(speedStat)}}></div>
            </li>
          </ul>
        </div>
      </section>   
      <section className='id_movements'>
        <h3>Movements</h3>
        <ul className='id_ul_mov'>
          {
            pokeData?.moves.map(move => (
              <li key={move.move.url} className='id_move'>{move.move.name}</li>
            ))
          }
        </ul>
      </section>   
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default PokeIdPage;

