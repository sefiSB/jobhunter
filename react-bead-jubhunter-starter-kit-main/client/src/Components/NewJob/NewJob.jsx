function NewJob() {
  return (
    <>
      <div className="container">
        <form>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="company" className="form-label">
                Comany
              </label>
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder=""
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
              />
            </div>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Home office
            </label>
          </div>

          <div className="text-end">
            <button type="button" className="btn btn-outline-secondary">
              Add
            </button>
          </div>
           
          
        </form>
      </div>
    </>
  );
}

export default NewJob;
