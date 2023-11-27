import {configureStore} from "@reduxjs/toolkit";
import {addCar} from "./actions";
import {dataReducer, removeCar, changeSearchTerm} from "./slices/dataSlice";
import {formReducer, changeName, changeCost} from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: dataReducer,
        form: formReducer
    }
});

export {
    store,
    addCar, removeCar, changeSearchTerm,
    changeName, changeCost
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DispatchFunc = () => AppDispatch;

