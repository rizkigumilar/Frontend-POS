const initialState = {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    cartList: [],
    total: 0,
    buyList: []
};

const buy = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'GET_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'GET_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                cartList: action.payload.data.result,
                total: action.payload.data.total
            };
        case 'POST_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_CART_FULFILLED':
            state.cartList.push(action.payload.data.result);
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
            };
        case 'ADD_CART':
            return {
                ...state,
                cartList: action.newValue
            };
        case 'POST_TRANSAKSI_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_TRANSAKSI_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_TRANSAKSI_FULFILLED':
            // state.cartList.push(action.payload.data.result);
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                buyList: [state.buyList, action.payload.data[0]]
            };
        case 'GET_TRANSAKSI_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'GET_TRANSAKSI_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'GET_TRANSAKSI_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                buyList: action.payload.data.result
            };
        default:
            return state;
    }
};

export default buy;
