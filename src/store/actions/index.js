import axios from 'axios'

const baseUrl = 'http://127.1.0.0:3000'


export const SET_QUEUES = 'SET_QUEUES'


export const setQueues = (data) => {
    return {
        type: SET_QUEUES,
        payload: data
    }
}

const verifyId = (token) => {
    return axios({
        method: 'post',
        url: baseUrl + '/verivy',
        data: {
            token
        }
    })
}

export const updateStatus = (id, status) => {

}
