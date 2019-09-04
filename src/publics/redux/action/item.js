import axios from 'axios';

let url = `http://localhost:3030`



export const getitem = () => {
    return {
        type: 'GET_ITEM',
        payload: axios.get(`${url}/item`)
    }
}



export const getitemid = (idItem) => {
    return {
        type: 'GET_ITEMID', idItem,
        payload: axios.get(`${url}/item/${idItem}`)
    }
}

export const postitem = (data) => {
    return {
        type: 'POST_item',
        payload: axios.post(`${url}/item`, data)
    }
}

export const deleteitem = (iditem) => {
    return {
        type: 'DELETE_item',
        payload: axios.delete(`${url}/${iditem}`),
    };
}