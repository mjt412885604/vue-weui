import axios from '@/utils/server'
import qs from 'qs'

export const doctors = params => (
    axios({
        url: 'g1/doctors',
        params
    })
)
