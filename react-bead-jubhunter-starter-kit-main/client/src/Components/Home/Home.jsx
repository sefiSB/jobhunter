import React, { useState } from "react";
import JobList from "../JobList/JobList";
import Filter from "../Filter/Filter";

function Home() {
  const [searchContent,setSearchContent] = useState("")
  const [showFilter, setShowFilter] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [homeoffice, setHomeoffice] = useState("");
  const from2 = document.querySelector('#from')
  
  const clear = () =>{
    console.log("as")
    setFrom("")
    setTo("")
    setType("")
    setCity("")
    setHomeoffice("")
  }

  return (
    <>
      <div className="fooldal">
        <h1 className="chakra-petch-regular">Jobhunter</h1>
      </div>

      <div className="container">
        <form className="search-filter-row">
          <input
            type="text"
            placeholder="Írd be a keresendő kifejezést"
            className="input-field"
            onChange={(e)=>setSearchContent(e.target.value)}
          />
          
          <button type="button" className="filter-button" onClick={()=>setShowFilter(!showFilter)}>
            Filter
          </button>
        </form>
      </div>
      {showFilter ? (
        <Filter
          sFrom={setFrom}
          sTo={setTo}
          sType={setType}
          sCity={setCity}
          sHO={setHomeoffice}
          clearFilters={clear}
          from={from}
          to={to}
          type={type}
          city={city}
          ho={homeoffice}
        />
      ) : (
        <></>
      )}
      <JobList
        from={from}
        to={to}
        type={type}
        city={city}
        homeoffice={homeoffice}
        search={searchContent}
      />
    </>
  );
}

export default Home;
