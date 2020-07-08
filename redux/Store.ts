import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleWare from "redux-thunk";
import PlayListReducer from "./PlayListReducer";
import PlayerReducer from './PlayerReducer'

let rootReducer = combineReducers({
    playLists: PlayListReducer,
    player: PlayerReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));
