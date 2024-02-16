import {createStore,combineReducers,applyMiddleware} from "redux"
import {thunk} from 'redux-thunk'
import restaurantReducer, { fetchCollectorHistoryReducer, fetchOrderHistoryRestaurantReducer } from "./restaurants/retaurantsReducer"
import { composeWithDevTools } from "@redux-devtools/extension"

const reducer=combineReducers({
    restaurant:restaurantReducer,
    restaHistory:fetchOrderHistoryRestaurantReducer,
    collectorHistory:fetchCollectorHistoryReducer
})

let initialState={}

const middleware =[thunk];


const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store
