const initialState = {
    userList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_LOADING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'LOGIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'LOGIN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                userList: [state.userList, action.payload]
            };
        default:
            return state;
    }
}

export default user;