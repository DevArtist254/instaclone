import {combineReducers} from "redux"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import authReducer from "./auth/auth.reducer"

const config = {
 key: "root",
 storage,
 whitelist: [],
}

const rootReducer = combineReducers({
 auth: authReducer,
})

const persistedReducer = persistReducer(config, rootReducer)

export default persistedReducer
