import { useApplicant4JobsQuery } from "../../store/store";

function ApplicantList({ id, setNull }) {
  
  const { data, isError, isLoading } = useApplicant4JobsQuery({
    jobId: parseInt(id),
  });

  if (isError) {
    return (
      <>
        <p>Something wont wreng</p>
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  
  return (
    <>
      <div className="container">
        <ul>
          {data.map((elem) => {
            return (
              <>
                <li>{elem.user.fullname}</li>
              </>
            );
          })}
        </ul>
        <button onClick={setNull}>Close</button>
      </div>
    </>
  );
}
export default ApplicantList;
