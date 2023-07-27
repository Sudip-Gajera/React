import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { doctorReducer } from "./doctor.reducer";
import { medicineReducer } from "./medicine.reducer";
import { cartReducer } from "./cart.reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    doctor: doctorReducer,
    medicineData: medicineReducer,
    cart : cartReducer
})