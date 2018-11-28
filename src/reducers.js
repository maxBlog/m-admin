/*
 * @Author: Max 
 * @Date: 2018-11-27 16:42:43 
 * @Last Modified by: Max
 * @Last Modified time: 2018-11-27 17:08:03
 */


 // 合并多个reducer
import { combineReducers } from 'redux'
import { user } from 'reducers'

export default combineReducers({ user })