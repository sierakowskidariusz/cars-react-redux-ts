import {createAction} from '@reduxjs/toolkit'
import Car from "../model/car";
export const addCar = createAction<Car>("app/addCar");
