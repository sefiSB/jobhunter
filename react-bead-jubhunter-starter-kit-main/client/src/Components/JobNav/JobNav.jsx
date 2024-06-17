import { useDispatch, useSelector } from "react-redux";
import "../../styles/myStyle.css";
import { Link } from "react-router-dom";
import { changeAuth, changeLoggedIn, changeRole, changeUser, selectStateData } from "../../store/store";

function JobNav() {
  const stateData = useSelector((state)=>state.states);
  const dispatch=useDispatch()

  const handleLogOut=()=>{
    dispatch(changeRole(null))
    dispatch(changeAuth({accessToken:null}))
    dispatch(changeUser(null))
    dispatch(changeLoggedIn())
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light linkclass">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link className="nav-link" to="/">
              {" "}
              <b>Jobhunter</b>
              <span className="sr-only"></span>
            </Link>
          </li>

          {stateData.loggedIn ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  My profile<span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleLogOut}>
                  Log out<span className="sr-only"></span>
                </Link>
              </li>
              {stateData.role === "company" ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/newjob">
                      Add jobs<span className="sr-only"></span>
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <li className="nav-item active">
                <Link className="nav-link" to="/login">
                  Login<span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register<span className="sr-only"></span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default JobNav;
