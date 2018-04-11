import axios from '@/utils/server'
import qs from 'qs'

export const login = data => (
    axios({
        url: 'g1/doctors',
        method: 'post',
        data: qs.stringify(data)
    })
)

export const loginOut = data => (
    axios({
        url: 'g1/doctors',
        method: 'post',
        data: qs.stringify(data)
    })
)