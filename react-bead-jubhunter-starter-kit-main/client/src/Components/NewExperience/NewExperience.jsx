import {
  useAddExperienceMutation,
  useModifyExpMutation,
} from "../../store/store";
import { useState } from "react";

function NewExperience({ id, isModification, closeAdd }) {
  const [addExp] = useAddExperienceMutation();
  const [modExp] = useModifyExpMutation();

  const [addCompany, setAddCompany] = useState("");
  const [addTitle, setAddTitle] = useState("");
  const [addIntervalStart, setAddIntervalStart] = useState("");
  const [addIntervalEnd, setAddIntervalEnd] = useState("");

  const handleAdd = () => {
    if (isModification === "Add") {
      addExp({
        data: {
          company: addCompany,
          title: addTitle,
          interval: `${addIntervalStart}-${addIntervalEnd}`,
        },
      })
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
      closeAdd();
    }
    if (isModification === "Modify") {
      modExp({
        data: {
          company: addCompany,
          title: addTitle,
          interval: `${addIntervalStart}-${addIntervalEnd}`,
        },
        id: id,
      })
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
        closeAdd()
    }
  };
  return (
    <>
      <div className="container border border-dark p-5 mt-5">
        <form action="">
          <div className="row">
            <div className="col form-group">
              <label htmlFor="addcompany">Company:</label>
              <input
                className="form-control"
                type="text"
                id="addcompany"
                name="addcompany"
                onChange={(e) => setAddCompany(e.target.value)}
              />
            </div>

            <div className="col form-group">
              <label htmlFor="addtitle">Title:</label>
              <input
                className="form-control"
                type="text"
                id="addtitle"
                name="addtitle"
                onChange={(e) => setAddTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col form-group">
              <label htmlFor="addfrom">From:</label>
              <input
                className="form-control"
                type="number"
                id="addfrom"
                name="addfrom"
                onChange={(e) => setAddIntervalStart(e.target.value)}
              />
            </div>

            <div className="col form-group">
              <label htmlFor="addto">To:</label>
              <input
                className="form-control"
                type="number"
                id="addto"
                name="addto"
                onChange={(e) => setAddIntervalEnd(e.target.value)}
              />
            </div>
          </div>
        </form>
        <button onClick={handleAdd}>{isModification}</button>
      </div>
    </>
  );
}

export default NewExperience;
