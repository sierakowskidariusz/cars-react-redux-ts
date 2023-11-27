import {ActionCreatorWithPayload, createSlice, nanoid, PayloadAction, Slice} from '@reduxjs/toolkit';
import Cars from "../../model/cars";
import {addCar} from "../actions";

const initialState: Cars = {
    searchTerm: '',
    data: [],
}

const dataSlice: Slice<Cars> = createSlice({
    name: 'cars',
    initialState: initialState,
    reducers: {
        removeCar: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter(car => car.id !== action.payload);
        },
        changeSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(addCar, (state, action) => {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        })
    }
})

export const dataReducer = dataSlice.reducer;
export const dataActions = dataSlice.actions;
export const removeCar = dataActions.removeCar as ActionCreatorWithPayload<string>;
export const changeSearchTerm = dataActions.changeSearchTerm as ActionCreatorWithPayload<string>;
export default dataSlice;
