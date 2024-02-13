import {createStore,combineReducers,applyMiddleware} from "redux"
import {thunk} from 'redux-thunk'
import restaurantReducer from "./restaurants/retaurantsReducer"
import { composeWithDevTools } from "@redux-devtools/extension"

const reducer=combineReducers({
    restaurant:restaurantReducer
})

let initialState={}

const middleware =[thunk];


const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store
