import * as actionTypes from "./actionTypes";
import axios from "../../axios-order";

export const purchaseBurrgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};
export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    

    axios
      .post("/orders.json?auth=" + token, orderData)
      .then(response => {
        dispatch(purchaseBurrgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};
export const purchaseBurgerStart = () => {
  return { type: actionTypes.PURCHASE_BURGER_START };
};
export const purchaseInit = () => {
  return { type: actionTypes.PURCHASE_INIT };
};


export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrderFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token, userId) => {
    return dispatch => {

        dispatch(fetchOdersStart())
        const queryParam = '?auth=' + token + '&orderBy="userId"&"equalTo="' + userId;
        axios.get('/orders.json?auth=' + queryParam)
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
               dispatch(fetchOrdersSuccess(fetchedOrders))
            })
            .catch(err => {
               dispatch(fetchOrderFail(err))
            });
    }
}