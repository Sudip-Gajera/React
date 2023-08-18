import { combineReducers } from "redux";
// import { counterReducer } from "./counter.reducer";
import { doctorReducer } from "./doctor.reducer";
import { medicineReducer } from "./medicine.reducer";
import { cartReducer } from "./cart.reducer";
import { favReducer } from "./favorite.reducer";
import counterSlice from "../slice/counterSlice";
import departmentSlice from "../slice/departmentSlice";
// import { departmentReducer } from "./department.reducer";

export const rootReducer = combineReducers({
    // counter: counterReducer,
    doctor: doctorReducer,
    medicineData: medicineReducer,
    cart : cartReducer,
    favoirte: favReducer,
    counter: counterSlice,
    // department: departmentReducer
    department: departmentSlice
})