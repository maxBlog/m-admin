/*
 * @Author: Max 
 * @Date: 2018-11-27 17:05:15 
 * @Last Modified by: Max
 * @Last Modified time: 2018-11-27 17:07:47
 */

const LOGIN_SUCCESS = 'login_success'

export function user(state = {}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, ...action.data }
        default:
            return state
    }
}