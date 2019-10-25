import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseInit = (state, action) => {
    return updateObject(state, { purchased: false });   
};

const callStarted = (state, action) => {
    return updateObject(state, { loading: true });   
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, { id: action.orderId });
    return updateObject(state, { 
        loading: false,                
        purchased: true,  
        orders: state.orders.concat(newOrder)
    });
};

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, { 
        loading: false,
        orders: action.orders 
    });
};

const callFailed = (state, action) => {
    return updateObject(state, { loading: false });   
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);   
        case actionTypes.PURCHASE_BURGER_START: return callStarted(state, action);   
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);  
        case actionTypes.PURCHASE_BURGER_FAIL: return callFailed(state, action); 
        case actionTypes.FETCH_ORDERS_START: return callStarted(state, action);   
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return callFailed(state, action); 
        default: return state;
    }
};

export default reducer;