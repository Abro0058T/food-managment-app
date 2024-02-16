import {CLEAR_ERROR, CREATE_ORDER_RESTAURANT_FAIL, CREATE_ORDER_RESTAURANT_REQUEST, CREATE_ORDER_RESTAURANT_SUCCESS, FETCH_COLLECTOR_DATA_FAIL, FETCH_COLLECTOR_DATA_REQUEST, FETCH_COLLECTOR_DATA_SUCCESS, FETCH_COLLECTOR_HISTORY_FAIL, FETCH_COLLECTOR_HISTORY_REQUEST, FETCH_COLLECTOR_HISTORY_SUCCESS, FETCH_ORDER_HISTORY_RESTAURANT_FAIL, FETCH_ORDER_HISTORY_RESTAURANT_REQUEST, FETCH_ORDER_HISTORY_RESTAURANT_SUCCESS,GET_RESTAURANT_DATA_FAIL, GET_RESTAURANT_DATA_REQUEST, GET_RESTAURANT_DATA_SUCCESS, UPDATE_ORDER_COLLECTOR_FAIL, UPDATE_ORDER_COLLECTOR_REQUEST, UPDATE_ORDER_COLLECTOR_SUCCESS} from './restaurantsTypes'

const restaurantReducer=(state={restaurant:[]},action)=>{
    switch(action.type){
        case GET_RESTAURANT_DATA_REQUEST:return {
            ...state,
            restaurant:[],
            loading:true
        }
        case GET_RESTAURANT_DATA_SUCCESS:return {
            ...state,
            restaurant:action.payload,
            loading:false
        }
        case GET_RESTAURANT_DATA_FAIL:return {
            ...state,
            error:action.payload,
            loading:false
        }

        case CLEAR_ERROR:return{
            ...state,
            error:null,

        }
        default:return state
    }
}
// CREATE_ORDER_RESTAURANT
export const createOrderRestaurantReducer = (state = { order:[] }, action) => {
    switch (action.type) {
      case CREATE_ORDER_RESTAURANT_REQUEST:
        return { ...state, loading: true };
      case CREATE_ORDER_RESTAURANT_SUCCESS:
        return { ...state, loading: false, order: action.payload.order };
      case CREATE_ORDER_RESTAURANT_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // FETCH_ORDER_HISTORY_RESTAURANT
  export const fetchOrderHistoryRestaurantReducer = (state = {history:[]}, action) => {
    switch (action.type) {
      case FETCH_ORDER_HISTORY_RESTAURANT_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_ORDER_HISTORY_RESTAURANT_SUCCESS:
        return { ...state, loading: false, history: action.payload.history ,status:action.payload.status};
      case FETCH_ORDER_HISTORY_RESTAURANT_FAIL:
        return { ...state, loading: false, error: action.payload  };
      default:
        return state;
    }
  };
  
  // UPDATE_ORDER_COLLECTOR
  export const updateOrderCollectorReducer = (state = { update_Order:[]}, action) => {
    switch (action.type) {
      case UPDATE_ORDER_COLLECTOR_REQUEST:
        return { ...state, loading: true, error: null };
      case UPDATE_ORDER_COLLECTOR_SUCCESS:
        return { ...state, loading: false, order: action.payload };
      case UPDATE_ORDER_COLLECTOR_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // FETCH_COLLECTOR_DATA
export const fetchCollectorDataReducer = (state = { data_collector:[]}, action) => {
    switch (action.type) {
      case FETCH_COLLECTOR_DATA_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_COLLECTOR_DATA_SUCCESS:
        return { ...state, loading: false, collector: action.payload };
      case FETCH_COLLECTOR_DATA_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // FETCH_COLLECTOR_HISTORY
  export const fetchCollectorHistoryReducer = (state = { history_collector:[] }, action) => {
    switch (action.type) {
      case FETCH_COLLECTOR_HISTORY_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_COLLECTOR_HISTORY_SUCCESS:
        return { ...state, loading: false, history: action.payload };
      case FETCH_COLLECTOR_HISTORY_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };





export default restaurantReducer;