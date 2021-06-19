import * as ActionTypes from './actiontype';

const initialStore = {
    products : []
}

const cartStore = {
    cartProducts:[],
    total:0
}

export const productsReducer = (state = initialStore ,{type,payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload}
        case ActionTypes.REMOVE_PRODUCTS:
            return []
        default:
            return state
    }
}

export const productReducer = (state = {} ,{type,payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return {...state,...payload}
        case ActionTypes.REMOVE_PRODUCT:
            return {}
        default:
            return state
    }
}

export const cartsReducer = (state = cartStore ,{type,payload}) =>{
    switch (type) {
        case ActionTypes.ADD_TO_CART :
            const existed_item = state.cartProducts.find(item=>item.id === payload.id);
            if(existed_item)
            {
                let quantity = 0
                state.cartProducts.find(item => {
                        if(item.id === payload.id){
                            quantity += 1;
                            item['quantity'] += 1;
                        }
                    }
                )
                return{
                    ...state,
                    total: state.total + (existed_item.price *quantity)
                    }
            }
            else{
                let quantity = 1;
                //calculating the total
                let newTotal = state.total + payload.price 
                payload['quantity'] = quantity;                    
                return{
                    ...state,
                    cartProducts: [...state.cartProducts, payload],
                    total : newTotal
                }
                
            }
        case ActionTypes.SET_QUANTITY_PRODUCT:
            const changeProduct = payload.product;
            state.cartProducts.find(item => {
                        if(item.id === changeProduct.id){
                            item['quantity'] = payload.quantity;
                        }
                    }
            )
            let newTotal = 0;
            state.cartProducts.forEach(item=>{
                let total = 0;
                total = (item.quantity * item.price);
                newTotal += total;
            })
            newTotal = parseInt(newTotal);
            console.log(newTotal)
            return {...state,total:newTotal}
         case ActionTypes.REMOVE_CART_PRODUCT:
            let crtProducts = [];
            state.cartProducts.find(item => {
                        if(item && item.id === payload.id){
                            var index = state.cartProducts.indexOf(payload)
                            console.log(index);
                            if (index >= 0) {
                                state.cartProducts.splice(index, 1);
                                console.log(state.cartProducts)
                                crtProducts = state.cartProducts
                            }
                        }
                    }
            )
            let Total = 0;
            state.cartProducts.forEach(item=>{
                let total = 0;
                total = (item.quantity * item.price);
                Total += total;
            })
            Total = parseInt(Total);
            console.log(Total)
            return {...state,
                    total:Total,
                    cartProducts: crtProducts,
                    }
        default:
            return state
    }
}