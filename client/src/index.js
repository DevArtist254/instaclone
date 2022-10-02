import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {store, persistor} from "./redux/store"
import {BrowserRouter as Router} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
 <Provider store={store}>
  <Router>
   <PersistGate persistor={persistor}>
    <App />
   </PersistGate>
  </Router>
 </Provider>
)
