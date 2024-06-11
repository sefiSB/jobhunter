import { useSelector } from "react-redux";
import {
  useApplicant4JobsQuery,
  useApplyJobMutation,
  useGetJobQuery,
} from "../../store/store";
import { useParams } from "react-router-dom";
import { useState } from "react";

function JobDetails() {
  const states = useSelector((state) => state.states);
  const params = useParams()["*"];
  const [apply,{isError,isLoading}] = useApplyJobMutation();
  const [success,setSuccess] = useState("");
  console.log(apply)

  const handleApplication = () => {
    apply({ data: { jobId: parseInt(params) } })
      .then((result) => {
        console.log(result);
        setSuccess("Jelentkezés sikeres")
      })
      .catch((error) => {
        console.log(error);
        setSuccess("Jelentkezés sikertelen")
      });
  };

  const job = useGetJobQuery({ id: params });
  /* const applicants = useApplicant4JobsQuery({ id: params });
  console.log(applicants);
 */
  if (job.isLoading) {
    return <>Loading...</>;
  }
  if (job.isError) {
    return <>Something wont wreng</>;
  }

  return states.role === "company" ? (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h3>Cég részletei</h3>
          </div>
          <table className="table table-striped mt-5">
            <tbody>
              <tr>
                <td className="chakra-petch-regular text-secondary">Név</td>
                <td>{job.data.company}</td>
              </tr>
              <tr>
                <td className="chakra-petch-regular text-secondary">Pozíció</td>
                <td>{job.data.position}</td>
              </tr>

              <tr>
                <td className="chakra-petch-regular text-secondary">Leírás</td>
                <td>{job.data.description}</td>
              </tr>
              <tr>
                <td className="chakra-petch-regular text-secondary">
                  Salary gap
                </td>
                <td>
                  {job.data.salaryFrom} - {job.data.salaryTo} HUF
                </td>
              </tr>
              <tr>
                <td className="chakra-petch-regular text-secondary">Type</td>
                <td>{job.data.type}</td>
              </tr>
              <tr>
                <td className="chakra-petch-regular text-secondary">City</td>
                <td>{job.data.city}</td>
              </tr>
              <tr>
                <td className="chakra-petch-regular text-secondary">
                  Home Office
                </td>
                <td>{job.data.homeOffice === 0 ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  ) : (
    <>
      {states.role === "jobseeker" ? (
        <>
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <h3>Cég részletei</h3>
              </div>
              <div className="col text-end">
                <button onClick={handleApplication}>Jelentkezés</button>
              </div>
              <table className="table table-striped mt-5">
                <tbody>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">Név</td>
                    <td>{job.data.company}</td>
                  </tr>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      Pozíció
                    </td>
                    <td>{job.data.position}</td>
                  </tr>

                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      Leírás
                    </td>
                    <td>{job.data.description}</td>
                  </tr>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      Salary gap
                    </td>
                    <td>
                      {job.data.salaryFrom} - {job.data.salaryTo} HUF
                    </td>
                  </tr>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      Type
                    </td>
                    <td>{job.data.type}</td>
                  </tr>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      City
                    </td>
                    <td>{job.data.city}</td>
                  </tr>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      Home Office
                    </td>
                    <td>{job.data.homeOffice === 0 ? "Yes" : "No"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-success"></p>
          </div>
        </>
      ) : (
        <>
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <h3>Cég részletei</h3>
              </div>
              <table className="table table-striped mt-5">
                <tbody>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">Név</td>
                    <td>{job.data.company}</td>
                  </tr>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      Pozíció
                    </td>
                    <td>{job.data.position}</td>
                  </tr>

                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      Leírás
                    </td>
                    <td>{job.data.description}</td>
                  </tr>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      Salary gap
                    </td>
                    <td>
                      {job.data.salaryFrom} - {job.data.salaryTo} HUF
                    </td>
                  </tr>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      Type
                    </td>
                    <td>{job.data.type}</td>
                  </tr>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      City
                    </td>
                    <td>{job.data.city}</td>
                  </tr>
                  <tr>
                    <td className="chakra-petch-regular text-secondary">
                      Home Office
                    </td>
                    <td>{job.data.homeOffice === 0 ? "Yes" : "No"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default JobDetails;
