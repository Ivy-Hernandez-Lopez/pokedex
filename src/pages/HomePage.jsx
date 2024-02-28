import React, { useRef } from 'react';
import { setTrainerName } from '../store/trainerName.slice';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const textInput = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTrainerName(textInput.current.value.trim()));
    navigate('/pokedex');
  }
  
  return (
    <div className='poke_cont'>
      <section className='poke_welcome'>
        <img src="./assets/pokedex.svg" alt="POKEDEX" />
        <h1>¡Hola entrenador!</h1>
        <h3>Para poder comenzar, dame tu nombre</h3>
        <br />
        <form onSubmit={handleSubmit} className='poke_name'>
          <input type="text" ref={textInput} placeholder='Tu nombre...'/>
          <button>Comenzar</button>
        </form>
      </section>
      <footer>
        <img src="./assets/footer.svg" alt="POKEDEX" />
      </footer>
    </div>
  )
}

export default HomePage;