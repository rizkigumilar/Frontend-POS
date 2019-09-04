
import { combineReducers } from 'redux';


import user from './user'
import item from './item'



const appReducer = combineReducers({
    user,
    item
});

export default appReducer;