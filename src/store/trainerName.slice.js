import { createSlice, } from "@reduxjs/toolkit";

const trainerSlice = createSlice({
    name: 'trainerName',
    initialState: '',
    reducers: {
        setTrainerName: (currentValue, action) => action.payload,
    }
});

export const {setTrainerName} = trainerSlice.actions;

export default trainerSlice.reducer;