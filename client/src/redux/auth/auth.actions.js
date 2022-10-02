import {authTypes} from "./auth.types"

export const loadAuth = () => ({
 type: authTypes.LOADING_AUTH,
})

export const successStateAuth = (user) => ({
 type: authTypes.SUCCESS_AUTH,
 payload: user,
})

export const failStateAuth = (errMessage) => ({
 type: authTypes.FAIL_AUTH,
 payload: errMessage,
})
