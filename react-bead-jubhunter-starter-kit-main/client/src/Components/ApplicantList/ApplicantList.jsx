import { useApplicant4JobsQuery } from "../../store/store"

function ApplicantList({id,setNull}){
    /* console.log(id)
    const applicants = useApplicant4JobsQuery({jobId:parseInt(id)})
    console.log(applicants) */
    return(
        <>
            <ul>
                
            </ul>
            <button onClick={setNull}>Close</button>
        </>
    )
}
export default ApplicantList