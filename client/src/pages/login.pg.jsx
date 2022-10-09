import {connect} from "react-redux"
import React, {useRef} from "react"
import {useNavigate, Link} from "react-router-dom"
import {setLogin} from "../redux/auth/auth.actions"

function Login({setLogin, token, loading, errMessage}) {
 const emailRef = useRef()
 const passwordRef = useRef()
 const navRoute = useNavigate()

 function submit(e) {
  e.preventDefault()

  const email = emailRef.current.value
  const password = passwordRef.current.value

  setLogin(email, password)

  if (token) {
   navRoute("/dashboard")
  }
 }

 return (
  <div>
   <h1>Login</h1>
   <form onSubmit={submit}>
    <div>
     <h3>Email</h3>
     <input name="email" type="email" ref={emailRef} required />
    </div>
    <div>
     <h3>Password</h3>
     <input name="password" type="password" ref={passwordRef} required />
    </div>
    <input type="submit" />
   </form>
   <Link to="/Signup">Don't have an a/c sign up here</Link>
   <h1>{errMessage}</h1>
   <h2>{loading ? "Loading" : "Done"}</h2>
  </div>
 )
}

//setLogin
const mapDispatchToProps = (dispatch) => ({
 setLogin: (email, password) => dispatch(setLogin(email, password)),
})

const mapStateToProps = ({auth}) => ({
 token: auth.token,
 loading: auth.isLoading,
 errMessage: auth.errMessage,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
