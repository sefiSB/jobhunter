import {
  useGetExperiencesQuery,
  useGetJobsQuery,
  useGetUserQuery,
} from "../../store/store";
import "../../styles/myStyle.css";
import { useSelector } from "react-redux";
function Profile() {
  const states = useSelector((state) => state.states);
  const user = useGetUserQuery({ id: states.user });
  const experiences = useGetExperiencesQuery();
  const jobs = useGetJobsQuery();
  console.log(jobs.data.data);
  if (user.isLoading || experiences.isLoading || jobs.isLoading) {
    return <>Loading...</>;
  }
  if (user.isError || experiences.isError || jobs.isError) {
    console.error("Something went wrong!");
  }
  return (
    <>
      <div className="profil">
        <h1 className="chakra-petch-regular">Profilom</h1>
      </div>

      {states.role === "company" ? (
        <>
          {jobs.data.data.map((elem, i) => {
            if (elem.userId === user.data.id) {
              //return (<li key={i}>{elem.position}</li>);

              return (
                <>
                  <div key={i} className="container bg-light p-3 mt-5">
                    <div className="row">
                      <div className="col">
                        <span className="display-6 chakra-petch-regular">
                          {elem.position}
                        </span>
                      </div>
                      <div className="col text-end p-1">
                        <button className="btn btn-outline-primary text-end m-2">
                          Szerkesztés
                        </button>
                        <button className="btn btn-outline-primary text-end m-2">
                          Megtekintés
                        </button>
                        <button className="btn btn-danger text-end m-2">
                          Törlés
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </>
      ) : (
        <>
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <h3>Személyes adatok</h3>
              </div>
              <table className="table table-striped mt-5">
                <tbody>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">Név</td>
                    <td>{user.data.fullname}</td>
                  </tr>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      E-mail
                    </td>
                    <td>{user.data.email}</td>
                  </tr>

                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      Status
                    </td>
                    <td>{user.data.role}</td>
                  </tr>

                  <tr className="chakra-petch-regular">Previous experiences</tr>

                  {experiences.data.total === 0 ? (
                    <>
                      <big>Not yet</big>
                    </>
                  ) : (
                    <>
                      {experiences.data.data.map((elem) => {
                        return (
                          <>
                            <tr>
                              <td className="chakra-petch-regular text-secondary">
                                {elem.data.company}
                              </td>
                              <td>{elem.data.position}</td>
                            </tr>
                          </>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Profile;
