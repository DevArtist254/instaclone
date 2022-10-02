import {authTypes} from "./auth.types"

const initState = {
 token: null,
 loading: false,
 errMessage: undefined,
}

const authReducer = (state = initState, {type, payload}) => {
 switch (type) {
  case authTypes.LOADING_AUTH:
   return {
    ...state,
    isLoading: true,
   }
  case authTypes.SUCCESS_AUTH:
   return {
    ...state,
    isLoading: false,
    token: payload,
   }
  case authTypes.FAIL_AUTH:
   return {
    ...state,
    isLoading: false,
    errMessage: payload,
   }
  default:
   return state
 }
}

export default authReducer
