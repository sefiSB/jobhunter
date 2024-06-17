import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../../store/store";

function JobList({ from, to, type, city, homeoffice, search }) {
  const { data, error, isLoading } = useGetJobsQuery();

  const filterResult = (pname, pfrom, pto, ptype, pcity, phomeoffice) => {
    const searchReg = new RegExp(search,"i");

    if (search !== "") {
      if (!pname.match(searchReg)) {
        console.log(pname.match(searchReg))
        return false;
      }
    }

    if (from !== "") {
      if (from < pfrom) {
        return false;
      }
    }

    if (to !== "") {
      if (to > pto) {
        return false;
      }
    }

    if (type !== "") {
      if (type !== ptype) {
        return false;
      }
    }

    if (to !== "" && from !== "") {
      if (to < from) {
        return false;
      }
    }

    if (city !== "") {
      if (city !== pcity) {
        return false;
      }
    }

    if (homeoffice !== "") {
      if (homeoffice !== phomeoffice) {
        return false;
      }
    }

    return true;
  };

  const navigate = useNavigate();
  return (
    <div className="joblist">
      <div className="App">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col" className="chakra-petch-regular">
                    <b>Job</b>
                  </th>
                  <th scope="col" className="chakra-petch-regular">
                    <b>Salary</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((job, i) => {
                  return filterResult(
                    job.position,
                    job.salaryFrom,
                    job.salaryTo,
                    job.type,
                    job.city,
                    job.homeOffice
                  ) ? (
                    <tr key={i} onClick={() => setTimeout(() => navigate(`/jobdetails/${job.id}`), 0)}>
                      <td>
                        <div className="chakra-petch-regular">{job.position}</div>
                        <div style={{ color: "lightgrey" }}>{job.city}</div>
                      </td>
                      <td>
                        <div className="chakra-petch-regular">{`${job.salaryFrom}-${job.salaryTo}`}</div>
                        <div style={{ color: "lightgrey" }}>{job.type}</div>
                      </td>
                    </tr>
                  ) : null;
                })}
              </tbody>
            </table>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default JobList;
