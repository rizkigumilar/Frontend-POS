import axios from 'axios';

let url = `https://pos-coffee.herokuapp.com`



export const getCart = () => {
    return {
        type: 'GET_CART',
        payload: axios.get(`${url}/cart`)
    }
}
export const postCart = (data) => {
    console.log(data)
    return {
        type: 'POST_CART',
        payload: axios.post(`${url}/cart`, data),
    };
};
export const plus = (idItem, data) => {
    console.log(data)
    return {
        type: 'PLUS',
        payload: axios.patch(`${url}/cart/plus/${idItem}`, { qty: data }),
    }
};
export const minus = (idItem, data) => {
    console.log(data)
    return {
        type: 'MINUS',
        payload: axios.patch(`${url}/cart/min/${idItem}`, { qty: data }),
    };
};
export const deleteCart = (idItem) => {
    return {
        type: 'DELETE_CART',
        payload: axios.delete(`${url}/cart/${idItem}`),
    };
}
export const postTransaksi = (data) => {
    console.log(data)
    return {
        type: 'POST_TRANSAKSI',
        payload: axios.post(`${url}/transaksi`, data),
    };
};
export const getTransaksi = () => {
    return {
        type: 'GET_TRANSAKSI',
        payload: axios.get(`${url}/history`)
    }
}


