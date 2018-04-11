import {
    getToken,
    setToken,
    removeToken
} from '@/utils/auth'
import {
    local
} from '@/utils'

export const state = {
    token: getToken(),
    userId: local('USER_ID'),
    phone: local('USER_PHONE')
}

export const getters = {
    token: state => state.token,
    userId: state => state.userId,
    phone: state => state.phone
}

export const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
    SET_USER_ID(state, userId){
        state.userId = userId
    },
    SET_USER_PHONE(state, phone){
        state.phone = phone
    } 
}

export const actions = {
    doLogin({
        commit
    }, data) {
        
    }
}
