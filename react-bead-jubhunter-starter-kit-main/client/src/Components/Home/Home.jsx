import React from "react";
import JobList from "../JobList/JobList";

function Home() {
  return (
    <>
      <div className="fooldal">
        <h1 className="chakra-petch-regular">Főoldal</h1>
      </div>

      <div className="container">
        <form className="search-filter-row">
          <input
            type="text"
            placeholder="Írd be a keresendő kifejezést"
            className="input-field"
          />
          <button type="button" className="search-button">
            Keresés
          </button>
          <button type="button" className="filter-button">
            Szűrés
          </button>
        </form>
      </div>

      <JobList/>
    </>
  );
}

export default Home;
