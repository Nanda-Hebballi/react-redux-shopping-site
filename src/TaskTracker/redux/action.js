import * as ActionTypes from './actiontype';

export const setproducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const setQuantity = (product,quantity) =>{
    return {
        type:ActionTypes.SET_QUANTITY_PRODUCT,
        payload:({product,quantity})
    }
}

export const addToCarts = (products) => {
    return {
        type:ActionTypes.ADD_TO_CART,
        payload:products
    }
}

export const setproduct = (products) => {
    return {
        type:ActionTypes.SET_PRODUCT,
        payload:products
    }
}

export const removeproduct = () => {
    return {
        type:ActionTypes.REMOVE_PRODUCT,
    }
}

export const removeproducts = () => {
    return {
        type:ActionTypes.REMOVE_PRODUCTS,
    }
}

export const removecartproduct = (product) => {
    return {
        type:ActionTypes.REMOVE_CART_PRODUCT,
        payload:product
    }
}

