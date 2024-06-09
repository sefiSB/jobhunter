import React from "react";

function Home() {
  return (
    <>
      <div className="fooldal">
        <h1 className="chakra-petch-regular">Főoldal</h1>
      </div>

      <div className="container">
        <form class="search-filter-row">
          <input
            type="text"
            placeholder="Írd be a keresendő kifejezést"
            class="input-field"
          />
          <button type="button" class="search-button">
            Keresés
          </button>
          <button type="button" class="filter-button">
            Szűrés
          </button>
        </form>
      </div>

      <div className="joblist">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Állás</th>
              <th scope="col">Fizetés</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <tr>aa</tr>
                <tr style={{ color: "lightgrey" }}>bb</tr>
              </td>
              <td>
                <td>
                  <tr>aa</tr>
                  <tr style={{ color: "lightgrey" }}>bb</tr>
                </td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
