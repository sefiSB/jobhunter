import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddUserMutation } from "../../store/store";

function Register() {
  const [addUser] = useAddUserMutation();
  const [role, setRole] = useState("company");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [experiences, setExperiences] = useState("");

  const handleInputChange = (e) => {
    setRole(e.target.value);
  };

  const handleAuth = (e) => {
    e.preventDefault()
    addUser({
      data: {
        email: email,
        password: password,
        fullname: fullname,
        role: role,
      },
    }).then((result)=>{
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
    
  };

  return (
    <>
      <div className="container p-5 mt-5 border border-dark">
        <form>
          <div className="form-group row ">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputFullname" className="col-sm-2 col-form-label">
              Full name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputFullname"
                placeholder="Full name"
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
          </div>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Role</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="company"
                    checked={role === "company"} // Set checked based on state
                    onChange={handleInputChange} // Handle change event
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Company
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="jobseeker"
                    checked={role === "jobseeker"}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Jobseeker
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          {role === "jobseeker" ? (
            <>
              <div className="form-group">
                <label className="form-check-label" htmlFor="experiences">
                  Experiences
                </label>

                <textarea
                  className="form-control"
                  name="experiences"
                  id="experiences"
                  rows="6"
                  onChange={(e) => setExperiences(e.target.value)}
                ></textarea>
              </div>
            </>
          ) : (
            <></>
          )}

          <div className="form-group row">
            <div className="col-sm-10">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e)=>handleAuth(e)}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="text-center">
            <p>
              Already a member?
              <Link to="/login"> Log in</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
