import { useState } from "react";
import { useAddJobMutation } from "../../store/store";
import { useNavigate } from "react-router-dom";
function NewJob() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [homeOffice, setHomeOffice] = useState(false);
  const [addjob] = useAddJobMutation();
  const navigate = useNavigate();

  const handlePost = () => {
    addjob({
      data: {
        company: company,
        position: position,
        description: description,
        salaryFrom: parseInt(salaryFrom),
        salaryTo: parseInt(salaryTo),
        type: type,
        city: city,
        homeOffice: homeOffice,
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => {
      navigate("/");
    }, 200);
  };
  return (
    <>
      <div className="container">
        <form>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="company" className="form-label">
                Company
              </label>
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder=""
                onChange={(e) => setCompany(e.target.value)}
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
                placeholder=""
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              name="description"
              id="description"
              rows="3"
              onChange={(e) => setDescription(e.target.value)}
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
                placeholder=""
                onChange={(e) => setSalaryFrom(e.target.value)}
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
                placeholder=""
                onChange={(e) => setSalaryTo(e.target.value)}
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
                name="type"
                id="type"
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                name="city"
                id="city"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => setHomeOffice(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Home office
            </label>
          </div>

          <div className="text-end">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handlePost}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewJob;
