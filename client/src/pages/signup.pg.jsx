import {connect} from "react-redux"
import React, {useRef} from "react"
import {useNavigate, Link} from "react-router-dom"
import {setSignup} from "../redux/auth/auth.actions"

function Signup({setSignup, token, loading, errMessage}) {
 const emailRef = useRef()
 const passwordRef = useRef()
 const passwordConfirmRef = useRef()
 const navRoute = useNavigate()

 function submit(e) {
  e.preventDefault()

  const email = emailRef.current.value
  const password = passwordRef.current.value
  const passwordConfirm = passwordConfirmRef.current.value

  if (password === passwordConfirm) {
   setSignup(email, password)
  } else {
   errMessage = "Re-enter your password"
  }

  if (token) {
   navRoute("/dashboard")
  }
 }

 return (
  <div>
   <h1>Sign up page</h1>
   <form onSubmit={submit}>
    <div>
     <label>Email</label>
     <input name="email" type="email" ref={emailRef} required />
    </div>
    <div>
     <label>Password</label>
     <input name="password" type="password" ref={passwordRef} required />
    </div>
    <div>
     <label>Password Confrim</label>
     <input name="password" type="password" ref={passwordConfirmRef} required />
    </div>
    <input type="submit" />
   </form>
   <Link to="/Login">Have an a/c login here</Link>
   <h1>{errMessage}</h1>
   <h2>{loading ? "Loading" : "Done"}</h2>
  </div>
 )
}

const mapDispatchToProps = (dispatch) => ({
 setSignup: (email, password) => dispatch(setSignup(email, password)),
})

const mapStateToProps = ({auth}) => ({
 token: auth.token,
 loading: auth.isLoading,
 errMessage: auth.errMessage,
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
