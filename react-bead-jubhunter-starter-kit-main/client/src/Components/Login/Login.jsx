import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { changeAuth, changeLoggedIn, changeRole, changeUser, useAuthenticateMutation } from "../../store/store";
import { useDispatch } from "react-redux";

function Login() {

  const [email,setEmail]=useState("")
  const [password,setPassword] = useState("")
  const dispatch=useDispatch()
  const [authenticate, { data, error }] = useAuthenticateMutation();
  const navigate = useNavigate();


  const handleAuth= async() =>{
    try {
      const result = await authenticate({data:{ email:email, password:password, strategy: "local" }}).unwrap();
      
      dispatch(changeAuth(result));
      dispatch(changeLoggedIn())
      dispatch(changeRole(result.user.role))
      dispatch(changeUser(result.user.id))
      
      setTimeout(()=>navigate('/'),1000)
    } catch (error) {
      console.error("Failed to authenticate: ", error);
    }
  }
  return (
    <div className="container p-5 mt-5 border border-dark">
      <form>
        <div data-mdb-input-init className="form-outline mb-4">
          <input type="email" id="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
          <label className="form-label" htmlFor="email">
            Email address
          </label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input type="password" id="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
          <label className="form-label" htmlFor="password">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center"></div>
        </div>

        <button
          type="button"
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-block mb-4"
          onClick={handleAuth}
        >
          Sign in
        </button>

        <div className="text-center">
          Not a member?
          <Link> Sign up</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
