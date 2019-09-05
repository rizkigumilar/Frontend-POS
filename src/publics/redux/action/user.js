import axios from 'axios';

let url = `https://pos-coffee.herokuapp.com`

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/login`, data)
            .then(res => {
                const token = res.data.result.token
                const userid = res.data.result.userid
                const name = res.data.result.username
                localStorage.setItem('userid', userid)
                localStorage.setItem('jwToken', token)
                localStorage.setItem('name', name)

            })
    }
}