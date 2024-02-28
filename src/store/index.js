import {configureStore} from '@reduxjs/toolkit';
import trainerName from './trainerName.slice.js';
import pokemonName from './pokemonName.slice.js';

const store = configureStore({
    reducer: {
        trainerName,
        pokemonName,
    }
});

export default store;