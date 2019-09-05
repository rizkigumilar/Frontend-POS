
import { combineReducers } from 'redux';


import user from './user'
import item from './item'
import cart from './buy'




const appReducer = combineReducers({
    user,
    item,
    cart
});

export default appReducer;