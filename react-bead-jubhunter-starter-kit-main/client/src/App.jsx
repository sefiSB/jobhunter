import JobNav from "./Components/JobNav/JobNav";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import {  Route, Routes } from "react-router-dom";

import "./App.css";

import Register from "./Components/Register/Register";
import NewJob from "./Components/NewJob/NewJob";
import JobDetails from "./Components/JobDetails/JobDetails";

function App() {
  /* const { jobhubnterApi, states } = useSelector(selectStateData);
  console.log(states); */

  
  return (
    <>
      <JobNav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/newjob" element={<NewJob/>}/>
        <Route exact path="/jobdetails/*" element={<JobDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
