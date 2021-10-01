import { combineReducers } from "redux";
import { map } from "../Reducers/map.reducer";
import { pencil } from "../Reducers/pencil.reducer";

const rootReducer = combineReducers({ map, pencil });

export default rootReducer;
