const initialState = {
    itemList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    cartList: []
}

const item = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITEM_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_ITEM_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_ITEM_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                itemList: action.payload.data.result
            };
        case 'GET_ITEMID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_ITEMID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_ITEMID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                itemList: action.payload.data.result
            };
        case 'POST_ITEM_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_ITEM_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_ITEM_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                itemList: [state.itemList, action.payload.data[0]]
            };
        case 'ADD_CART':
            return {
                ...state,
                cartList: action.newValue
            }
        default:
            return state;
    }
};

export default item;
