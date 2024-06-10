import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [role, setRole] = useState("company");

  const handleInputChange = (e) => {
    setRole(e.target.value);
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
                ></textarea>
              </div>
            </>
          ) : (
            <></>
          )}

          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Sign in
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
