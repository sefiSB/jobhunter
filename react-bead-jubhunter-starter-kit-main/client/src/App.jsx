import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import JobNav from "./Components/JobNav/JobNav";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";

import "./App.css";
import {
  changeAuth,
  useAuthenticateMutation,
  useGetJobsQuery,
  useGetUserQuery,
} from "./store/store";

function App() {
  const [authenticate] = useAuthenticateMutation();
  authenticate({data:{
    email: "user1@jobhunter.hu",
    password: "user1",
    strategy: "local",}
  }).then((result)=>{
    console.log(result)
  }).catch((error)=>{
    console.log(error)
  });

  /* if (isLoading) {
    return <></>;
  }
  if (error) {
    return (
      <>
        <p>Szar lehet</p>
      </>
    );
  } */

  
  return (
    <>
      <JobNav />
      <Home />
    </>
  );
}

export default App;
