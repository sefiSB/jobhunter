import { useState } from "react";
import {
  useApplicant4JobsQuery,
  useDeleteJobMutation,
  useGetExperiencesQuery,
  useGetJobsQuery,
  useGetUserQuery,
  useModifyJobMutation,
} from "../../store/store";
import "../../styles/myStyle.css";
import { useSelector } from "react-redux";
import ApplicantList from "../ApplicantList/ApplicantList";
import { useNavigate } from "react-router-dom";
import NewExperience from "../NewExperience/NewExperience";

function Profile() {
  const states = useSelector((state) => state.states);
  const user = useGetUserQuery({ id: states.user });
  const experiences = useGetExperiencesQuery();
  /* if(isLoading){
    return(<><p>Loading...</p></>)
  }
  if(isError){
    return(<><p>Something wont wreng</p></>)
  } */
  console.log(experiences);
  const jobs = useGetJobsQuery();
  const navigate = useNavigate();
  const [deleteJob] = useDeleteJobMutation();

  const [mutationType, setMutationType] = useState(null);
  const [mutId, setMutId] = useState(null);

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [homeOffice, setHomeOffice] = useState(false);

  const [showAddExp, setShowAddExp] = useState(false);

  const [isModifyingKey, setIsModifyingKey] = useState(null);
  const [showApplicants, setShowApplicants] = useState(null);
  const [modifyJob] = useModifyJobMutation();

  const handleModifyExp = (id) => {
    setShowAddExp(true);
    setMutationType("Modify");
    setMutId(id);
    console.log(id)
  };

  const handleAddExperience = () => {
    setMutationType("Add")
    setShowAddExp(!showAddExp);
  };

  const handleDeleteJob = (id) => {
    deleteJob({ id: id })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleApplicants = (id) => {
    setShowApplicants(id);
    console.log(id);
  };
  const setItBack = () => {
    setShowApplicants(null);
  };

  const handleModifyJob = (job, key) => {
    if (isModifyingKey !== null) {
      setIsModifyingKey(null);
    } else {
      setIsModifyingKey(key);
      setCompany(job.company);
      setPosition(job.position);
      setDescription(job.description);
      setSalaryFrom(job.salaryFrom);
      setSalaryTo(job.salaryTo);
      setType(job.type);
      setCity(job.city);

      if (job.homeOffice === 0) {
        setHomeOffice(false);
      } else if (job.homeOffice === 1) {
        setHomeOffice(true);
      } else {
        setHomeOffice(job.homeOffice);
      }
    }
  };

  const handleSendModifiedJob = (jobId) => {
    modifyJob({
      data: {
        company: company,
        position: position,
        description: description,
        salaryFrom: salaryFrom,
        salaryTo: salaryTo,
        type: type,
        city: city,
        homeOffice: homeOffice,
      },
      id: jobId,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsModifyingKey(null);
  };

  if (user.isLoading || experiences.isLoading || jobs.isLoading) {
    return <>Loading...</>;
  }
  if (user.isError || experiences.isError || jobs.isError) {
    console.error("Something went wrong!");
  }

  return (
    <>
      <div className="profil">
        <h1 className="chakra-petch-regular">Profile</h1>
      </div>

      {states.role === "company" ? (
        <>
          {jobs.data.data.map((elem, i) => {
            if (elem.userId === user.data.id) {
              return (
                <div key={i}>
                  <div className="container bg-light p-3 mt-5">
                    <div className="row">
                      <div className="col">
                        <span className="display-6 chakra-petch-regular">
                          {elem.position}
                        </span>
                      </div>
                      <div className="col text-end p-1">
                        <button
                          className="btn btn-outline-primary text-end m-2"
                          onClick={() => handleModifyJob(elem, i)}
                        >
                          Szerkesztés
                        </button>
                        <button
                          className="btn btn-outline-primary text-end m-2"
                          onClick={() => handleApplicants(elem.id)}
                        >
                          Applicants
                        </button>
                        <button
                          className="btn btn-danger text-end m-2"
                          onClick={() => handleDeleteJob(elem.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  {isModifyingKey === i && (
                    <div className="container">
                      <form className="">
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label htmlFor="company" className="form-label">
                              Company
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="company"
                              onChange={(e) => setCompany(e.target.value)}
                              value={company}
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="position" className="form-label">
                              Position
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="position"
                              onChange={(e) => setPosition(e.target.value)}
                              value={position}
                            />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="description" className="form-label">
                            Description
                          </label>
                          <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                          ></textarea>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label htmlFor="salaryfrom" className="form-label">
                              Salary from:
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="salaryfrom"
                              onChange={(e) => setSalaryFrom(e.target.value)}
                              value={salaryFrom}
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="salaryto" className="form-label">
                              Salary to:
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="salaryto"
                              onChange={(e) => setSalaryTo(e.target.value)}
                              value={salaryTo}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label htmlFor="type" className="form-label">
                              Type
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="type"
                              onChange={(e) => setType(e.target.value)}
                              value={type}
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="city" className="form-label">
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="city"
                              onChange={(e) => setCity(e.target.value)}
                              value={city}
                            />
                          </div>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={homeOffice}
                            onChange={(e) => setHomeOffice(e.target.checked)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Home office
                          </label>
                        </div>

                        <div className="text-end">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => handleSendModifiedJob(elem.id)}
                          >
                            Modify
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                  {
                    showApplicants===elem.id?
                    <ApplicantList id={showApplicants} setNull={setItBack} />
                    :
                    <></>
                  }
                  
                </div>
              );
            }

            return null;
          })}
          <div className="text-center mt-5">
            <button
              onClick={() =>
                setTimeout(() => {
                  navigate("/newjob");
                }, 0)
              }
            >
              Add job
            </button>
          </div>
        </>
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <h3>Personal data</h3>
            </div>
            <table className="table table-striped mt-5">
              <tbody>
                <tr>
                  <td className="chakra-petch-regular text-secondary">Name</td>
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
                  <big>Not yet</big>
                ) : (
                  experiences.data.data.map((elem) => (
                    <tr key={elem.id}>
                      <td className="chakra-petch-regular text-secondary">
                        {elem.company}
                      </td>
                      <td>{elem.title}
                      
                      <button
                          className="btn btn-outline-primary ms-5"
                          onClick={() => handleModifyExp(elem.id)}
                        >
                          Modify
                        </button>
                      
                      </td>
                      {/* <td>
                        
                      </td> */}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleAddExperience}
          >
            Add experience
          </button>
          {showAddExp ? (
            <NewExperience
              id={mutId}
              isModification={mutationType}
              closeAdd={() => setShowAddExp(false)}
            />
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
}

export default Profile;
