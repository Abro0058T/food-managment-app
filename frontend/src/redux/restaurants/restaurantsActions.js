import { CLEAR_ERROR, CREATE_ORDER_RESTAURANT_FAIL, CREATE_ORDER_RESTAURANT_REQUEST, CREATE_ORDER_RESTAURANT_SUCCESS, FETCH_COLLECTOR_DATA_FAIL, FETCH_COLLECTOR_DATA_REQUEST, FETCH_COLLECTOR_DATA_SUCCESS, FETCH_COLLECTOR_HISTORY_FAIL, FETCH_COLLECTOR_HISTORY_REQUEST, FETCH_COLLECTOR_HISTORY_SUCCESS, FETCH_ORDER_HISTORY_RESTAURANT_FAIL, FETCH_ORDER_HISTORY_RESTAURANT_REQUEST, FETCH_ORDER_HISTORY_RESTAURANT_SUCCESS, GET_RESTAURANT_DATA_FAIL, GET_RESTAURANT_DATA_REQUEST, GET_RESTAURANT_DATA_SUCCESS, UPDATE_ORDER_COLLECTOR_FAIL, UPDATE_ORDER_COLLECTOR_REQUEST, UPDATE_ORDER_COLLECTOR_SUCCESS } from './restaurantsTypes'
import axios from 'axios'
export const getRestaurantData = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_RESTAURANT_DATA_REQUEST });
    // cosnt 
    // console.log(id)
    const result = await axios.get(`${import.meta.env.VITE_APP_BASE_URL_REST}/restaurant/${id}`).then(response => {
      // console.log(response.data.data)
      return response.data.data
    }).catch(error => {
      // console.log(error)
      return error.response.message;
    })

    dispatch({ type: GET_RESTAURANT_DATA_SUCCESS, payload: result })
  }
  catch (error) {
    console.log(error)
    dispatch({

      type: GET_RESTAURANT_DATA_FAIL,
      payload: error
    })


  }
}

export const createOrderRestaurant = (id,order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_RESTAURANT_REQUEST });

    // Replace with your MongoDB query to create the order
    const result = await axios.post(`${import.meta.env.VITE_APP_BASE_URL_REST}/createOrder/${id}`,order);

    dispatch({ type: CREATE_ORDER_RESTAURANT_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: CREATE_ORDER_RESTAURANT_FAIL, payload: error });
  }
};

export const fetchOrderHistoryRestaurant = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ORDER_HISTORY_RESTAURANT_REQUEST });
console.log(id)
    const result = await axios.get(`${import.meta.env.VITE_APP_BASE_URL_REST}/history/${id}`);
    console.log(result)
    dispatch({ type: FETCH_ORDER_HISTORY_RESTAURANT_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: FETCH_ORDER_HISTORY_RESTAURANT_FAIL, payload: error });
  }
};

export const updateOrderCollector = (updateStatus) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_COLLECTOR_REQUEST });
console.log(updateStatus)
    // Replace with your MongoDB query to update the collector details
    const result = await axios.patch(`${import.meta.env.VITE_APP_BASE_URL_REST}/collector/updateStatus`, updateStatus);
console.log(result)
    dispatch({ type: UPDATE_ORDER_COLLECTOR_SUCCESS, payload: result.data });
  } catch (error) {
    console.log("error")
    dispatch({ type: UPDATE_ORDER_COLLECTOR_FAIL, payload: error });
  }
};
export const fetchCollectorHistory = (collectorId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_COLLECTOR_HISTORY_REQUEST });

    // Replace with your MongoDB query to fetch collector history
    console.log(collectorId)
    const result = await axios.get(`${import.meta.env.VITE_APP_BASE_URL_REST}/collector/history/${collectorId}`);
    console.log(result)
    dispatch({ type: FETCH_COLLECTOR_HISTORY_SUCCESS, payload: result.data });
  } catch (error) {
    console.log(error)
    dispatch({ type: FETCH_COLLECTOR_HISTORY_FAIL, payload: error });
  }
};


export const fetchCollectorData = (collectorId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_COLLECTOR_DATA_REQUEST });

    const result = await axios.get(`${import.meta.env.VITE_APP_BASE_URL_REST}/collectors/getAllRest/${collectorId}`);
    if (!result) {
      throw new Error('Collector not found');
    }

    dispatch({ type: FETCH_COLLECTOR_DATA_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: FETCH_COLLECTOR_DATA_FAIL, payload: error.message });
  }
};




export const clearError = async (dispatch) => {
  dispatch({ type: CLEAR_ERROR })
}