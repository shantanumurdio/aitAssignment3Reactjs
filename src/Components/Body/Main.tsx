import React from "react";
import Sidebar from "../Sidebar/SideBar";
import Header from "../Header/HeaderPart";
import ContentContainer from "../Contain/ContentContainer";

const Main = () => {
  return (
    <div style={{background:"black"}}>
      <Header />
      <div style={{display:"flex"}}>
        <Sidebar />
        <ContentContainer/>
      </div>
    </div>
  );
};

export default Main;
