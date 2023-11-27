import {ActionCreatorWithPayload, createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';
import Car from "../../model/car";
import {addCar} from "../actions";

const initialState: Car = {
    name: '',
    cost: 0
};

const formSlice: Slice<Car> = createSlice({
    name: 'form',
    initialState: initialState,
    reducers: {
        changeName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        changeCost: (state, action: PayloadAction<number>) => {
            state.cost = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(addCar, (state, action) => {
            return {
                name: '',
                cost: 0
            }
        })
    }
})
export const formReducer = formSlice.reducer;
export const formActions = formSlice.actions;
export const changeName = formActions.changeName as ActionCreatorWithPayload<string>;
export const changeCost = formActions.changeCost as ActionCreatorWithPayload<number>;
export default formSlice;
