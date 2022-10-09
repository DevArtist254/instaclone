import {connect} from "react-redux"
import {Routes, Route} from "react-router-dom"
import {getCurrentUser} from "./redux/auth/auth.actions"
import Dashboard from "./pages/dashboard.pg"
import Home from "./pages/home.pg"
import Login from "./pages/login.pg"
import Signup from "./pages/signup.pg"
import Nav from "./comp/nav.comp"
import {useEffect} from "react"

function App({getCurrentUser, token, errMessage, loading}) {
 useEffect(() => {
  getCurrentUser()
 }, [getCurrentUser])

 return (
  <div className="App">
   <Nav />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route
     path="/dashboard"
     element={<Dashboard token={token} errMessage={errMessage} />}
    />
   </Routes>
  </div>
 )
}

const mapDispatchToProps = (dispatch) => ({
 getCurrentUser: () => dispatch(getCurrentUser()),
})

//setLogin
const mapStateToProps = ({auth}) => ({
 token: auth.token,
 loading: auth.isLoading,
 errMessage: auth.errMessage,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
