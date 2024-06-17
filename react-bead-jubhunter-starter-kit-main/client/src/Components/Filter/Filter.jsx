function Filter({ sFrom, sTo, sType, sCity, sHO,clearFilters, from,to,type,city,ho}) {
  return (
    <div className="container text-center border border-dark p-5 mt-3 mb-3">
      <h2 className="">Filters</h2>
      <form>
        <div className="row">
          <div className="col">
            <label htmlFor="from">Bottom of the wage band: </label>
            <input
              className="form-control"
              type="number"
              name="from"
              id="from"
              value={from}
              onChange={(e) => sFrom(e.target.value)}
            />
          </div>
          <div className="col">
            <label htmlFor="from">Top of the wage band: </label>
            <input
              className="form-control"
              type="number"
              name="to"
              id="to"
              value={to}
              onChange={(e) => sTo(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Type:</label>
            <select
              className="form-select"
              name="type"
              id="type"
              value={type}
              onChange={(e) => sType(e.target.value)}
            >
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="from">City: </label>
            <input
              className="form-control"
              type="text"
              name="from"
              id="from"
              value={city}
              onChange={(e) => sCity(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="form-check">
            <div className="col">
              <label className="form-check-label" htmlFor="homeoffice">
                Home office:
              </label>
              <input
                className=""
                type="checkbox"
                name="homeoffice"
                id="homeoffice"
                value={ho}
                onChange={(e) => sHO(e.target.checked)}
              />
            </div>
            <div className="mt-5">
              <button type="button" class="btn btn-outline-dark" onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filter;
