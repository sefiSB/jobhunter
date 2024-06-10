import { useGetJobsQuery, useGetUserQuery } from "../../store/store";
import { useNavigate } from "react-router-dom";
function JobList() {
  const { data, error, isLoading } = useGetJobsQuery();
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
                    <b>Állás</b>
                  </th>
                  <th scope="col" className="chakra-petch-regular">
                    <b>Fizetés</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((job, i) => {
                  return (
                    <tr key={i} onClick={()=>setTimeout(()=>navigate(`/jobdetails/${job.id}`),0)}>
                      <td>
                        <tr className="chakra-petch-regular">{job.position}</tr>
                        <tr style={{ color: "lightgrey" }}>{job.city}</tr>
                      </td>
                      <td>
                        <td>
                          <tr className="chakra-petch-regular">{`${job.salaryFrom}-${job.salaryTo}`}</tr>
                          <tr style={{ color: "lightgrey" }}>{job.type}</tr>
                        </td>
                      </td>
                    </tr>
                  );
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
